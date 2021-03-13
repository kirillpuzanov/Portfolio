import React from "react";
import s from './Contacts.module.scss';
import {v1} from "uuid";


export const Contacts = () => {

   return (
       <div className={s.contacts}>
          <div className={'container'}>
             <div className={s.contacts_form}>
                <h2> Обратная связь</h2>
                <form action="mailto:kirillpuzanov@mail.ru" encType="text/plain">
                   <p><input placeholder='Ваше имя' type="text" /></p>
                   <p><input placeholder='Email' type='email'/></p>
                   <p><textarea placeholder='Сообщение' name="text" id={v1()} cols="56" rows="10"></textarea></p>
                   <p><button type='submit'> Отправить</button></p>
                </form>
             </div>
          </div>

       </div>
   )
}