import {useState} from 'react'
import Course from "./Course"

const Courses = ({ days }) => {
  return (
    <div className="flex-container">
      <div className="flex-child"> 
        <h2>Luni</h2>
        {days["Luni"].map((course) => (
          <Course course={course}/>  
        ))}
      </div>

      <div className="flex-child"> 
        <h2>Marti</h2>
        {days["Marti"].map((course) => (
          <Course course={course}/>  
        ))}
      </div>
      
      <div className="flex-child"> 
        <h2>Miercuri</h2>
        {days["Miercuri"].map((course) => (
          <Course course={course}/>  
        ))}
      </div>
      
      <div className="flex-child"> 
        <h2>Joi</h2>
        {days["Joi"].map((course) => (
          <Course course={course}/>  
        ))}
      </div>

      <div className="flex-child"> 
        <h2>Vineri</h2>
        {days["Vineri"].map((course) => (
          <Course course={course}/>  
        ))}
      </div>
    </div>
  )
}

export default Courses