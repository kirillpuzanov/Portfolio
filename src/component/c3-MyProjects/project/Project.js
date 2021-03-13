import React, {useState} from "react";
import s from './project.module.scss'


export const Project = (props) => {

   const [active, setActive] = useState(false);
   const showLink = (id) => setActive(true)
   const hideLink = () => setActive(false)


   return (
       <div className={s.project}>
          <div
               className={s.project_content}
               onMouseOver={showLink}
               onMouseOut={hideLink}
          >
             <a
                 href={props.el.hrefProject}
                 className={active ? `${s.project_content_btn} ${s.show}` : s.project_content_btn}
             >
                Смотреть
             </a>
             <img
                 className={active ? `${s.project_content_img} ${s.opacity}` : s.project_content_img}
                 src={props.el.hrefImg}
                 alt="project img"/>
             <h3> {props.el.title}</h3>
             <p>{props.el.descr}</p>
          </div>
       </div>
   )
}