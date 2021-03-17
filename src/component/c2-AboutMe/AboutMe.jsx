import React from "react";
import s from './AboutMe.module.scss'
import {SectionTitle} from "../c0-Common/sectionTitle/SectionTitle";
import {ProgressLine} from "../c0-Common/progressLine/progressLine";
import {faBriefcase, faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const AboutMe = () => {

   return (
       <section className={s.about}>
          <SectionTitle titleText={'обо мне'}/>
          <div className={s.about_colorBlock}></div>
          <AboutMeInfo/>
          <MySkills/>
          <Experience/>
       </section>
   )
}

export const AboutMeInfo = () => {

   return (
       <div className={s.about_inner}>
          <div className={s.about_inner_contacts}>
             <ul>
                <li>Возраст: 29лет</li>
                <li>Адрес: Санкт-Петербург</li>
                <li>Национальность: Русский</li>
                <li>Телефон: <a href="tel:+79111264979">+7 (911) 126-49-79</a></li>
                <li>Email: <a target='_blank' href="mailto:kirillpuzanov@mail.ru">kirillpuzanov@mail.ru</a></li>
                <li>Telegram: <a target='_blank' href="https://t.me/Kirill_Spb1991">Отправить письмо</a></li>
                <li>GitHub: <a target='_blank' href="https://github.com/kirillpuzanov">Посмотреть GitHub</a></li>
                <li>CV: <a target='_blank'
                           href='https://drive.google.com/file/d/10uBFPk6idxloPL64Gw5eygK2pks6HW2a/view?usp=sharing'>
                   Резюме </a>
                </li>
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
   )
}

export const MySkills = () => {

   const skills = [
      {id: 1, skillName: 'React', percent: 'eighty'},
      {id: 2, skillName: 'Redux', percent: 'eighty'},
      {id: 3, skillName: 'Redux Toolkit', percent: 'seventy'},
      {id: 4, skillName: 'JavaScript', percent: 'seventy'},
      {id: 5, skillName: 'Typescript', percent: 'seventy'},
      {id: 6, skillName: 'Node.js/Express', percent: 'sixty'},
      {id: 7, skillName: 'DB/Mongo_DB', percent: 'seventy'},
      {id: 8, skillName: 'Git', percent: 'sixty'},
      {id: 9, skillName: 'HTML/CSS', percent: 'sixty'},
      {id: 10, skillName: 'WebSocket/Socket.io', percent: 'sixty'},
      {id: 11, skillName: 'Rest Api/axios', percent: 'eighty'},
      {id: 12, skillName: 'Rect Native', percent: 'twentyfive'},
   ]
   return (
       <div className={s.mySkills}>
          <h3> Мои скиллы </h3>
          <div className={s.mySkills_inner}>
             {
                skills.map(el => <ProgressLine key={el.id} skillName={el.skillName} percent={el.percent}/>)
             }
          </div>
       </div>
   )
}

export const Experience = () => {

   const expData = [
      {
         job: true,
         period: 'декабрь 2020 - по н.вр.',
         title: 'TLgroup СПб, Frontend developer ',
         description: `Задачи: создание full stack приложения, 
         для расчета груза и подбору транспорта для его перевозки
         Выполнено:
             -создание базовой архитектуры
             -аутентификация ( back 100%, front 60%)
             -авторизация (100% использование cookie)
             -компоненты для ввода данных (back 100%,front90%)
             -написание backEnd, Rest Api, подключение к MongoDB
             -синхронизация DB и ReduxState
             -использование TS, Redux Toolkit`
      },
      {
         job: true,
         period: 'октябрь 2020 - ноябрь 2020',
         title: 'Freelance - Frontend developer',
         description: `Задачи:
                       -перевод частей проекта на TS
                       -перевод классовых компонент на функциональные
                       -рефакторинг / верстка
                       -создание форм и управление их состоянием
                    Использовал: 
                    -React / Redux / ReduxForm / Formic / Material Ui / Ant Design
                    -Hook's / Axios / Git / Redux thunk / Unit tests`
      },
      {
         job: false,
         period: '2020 - 2020',
         title: 'IT-Incubator',
         description: `Изучение Frontend разработки,
         UI иблиотеки React и библиотеки стейт менеджмента Redux.
         Освоение некоторых архитектурных подходов
         и применение современных технологий разработки 
         на практике.`
      },
      {
         job: false,
         period: '2019 - 2020',
         title: 'Курсы Udemi',
         description: `WEB-разработчик
         Полный курс по JavaScript
         React + Redux Профессиональная разработка`
      },
      {
         job: true,
         period: '2015 - 2021',
         title: 'Пожарно-спасательный отряд Выборгского р-а Спб',
         description: 'Старший пожарный'
      },
      {
         job: true,
         period: '2015 - 2021',
         title: 'ООО "ФИТНЕС-ХАУС" 2012-2014  Персональный тренер',
         description: `-выполнение планов
             -привлечение клиентов
             -проведение тренировок / составление тренировочных программ`
      },
      {
         job: false,
         period: '2012 - 2014',
         title: 'Санкт-Петербургский университет государственной противопожарной службы МЧС РФ',
         description: 'Специализация: "пожаротушение и проведение аварийно-спасательных работ'
      },
      {
         job: false,
         period: '2009 - 2013',
         title: 'Национальный Государственный Университет им.П.Ф.Лесгафта',
         description: 'Педагогический факультет'
      },
   ]

   const showExp = () => {
      return expData.map(el => {
         const icon = <FontAwesomeIcon icon={el.job ? faBriefcase : faGraduationCap}/>
         return <li key={el.title}>
            <span className={s.experience_list_icon}>{icon} </span>
            <span className={s.experience_list_period}>{el.period}</span>
            <h6 className={s.experience_list_title}>{el.title}</h6>
            <p className={s.experience_list_description}>{el.description}</p>
         </li>
      })
   }

   return (
       <div className={s.experience}>
          <h3>Опыт и образование</h3>
          <ul className={s.experience_list}>
             {showExp()}
          </ul>
       </div>
   )
}