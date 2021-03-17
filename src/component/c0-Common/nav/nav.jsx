import React from 'react';
import s from './nav.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faFile, faHome, faTv} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {NavLink} from "react-router-dom";
import {ABOUT_ME, CONTACTS, CV, FIRST_SCREEN, PROJECTS} from "../../../root/routes";


export const Nav = () => {

   return (
       <nav className={s.nav}>
          <ul>
             <li>
                <FontAwesomeIcon className={s.nav_icon} icon={faHome}/>
                <NavLink to={FIRST_SCREEN} exact activeClassName={s.activeLink}>
                   <span className={s.nav_text}>в начало</span>
                </NavLink>
             </li>
             <li>
                <FontAwesomeIcon className={s.nav_icon} icon={faUser}/>
                <NavLink to={ABOUT_ME} activeClassName={s.activeLink}>
                   <span className={s.nav_text}>обо мне</span>
                </NavLink>
             </li>
             <li>
                <FontAwesomeIcon className={s.nav_icon} icon={faTv}/>
                <NavLink to={PROJECTS} activeClassName={s.activeLink}>
                   <span className={s.nav_text}>проекты</span>
                </NavLink>
             </li>
             <li>
                <FontAwesomeIcon className={s.nav_icon} icon={faFile}/>
                <NavLink to={CV} activeClassName={s.activeLink}>
                   <span className={s.nav_text}>Резюме</span>
                </NavLink>
             </li>
             <li>
                <FontAwesomeIcon className={s.nav_icon} icon={faComments}/>
                <NavLink to={CONTACTS} activeClassName={s.activeLink}>
                   <span className={s.nav_text}>контакты</span>
                </NavLink>
             </li>
          </ul>
       </nav>
   )
}