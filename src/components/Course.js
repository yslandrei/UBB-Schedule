import {FaTimes} from 'react-icons/fa'

const Course = ({course}) => {
  let ore = course["ora"].split('-')
  return (
    <div className='course'>
      <div className='course-child'>
        <div className='time'>
          <p>{ore[0] >= 10? `${ore[0]}:00` : `0${ore[0]}:00`}
          <br></br>
          {`${ore[1]}:00`}</p>
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