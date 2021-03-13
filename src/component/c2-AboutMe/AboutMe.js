import React from "react";
import s from './AboutMe.module.scss'
import {SectionTitle} from "../c0-Common/sectionTitle/SectionTitle";
import {NavLink} from "react-router-dom";
import {CV} from "../../root/routes";


export const AboutMe = (props) => {

   return (
       <section className={s.about}>
          <SectionTitle titleText={'обо мне'}/>
          <div className={s.about_colorBlock}></div>
          <div className={s.about_inner}>
             <div className={s.about_inner_contacts}>
                <ul>
                   <li>Возраст: 29лет</li>
                   <li>Адрес: Санкт-Петербург</li>
                   <li>Национальность: Русский</li>
                   <li>Телефон: <a href="tel:+79111264979">+7 (911) 126-49-79</a></li>
                   <li>Telegram: <a href="https://t.me/Kirill_Spb1991">Напишите мне в Telegram</a></li>
                   <li>GitHub: <a href="https://github.com/kirillpuzanov">Посмотреть GitHub</a></li>
                   <li>CV: <NavLink to={CV}>Посмотреть резюме</NavLink></li>
                </ul>
             </div>
             <div className={s.about_inner_aboutMeText}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   Amet assumenda at earum facere modi nulla omnis quos saepe temporibus!
                   Accusamus aspernatur est ipsam ipsum iure minima officia rem sequi, voluptatem.
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   Aspernatur culpa deserunt dolorem doloremque harum id incidunt laborum odit officiis perferendis
                   provident sit soluta vel, veniam veritatis! Corporis cupiditate in quia?Lorem ipsum dolor sit amet,
                   consectetur adipisicing elit. Ad aliquam aspernatur consequuntur esse explicabo facilis illum in
                   magnam magni molestiae nostrum, placeat possimus quam quas quos vel veritatis voluptate voluptatum.
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
             </div>
          </div>
       </section>
   )
}