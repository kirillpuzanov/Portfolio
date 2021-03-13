import React from "react";
import s from './sectionTitle.module.scss'

export const SectionTitle = (props) => {
   const {titleText} = props;
   return <div className={s.titleWrap}>
      <h2 className={s.titleWrap_foreg}>{titleText}</h2>
      <span className={s.titleWrap_back}>{titleText}</span>
   </div>
}