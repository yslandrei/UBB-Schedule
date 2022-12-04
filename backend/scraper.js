const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const fs = require('fs')
const port = process.env.PORT || 4000
const app = express()
app.use(cors())

const getGroups = async(url) => {
  //Returns an array of the groups from the parameter: url
  try{
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)
    res = $(`h1:contains(Grupa )`).text().split(/\D/g).filter((el) => {
      return el != ""
    })
    return res
  }
  catch(error){
    console.error(error)
  }
}

const getGroupSchedule = async(url, group, semigroup) => {
  try{
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)
    
    tableData = {
      "Ziua": [],
      "Luni": [],
      "Marti": [],
      "Miercuri": [],
      "Joi": [],
      "Vineri": [],
    }

    tableHTML = $(`h1:contains(${group})`).next()
    tableHTML.find("tr").each((i, el) => {
      $(el).each((j, El) => {
        args = $(El).text().split("\n").slice(1)
        args.pop()
        temp = {}
        temp["ora"] = args[1]
        temp["frecventa"] = args[2]
        temp["sala"] = args[3]
        temp["formatie"] = args[4]
        temp["tip"] = args[5]
        temp["disciplina"] = args[6]
        temp["prof"] = args[7]
        
        if(temp["formatie"].search("/") != -1 && temp["formatie"][4] == semigroup)
          tableData[args[0]].push(temp)
        else if(temp["formatie"].search("/") == -1)
          tableData[args[0]].push(temp)
    })})
    return tableData
  }
  catch(error){
    console.error(error)
  }
} 

app.get("/api/:specializare/:an/:grupa/:semigrupa", async(req, res) => {
  let currDate = new Date()
  if(currDate.getMonth() >= 2 && currDate.getDay() >= 26)
    semester = `${currDate.getFullYear() - 1}-2`
  else
    semester = `${currDate.getFullYear()}-1`
  const sentURL = `https://www.cs.ubbcluj.ro/files/orar/${semester}/tabelar/${req.params.specializare}${req.params.an}.html`
  console.log(sentURL)
  tab = await getGroupSchedule(sentURL, req.params.grupa, req.params.semigrupa)
  res.json(tab)
})

app.get("/api/groups/:specializare/:an/:grupa/:semigrupa", async(req, res) => {
  let currDate = new Date()
  if(currDate.getMonth() >= 2 && currDate.getDay() >= 26)
    semester = `${currDate.getFullYear() - 1}-2`
  else
    semester = `${currDate.getFullYear()}-1`
  const sentURL = `https://www.cs.ubbcluj.ro/files/orar/${semester}/tabelar/${req.params.specializare}${req.params.an}.html`
  groups = await getGroups(sentURL)
  res.json(groups)
})


app.listen(port, () => {
    console.log(`Server Established and  running on Port ⚡${port}`)
})
  