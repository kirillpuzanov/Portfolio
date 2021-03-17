import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import s from './MyBtn.module.scss';
import {NavLink} from "react-router-dom";

export const MyBtn = (props) => {
   const {path, btnText, iconName, _blankBtn, type, disabled} = props
   const icon = <FontAwesomeIcon icon={iconName}/>


   if (_blankBtn) {
      return <div className={s.myBtnWrap}>
         <a className={s.myBtn}
            target='_blank'
            href='https://drive.google.com/file/d/1_zHtBQsvwxTEMX7nnmeVcKK1p6J7F169/view?usp=sharing'>
            <p>{btnText}</p>
            <span className={s.myBtn_icon}>{icon}</span>
         </a>
      </div>
   } else if (!!type) {
      return <div className={s.myBtnWrap}>
         <button className={s.myBtn} type='submit' disabled={disabled}>
            <p>{btnText}</p>
            <span className={s.myBtn_icon}>{icon}</span>
         </button>
      </div>
   } else {
      return <div className={s.myBtnWrap}>
         <NavLink className={s.myBtn} to={path}>
            <p>{btnText}</p>
            <span className={s.myBtn_icon}>{icon}</span>
         </NavLink>
      </div>
   }
}



