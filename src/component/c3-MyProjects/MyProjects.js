import React from "react";
import s from './MyProjects.module.scss'
import {Project} from "./project/Project";


export const MyProjects = (props) => {

   return (
       <section className={s.projects}>
          <div className={'container'}>
             <h2>Мои проекты</h2>
             <div className={s.projects_inner}>
                {/*{*/}
                {/*   props.projects.map((el) => {*/}
                {/*      return <Project key={el.id} el={el}/>*/}
                {/*   })*/}
                {/*}*/}
             </div>
          </div>
       </section>
   )
}