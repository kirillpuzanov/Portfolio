import React from "react";
import './progressLine.css';


export const ProgressLine = (props) => {
   const {percent, skillName} = props;
   const nums = [
      {id: 'five', num: 5}, {id: 'twentyfive', num: 25}, {id: 'fifty', num: 50},
      {id: 'sixty', num: 60}, {id: 'seventy', num: 70}, {id: 'eighty', num: 80}, {id: 'ninety', num: 90},
      {id: 'onehundred', num: 100}
   ]
   const num = nums.find(el => el.id === percent)
   return (
       <div className="container">
          <input type="radio" className="radio" name="progress" value={percent} id={percent}/>
          <label htmlFor={percent} className="label">{skillName}: {num.num} %</label>

          <div className="progress">
             <div className={`progress-bar  ${percent}`}  ></div>
          </div>
       </div>
   )
}

//5 25 50 60 70 80 90 100 five twentyfive fifty sixty seventy eighty ninety onehundred
