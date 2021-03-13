import React from 'react';
import './App.scss';

import {Nav} from "../component/c0-Common/nav/nav";
import {Routes} from "./routes";
import {LogoSmile} from "../component/logoSmile/LogoSmile";

function App() {
   return (
       <div className={'App'}>
          <Nav/>
          <Routes/>
          <LogoSmile/>
       </div>
   );
}

export default App;
