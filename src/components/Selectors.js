import React from 'react'
import Button from './Button'

const Selectors = () => {
  return (
    <div className="flex-container-selectors">
      <div className="flex-child-selector">
        <label for="spec">Specializare: </label>
        <select name="spec" id="spec">
          <option value="IR">Informatica-Romana</option>
          <option value="IE">Informatica-Engleza</option>
          <option value="IM">Informatica-Maghiara</option>
          <option value="IG">Informatica-Germana</option>
        </select>
      </div>
      
      <div className="flex-child-selector">
        <label for="year">An: </label>
        <select name="year" id="year">
          <option value="1">I</option>
          <option value="2">II</option>
          <option value="3">III</option>
        </select>
      </div>

      <div className="flex-child-selector">
        <label for="group">Grupa: </label>
        <select name="group" id="group">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      
      <div className="flex-child-selector">
        <label for="semigroup">Semigrupa: </label>
        <select name="semigroup" id="semigroup">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      <div className="flex-child-selector">
      <Button color="darkblue" text="Submit"/>
      </div>
    </div>
  )
}

export default Selectors