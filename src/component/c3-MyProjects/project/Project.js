import React, {useState} from "react";
import s from './project.module.scss';

export const Project = (props) => {
   const {title, hrefProject, hrefGitHub, background, descr} = props;
   const [active, setActive] = useState(false);
   const onShowLink = () => setActive(!active)

   return (
       <div className={s.project_content}>
          <div style={{backgroundImage: background}}
               className={s.project_content_wrapp}
               onMouseOver={onShowLink} onMouseOut={onShowLink}>
             <div className={active ? s.overlay : ''}></div>
             <a href={hrefProject} target='_blank'
                className={active ? `${s.project_btn} ${s.showBtn}` : s.project_btn}>
                Смотреть
             </a>
             <a href={hrefGitHub} target='_blank'
                className={active ? `${s.project_btn} ${s.showBtn}` : s.project_btn}>
                Код GitHub
             </a>
          </div>
          <div className={s.project_descrBlock}>
             <h4>{title}</h4>
             <p>{descr}</p>
          </div>
       </div>
   )
}

