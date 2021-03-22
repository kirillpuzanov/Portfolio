import React from "react";
import s from './preloader.module.scss'
import loader from '../../../assets/loader.svg'

export const Preloader = () => {

   const loaderStyle = {
      width: '200px',
      height: '200px',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: 0,
      left: 0,
      display: 'block',
      margin: '0 auto',
      zIndex: 301,
   }


   return <>
      <img src={loader} alt="preloader" style={loaderStyle}/>
      <div className={s.loader}></div>
   </>
}