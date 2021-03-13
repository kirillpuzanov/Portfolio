import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import s from './MyBtn.module.scss';

export const MyBtn = (props) => {
   const {path, btnText, iconName} = props
   const icon = <FontAwesomeIcon icon={iconName}/>
   return <div>
      <a className={s.myBtn} href={path}>
         <p>{btnText}</p>
         <span className={s.myBtn_icon}>{icon}</span>
      </a>
   </div>
}