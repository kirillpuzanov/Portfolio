import React from "react";
import s from './SkillCard.module.scss'


export const SkillCard = (props) => {

   return (
       <div className={s.skillCard}>
          {
             props.skillsPage.map(el => {
                return(
                    <div className={s.skillCard_item} key={el.id}>
                       <div className={s.skillCard_item_logo}>
                          <img src={el.href} alt="logoSkills"/>
                       </div>
                       <p className={s.skillCard_item_title}>{el.title}</p>
                       <div className={s.skillCard_item_descr}>
                          {el.text}
                       </div>
                    </div>
                )
             })
          }
       </div>
   )
}