import {FaTemperatureHigh, FaTimes} from 'react-icons/fa'

const Course = ({course}) => {
  let ore = course["ora"].split('-')
  let details = [ore[0] >= 10? `${ore[0]}:00` : `0${ore[0]}:00`, ore[1] >= 10? `${ore[1]}:00` : `0${ore[1]}:00`]
  if(course["frecventa"].search("sapt") != -1)
    details.push(course["frecventa"].replace('.', ''))
  console.log(details)
  return (
    <div className='course'>
      <div className='course-child'>
        <div className='time'>
          {details.map((detail) =>
            <p>{detail}</p>
          )}
        </div>
      </div>
      <div className='course-child'>
        <h4>
          {course["disciplina"]} 
        </h4>
        <p>Sala: {course["sala"]}</p>
        <p>{course["prof"]}</p>
      </div>
    </div>
  )
}

export default Course