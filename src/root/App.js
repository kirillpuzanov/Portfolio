import React from 'react';
import './App.scss';
import {StartScreen} from "../component/c1-StartScreen/StartScreen";
import {AboutMe} from "../component/c2-AboutMe/AboutMe";
import {MyProjects} from "../component/c3-MyProjects/MyProjects";
import {Contacts} from "../component/c4-Contacts/Contacts";
import {dataBase} from "../component/dataFile";
import {Nav} from "../component/c0-Common/nav/nav";

function App() {
   return (
       <div className={'App'}>
          <Nav/>
          <StartScreen/>
          <AboutMe skillsPage={dataBase.skillsPage}/>
          <MyProjects projects={dataBase.projectsPage}/>
          <Contacts/>
       </div>
   );
}

export default App;
