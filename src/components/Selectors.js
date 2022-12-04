import React from 'react'
import { useState, useEffect } from 'react'

const Selectors = ({ onSubmit }) => {

  const [selectedSpec, setSelectedSpec] = useState("I")
  const [selectedYear, setSelectedYear] = useState("1")
  const [selectedGroup, setSelectedGroup] = useState("211")
  const [selectedSemigroup, setSelectedSemigroup] = useState("1")
  const [groups, setGroups] = useState(["211", "212", "213", "214", "215", "216", "217"])
  
  useEffect(() => {
    onSubmit({selectedSpec, selectedYear, selectedGroup, selectedSemigroup})
  }, [selectedGroup, selectedSemigroup, groups])
  
  useEffect(() => {
    updateGroups()
  }, [selectedSpec, selectedYear])

  const updateGroups = (() => {
    const prodURL = "https://ubbschedule.netlify.app"
    const localURL = "http://localhost:4000"
    const selectedURL = `${localURL}/api/groups/${selectedSpec}/${selectedYear}/${selectedGroup}/${selectedSemigroup}`
    fetch(selectedURL)
        .then(res => res.json())
        .then(data => {
          setGroups(data)
          setSelectedGroup(data[0])
        })
  })
  return (
    <div className="flex-container-selectors">
      <div className="flex-child-selector">
        <label for="spec">Specializare: </label>
        <select 
          name="spec" 
          id="spec" 
          onChange={(e) => setSelectedSpec(e.target.value)}>
          <option value="I">Informatica-Romana</option>
          <option value="IE">Informatica-Engleza</option>
          <option value="IM">Informatica-Maghiara</option>
          <option value="IG">Informatica-Germana</option>
        </select>
      </div>
      
      <div className="flex-child-selector">
        <label for="year">An: </label>
        <select 
          name="year" 
          id="year" 
          onChange={e => setSelectedYear(e.target.value)}>
          <option value="1">I</option>
          <option value="2">II</option>
          <option value="3">III</option>
        </select>
      </div>
      
      <div className="flex-child-selector">
        <label for="group">Grupa: </label>
        <select 
          name="group" 
          id="group"
          onChange={e => setSelectedGroup(e.target.value)}>
          {groups.map((group) => 
            <option value={group}>{group}</option>
          )}
        </select>
      </div>
      
      <div className="flex-child-selector">
        <label for="semigroup">Semigrupa: </label>
        <select 
          name="semigroup" 
          id="semigroup" 
          onChange={e => setSelectedSemigroup(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
    </div>
  )
}
export default Selectors