import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik,} from 'formik';
import s from './Contacts.module.scss';
import {MyBtn} from "../c0-Common/btn/MyBtn";
import {faMailBulk, faShare} from "@fortawesome/free-solid-svg-icons";
import {SectionTitle} from "../c0-Common/sectionTitle/SectionTitle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {sendMessage} from "./dal/sendMessage";


export const Contacts = () => {

   const [showSnac, setShowSnac] = useState(false)
   const handleClose = () => setShowSnac(false)
   const handleShow = () => {
      setShowSnac(true)
      setTimeout(() => {
         handleClose()
      }, 6000)
   }
   return (<section className={s.contactsSection}>
      <SectionTitle titleText={'Контакты'}/>
      <div className={s.colorBlock}></div>
      <div className={s.contacts_wrapper}>
         <ContactsLinks/>
         <ContactsForm handleShow={handleShow}/>
      </div>
      {showSnac && <SnacBar handleClose={handleClose}/>}
   </section>)
}


export const ContactsLinks = () => {
   const linkData = [
      {id: 0, icon: faGithub, href: 'https://github.com/kirillpuzanov'},
      {id: 1, icon: faTelegramPlane, href: 'https://t.me/Kirill_Spb1991'},
      {id: 2, icon: faLinkedinIn, href: 'https://www.linkedin.com/in/kirill-puzanov-973896204/'},
      {id: 3, icon: faMailBulk, href: 'mailto:kirillpuzanov@mail.ru'}
   ]
   return (
       <div className={s.contacts}>
          <div className={s.contacts_text}>
             <h4 className={s.contacts_text_title}>Свяжитесь со мной..</h4>
             <p className={s.contacts_text_descr}>Я открыт для предложений и
                работы над новыми проектами..</p>
          </div>
          <ul className={s.contacts_links}>
             {
                linkData.map(el => <li key={el.id} className={s.contacts_link}>
                   <FontAwesomeIcon className={s.contacts_icon} icon={el.icon}/>
                   <a href={el.href} target='_blank'/><a/>
                </li>)
             }
          </ul>
       </div>
   )
}

export const ContactsForm = ({handleShow}) => {
   const validateContactsForm = (values) => {
      const errors = {};
      if (!values.email) {
         errors.email = '/ Required /';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
         errors.email = '/ Invalid email address /';
      } else if (!values.userName) {
         errors.userName = '/ Required /';
      } else if (!values.message) {
         errors.message = '/ Required /';
      }
      return errors;
   }

   const formSubmit = (values, {setSubmitting}) => {
      setSubmitting(false)
      sendMessage(values).then(res => handleShow())
   }
   return (
       <div className={s.contacts_form}>
          <Formik
              initialValues={{email: '', userName: '', message: ''}}
              validate={validateContactsForm}
              onSubmit={formSubmit}>
             {({isSubmitting}) => (
                 <Form>
                    <h5 className={s.contacts_form_title}>Отправить письмо на почту</h5>
                    <Field type="email" name="email" placeholder="Email" className={s.contacts_form_input}/>
                    <ErrorMessage name="email" component="span" className={s.errorMessage}/>
                    <Field type="text" name="userName" placeholder="Ваше имя" className={s.contacts_form_input}/>
                    <ErrorMessage name="userName" component="span" className={s.errorMessage}/>
                    <Field as="textarea" name="message" placeholder="Сообщение.." className={s.contacts_form_textarea}/>
                    <ErrorMessage name="message" component="span" className={s.errorMessage}/>
                    <MyBtn type="submit" disabled={isSubmitting} btnText='Отправить' iconName={faShare}/>
                 </Form>
             )}
          </Formik>
       </div>
   )
}

export const SnacBar = (props) => {
   const {handleClose} = props;

   return (
       <div className={s.snacBar}>
          <span className={s.snacBar_message}>
             Ваше сообщение успешно отправлено! Я свяжусь с вами в ближайшее время. Спасибо!
          </span>
          <span className={s.snacBar_close} onClick={handleClose}></span>
       </div>
   )
}