import React from "react";
import {SkillCard} from "./SkillCard/SkillCard";
import s from './AboutMe.module.scss'




export const AboutMe = (props) => {

   return (
       <section id='Skills' className={s.skills} >
          <div className={'container'}>
             <h2>Мои скилы</h2>
             <div className={s.skills_inner}>
                <SkillCard skillsPage={props.skillsPage}/>
             </div>
          </div>


       </section>
   )
}