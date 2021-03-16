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
                <li>Email: <a href="mailto:kirillpuzanov@mail.ru">kirillpuzanov@mail.ru</a></li>
                <li>Telegram: <a href="https://t.me/Kirill_Spb1991">Отправить письмо</a></li>
                <li>GitHub: <a href="https://github.com/kirillpuzanov">Посмотреть GitHub</a></li>
                <li>CV: <a href='https://drive.google.com/file/d/10uBFPk6idxloPL64Gw5eygK2pks6HW2a/view?usp=sharing'> Резюме </a></li>
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
         title: 'TLgroup СПб',
         description: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
         'Amet assumenda at earum facere modi nulla omnis quos saepe temporibus!' +
         'Accusamus aspernatur est ipsam ipsum iure minima officia rem sequi, voluptatem.']
      },
      {
         job: false,
         period: 'июнь 2020 - декабрь 2020',
         title: 'IT-Incubator',
         description: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
         'Amet assumenda at earum facere modi nulla omnis quos saepe temporibus!' +
         'Accusamus aspernatur est ipsam ipsum iure minima officia rem sequi, voluptatem.']
      },
      {
         job: false,
         period: 'февраль 2020 - май 2020',
         title: 'Курсы Udemi',
         description: ['WEB-разработчик. Автор: Иван Петриченко',
            'Полный курс по JavaScript. Автор: Иван Петриченко ',
            'React + Redux Профессиональная разработка. Автор: Юрий Бура']
      },
      {
         job: false,
         period: '2016 - 2018',
         title: 'Санкт-Петербургский университет государственной противопожарной службы МЧС РФ',
         description: ['Специализация: "пожаротушение и проведение аварийно-спасательных работ"']
      },
      {
         job: false,
         period: '2009 - май 2013',
         title: 'Национальный Государственный Университет им.П.Ф.Лесгафта',
         description: ['Педагогический факультет']
      },

   ]

   const showExp = () => {
      return expData.map(el => {
         const icon = <FontAwesomeIcon icon={el.job ? faBriefcase : faGraduationCap}/>
         return <li key={el.period}>
            <span className={s.experience_list_icon}>{icon} </span>
            <span className={s.experience_list_period}>{el.period}</span>
            <h6 className={s.experience_list_title}>{el.title}</h6>
            <div className={s.experience_list_description}>
               <p>{el.description[0]}</p>
               {el.description.length > 1 &&
               <>
                  <p>{el.description[1]}</p>
                  <p>{el.description[2]}</p>
               </>
               }
            </div>
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