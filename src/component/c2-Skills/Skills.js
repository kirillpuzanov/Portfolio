import React from "react";
import {SkillCard} from "./SkillCard/SkillCard";
import s from './Skills.module.scss'




export const Skills = (props) => {

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