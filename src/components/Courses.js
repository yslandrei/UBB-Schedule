import Course from "./Course"

const Courses = ({days}) => {
  return (
    <div className="flex-container">
      <div className="flex-child"> 
        <h2>Luni</h2>
        {days[0].map((course) => (
          <Course key={course.id} course={course}/>  
        ))}
      </div>

      <div className="flex-child"> 
        <h2>Marti</h2>
        {days[1].map((course) => (
          <Course key={course.id} course={course}/>  
        ))}
      </div>
      
      <div className="flex-child"> 
        <h2>Miercuri</h2>
        {days[2].map((course) => (
          <Course key={course.id} course={course}/>  
        ))}
      </div>
      
      <div className="flex-child"> 
        <h2>Joi</h2>
        {days[3].map((course) => (
          <Course key={course.id} course={course}/>  
        ))}
      </div>

      <div className="flex-child"> 
        <h2>Vineri</h2>
        {days[4].map((course) => (
          <Course key={course.id} course={course}/>  
        ))}
      </div>
    </div>
  )
}

export default Courses