import React from "react";
import st from './CV.module.scss';
import svg from '../../assets/kirill_puzanov_CV.svg'
import {MyBtn} from "../c0-Common/btn/MyBtn";
import {faDownload} from "@fortawesome/free-solid-svg-icons";

export const CVComponent = () => {


   return <section>

      <div className={st.cv}>
         <img src={svg} alt="cv"/>
         <MyBtn _blankBtn={true} btnText={'Скачать CV(pdf)'}
                iconName={faDownload}/>
      </div>

   </section>
}