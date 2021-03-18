import React from 'react';
import s from './StartScreen.module.scss'
import {MyBtn} from "../c0-Common/btn/MyBtn";
import userPhoto from '../../assets/img/UserPhoto.png'
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faFile} from "@fortawesome/free-solid-svg-icons";
import {ABOUT_ME} from "../../root/routes";




export const StartScreen = () => {

   const styleImg = {
      width: '300px',
      height: 'calc(100vh - 60px)',
      backgroundImage: `url(${userPhoto})`,
      backgroundRepeat: ' no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      zIndex: 77,
      left: '30px',
      top: '30px',
   }


   return (
       <section className={s.first}>
          <div className={s.first_colorBlock}></div>
          <div className={s.first_row}>
             <div style={styleImg} className={s.first_img}></div>
             <div className={s.text}>
                <h6 className={s.text_hello}>Привет!</h6>
                <h1>Меня зовут Кирилл Пузанов</h1>
                <p className={s.text_descr}>Я, Frontend разработчик</p>
                <div className={s.btn_block}>
                   <MyBtn path={ABOUT_ME} btnText='Узнать больше' iconName={faUser}/>
                   <MyBtn _blankBtn={true} btnText='Посмотреть CV' iconName={faFile}/>
                </div>
             </div>
          </div>
       </section>
   )
}
