import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import s from './MyBtn.module.scss';
import {NavLink} from "react-router-dom";

export const MyBtn = (props) => {
   const {path, btnText, iconName} = props
   const icon = <FontAwesomeIcon icon={iconName}/>
   return <div className={s.myBtnWrap}>
      <NavLink className={s.myBtn} to={path}>
         <p>{btnText}</p>
         <span className={s.myBtn_icon}>{icon}</span>
      </NavLink>
   </div>
}