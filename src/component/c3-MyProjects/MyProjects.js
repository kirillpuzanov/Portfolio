import React from "react";
import s from './MyProjects.module.scss'



export const MyProjects = (props) => {

   return (
       <section className={s.projects}>
          <div className={'container'}>
             <h2>Мои проекты</h2>
             <div className={s.projects_inner}>
             </div>
          </div>
       </section>
   )
}