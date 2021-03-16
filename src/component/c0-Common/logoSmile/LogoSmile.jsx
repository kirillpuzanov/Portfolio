import React from "react";
import s from './LogoSmile.module.scss'

export const LogoSmile = () => {
   return (
       <div className={s.logoSmile}>
          <svg viewBox="0 0 10 10">
             <circle className={s.smile} cx="5" cy="5" r="4"
                     strokeDashoffset="-.5"
                     strokeDasharray="11.5,13.6327"/>
             <circle className={s.eyes} cx="5" cy="5" r="4"
                     strokeDashoffset="-15.5"
                     strokeDasharray="0,6.6327,0,17.5"/>
          </svg>
       </div>
   )
}