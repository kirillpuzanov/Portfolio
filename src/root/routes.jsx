import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom';
import {StartScreen} from "../component/c1-StartScreen/StartScreen";
import {AboutMe} from "../component/c2-AboutMe/AboutMe";
import {MyProjects} from "../component/c3-MyProjects/MyProjects";
import {CVComponent} from "../component/c5-CVComponent/CVComponent";
import {animated, useTransition} from 'react-spring'
import {__RouterContext} from "react-router";
import {Contacts} from "../component/c4-Contacts/Contacts";

export const FIRST_SCREEN = '/';
export const ABOUT_ME = '/about_me';
export const PROJECTS = '/projects';
export const CONTACTS = '/contacts';
export const CV = '/cv';


function useRouter() {
   return useContext(__RouterContext)
}


export const Routes = () => {

   const {location} = useRouter()

   const transitions = useTransition(location, location => location.key, {
      from: {
         opacity: 0,
         position: 'absolute',
         width: '100%',
         transform: `translate3d(100%, 0, 0)`
      },
      enter: {opacity: 1, transform: 'translate3d(0, 0, 0)'},
      leave: {opacity: 0, transform: 'translate3d(-50%, 0, 0)'}
   })

   return transitions.map(({item, props: transition, key}) => (
       <animated.div key={key} style={transition}>
          <Switch location={item}>
             <Route exact path={FIRST_SCREEN} component={StartScreen}/>
             <Route path={ABOUT_ME} component={AboutMe}/>
             <Route path={PROJECTS} component={MyProjects}/>
             <Route path={CONTACTS} component={Contacts}/>
             <Route path={CV} component={CVComponent}/>


             <Route path={'*'} render={() => <div> page not Found</div>}/>
          </Switch>
       </animated.div>
   ))
};