import React from 'react';
import s from './nav.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faHome, faTv} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";


export const Nav = () => {

   return (
       <nav className={s.nav}>
          <ul>
             <li>
                <FontAwesomeIcon className={s.nav_icon} icon={faHome}/>
                <a href="/">
                   <span className={s.nav_text}>в начало</span>
                </a>
             </li>
             <li>
                <FontAwesomeIcon className={s.nav_icon} icon={faUser}/>
                <a href="/">
                   <span className={s.nav_text}>обо мне</span>
                </a>
             </li>
             <li>
                <FontAwesomeIcon className={s.nav_icon} icon={faTv}/>
                <a href="/">
                   <span className={s.nav_text}>проекты</span>
                </a>
             </li>
             <li>
                <FontAwesomeIcon className={s.nav_icon} icon={faComments}/>
                <a href="/">
                   <span className={s.nav_text}>контакты</span>
                </a>
             </li>
          </ul>
       </nav>
   )
}