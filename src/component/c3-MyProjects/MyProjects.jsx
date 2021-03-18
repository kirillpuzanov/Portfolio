import React from "react";
import st from './MyProjects.module.scss'
import {SectionTitle} from "../c0-Common/sectionTitle/SectionTitle";
import calc from '../../assets/img/calc1.jpg';
import todoList from '../../assets/img/todoList.jpg';
import friday from '../../assets/img/friday.jpg';
import socNet from '../../assets/img/socNet.png';
import {Project} from "./project/Project";
import s from '../c1-StartScreen/StartScreen.module.scss';


export const MyProjects = () => {

   const projectsPage = [
      {
         id: 0,
         title: 'TLG Calc  In progress..',
         hrefProject: 'https://tranquil-eyrie-31054.herokuapp.com/',
         hrefGitHub: 'https://github.com/kirillpuzanov/calc_front',
         background: `url(${calc})`,
         descr: `Cервис, для онлайн расчетов грузоперевозок на стеке "MERN"
               Использовались:  TS, React/Redux, R/toolkit, Express,MongoDB,
               Axios, Ant Design..`
      },
      {
         id: 1,
         title: 'Todolist',
         hrefProject: '',
         hrefGitHub: 'https://github.com/kirillpuzanov/TodoList',
         background: `url(${todoList})`,
         descr: `Проект, реализованный за время учебы в IT-Incubator
         Для теста:
         Email: free@samuraijs.com
         Password: free`
      },
      {
         id: 2,
         title: 'Training Cards',
         hrefProject: 'https://kirillpuzanov.github.io/fridayProject',
         hrefGitHub: 'https://github.com/kirillpuzanov/fridayProject',
         background: `url(${friday})`,
         descr: `Командный проект (2 человека)
         Карточки для обучения, возможность создания,поиска, сортировки.
         Работа с Git.
         Для теста:
         Email: kirillpuzanovhtc@gmail.com
         Password: 12345678`,
      },
      {
         id: 3,
         title: 'Social Network',
         hrefProject: 'https://kirillpuzanov.github.io/Social_network/#/',
         hrefGitHub: 'https://github.com/kirillpuzanov/Social_network',
         background: `url(${socNet})`,
         descr: `Учебный проект`

      },
   ]

   return (
       <section className={st.projects}>
          <div className={s.first_colorBlock}></div>
          <SectionTitle titleText={'Проекты'}/>
          <div className={st.projects_inner}>
             {
                projectsPage.map(el => <Project key={el.id} title={el.title}
                                                hrefProject={el.hrefProject}
                                                hrefGitHub={el.hrefGitHub}
                                                background={el.background}
                                                descr={el.descr}
                />)
             }
          </div>
       </section>
   )
}