import {FaTimes} from 'react-icons/fa'

const Course = ({course}) => {
  let ore = course["ora"].split('-')
  console.log(course["frecventa"])
  return (
    <div className='course'>
      <div className='course-child'>
        <div className='time'>
          <p>
            {ore[0] >= 10? `${ore[0]}:00` : `0${ore[0]}:00`}
            <br/>
            {`${ore[1]}:00`}
            <br/>
            {course["frecventa"].replace('.', '')}
          </p>
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