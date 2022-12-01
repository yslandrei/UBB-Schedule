import {FaTimes} from 'react-icons/fa'

const Course = ({course}) => {
  return (
    <div className='course'>
      <div className='course-child'>
        <p>{course.start}</p>
        <p>{course.end}</p>
      </div>
      <div className='course-child'>
        <h4>
          {course.text} 
        </h4>
        <p>Sala: {course.room}</p>
        <p>{course.teacher}</p>
      </div>
    </div>
  )
}

export default Course