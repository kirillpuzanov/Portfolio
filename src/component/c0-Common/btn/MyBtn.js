import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import s from './MyBtn.module.scss';
import {NavLink} from "react-router-dom";

export const MyBtn = (props) => {
   const {path, btnText, iconName, _blankBtn} = props
   const icon = <FontAwesomeIcon icon={iconName}/>
   return <div className={s.myBtnWrap}>
      {_blankBtn ?
          <a className={s.myBtn}
             target='_blank'
             href='https://drive.google.com/file/d/10uBFPk6idxloPL64Gw5eygK2pks6HW2a/view?usp=sharing'>
             <p>{btnText}</p>
             <span className={s.myBtn_icon}>{icon}</span>
          </a>
          : <NavLink className={s.myBtn} to={path}>
             <p>{btnText}</p>
             <span className={s.myBtn_icon}>{icon}</span>
          </NavLink>}
   </div>
}