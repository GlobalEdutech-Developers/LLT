import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login/Login.jsx'; 
import Registration from './Registeration/Registration.jsx'; 
import HomePage from './Teach/Card/HomePage.jsx'; 
import Grade1FoundationPage from './Teach/Session/Grade1FoundationPage.jsx';
import Grade2FoundationPage from './Teach/Session/Grade2FoundationPage.jsx';
import Grade3FoundationPage from './Teach/Session/Grade3FoundationPage.jsx';
import Grade4FoundationPage from './Teach/Session/Grade4FoundationPage.jsx';
import Grade5FoundationPage from './Teach/Session/Grade5FoundationPage.jsx';
import Grade6FoundationPage from './Teach/Session/Grade6FoundationPage.jsx';
import Grade7FoundationPage from './Teach/Session/Grade7FoundationPage.jsx';
import Grade8FoundationPage from './Teach/Session/Grade8FoundationPage.jsx';
import Grade9FoundationPage from './Teach/Session/Grade9FoundationPage.jsx';
import Grade10FoundationPage from './Teach/Session/Grade10FoundationPage.jsx';
import Grade11FoundationPage from './Teach/Session/Grade11FoundationPage.jsx';
import Grade12FoundationPage from './Teach/Session/Grade12FoundationPage.jsx';
import TestPage from './Teach/Test/TestPage.jsx'; 
import Sidebar from './Sidebar/Sidebar.jsx'; 
import Assign from './Assign/Assign.jsx';

import Grade1Session1 from './Teach/Foundation/TeachGrade1/Grade1Session1.jsx'; 
import Grade1Session2 from './Teach/Foundation/TeachGrade1/Grade1Session2.jsx';
import Grade1Session3 from './Teach/Foundation/TeachGrade1/Grade1Session3.jsx';
import Grade1Session4 from './Teach/Foundation/TeachGrade1/Grade1Session4.jsx';
import Grade1Session5 from './Teach/Foundation/TeachGrade1/Grade1Session5.jsx';
import Grade1Session6 from './Teach/Foundation/TeachGrade1/Grade1Session6.jsx';
import Grade1Session7 from './Teach/Foundation/TeachGrade1/Grade1Session7.jsx';
import Grade1Session8 from "./Teach/Foundation/TeachGrade1/Grade1Session8.jsx";

import Grade1Session9 from './Teach/Foundation/TeachGrade1/Grade1Session9.jsx';
import Grade1Session10 from './Teach/Foundation/TeachGrade1/Grade1Session10.jsx';
import Grade1Session11 from './Teach/Foundation/TeachGrade1/Grade1Session11.jsx';
import Grade1Session12 from './Teach/Foundation/TeachGrade1/Grade1Session12.jsx';
import Grade1Session13 from './Teach/Foundation/TeachGrade1/Grade1Session13.jsx';
import Grade1Session14 from './Teach/Foundation/TeachGrade1/Grade1Session14.jsx';
import Grade1Session15 from './Teach/Foundation/TeachGrade1/Grade1Session15.jsx';
import Grade1Session16 from './Teach/Foundation/TeachGrade1/Grade1Session16.jsx';
import Grade1Session17 from './Teach/Foundation/TeachGrade1/Grade1Session17.jsx';
import Grade1Session18 from './Teach/Foundation/TeachGrade1/Grade1Session18.jsx';


import Grade2Session1 from './Teach/Foundation/TeachGrade2/Grade2Session1.jsx';
import Grade2Session2 from './Teach/Foundation/TeachGrade2/Grade2Session2.jsx';
import Grade2Session3 from './Teach/Foundation/TeachGrade2/Grade2Session3.jsx';
import Grade2Session4 from './Teach/Foundation/TeachGrade2/Grade2Session4.jsx';
import Grade2Session5 from './Teach/Foundation/TeachGrade2/Grade2Session5.jsx';
import Grade2Session6 from './Teach/Foundation/TeachGrade2/Grade2Session6.jsx';
import Grade2Session7 from './Teach/Foundation/TeachGrade2/Grade2Session7.jsx';
import Grade2Session8 from './Teach/Foundation/TeachGrade2/Grade2Session8.jsx';
import Grade2Session9 from './Teach/Foundation/TeachGrade2/Grade2Session9.jsx';
import Grade2Session10 from './Teach/Foundation/TeachGrade2/Grade2Session10.jsx';
import Grade2Session11 from './Teach/Foundation/TeachGrade2/Grade2Session11.jsx';
import Grade2Session12 from './Teach/Foundation/TeachGrade2/Grade2Session12.jsx';
import Grade2Session13 from './Teach/Foundation/TeachGrade2/Grade2Session13.jsx';
import Grade2Session14 from './Teach/Foundation/TeachGrade2/Grade2Session14.jsx';
import Grade2Session15 from './Teach/Foundation/TeachGrade2/Grade2Session15.jsx';
import Grade2Session16 from './Teach/Foundation/TeachGrade2/Grade2Session16.jsx';
import Grade2Session17 from './Teach/Foundation/TeachGrade2/Grade2Session17.jsx';
import Grade2Session18 from './Teach/Foundation/TeachGrade2/Grade2Session18.jsx';
import Grade2Session19 from './Teach/Foundation/TeachGrade2/Grade2Session19.jsx';
import Grade2Session20 from './Teach/Foundation/TeachGrade2/Grade2Session20.jsx';
import Grade2Session21 from './Teach/Foundation/TeachGrade2/Grade2Session21.jsx';
import Grade2Session22 from './Teach/Foundation/TeachGrade2/Grade2Session22.jsx';
import Grade2Session23 from './Teach/Foundation/TeachGrade2/Grade2Session23.jsx';
import Grade2Session24 from './Teach/Foundation/TeachGrade2/Grade2Session24.jsx';
import Grade2Session25 from './Teach/Foundation/TeachGrade2/Grade2Session25.jsx';


import Grade3Session1 from './Teach/Foundation/TeachGrade3/Grade3Session1.jsx';
import Grade3Session2 from './Teach/Foundation/TeachGrade3/Grade3Session2.jsx';
import Grade3Session3 from './Teach/Foundation/TeachGrade3/Grade3Session3.jsx';
import Grade3Session4 from './Teach/Foundation/TeachGrade3/Grade3Session4.jsx';
import Grade3Session5 from './Teach/Foundation/TeachGrade3/Grade3Session5.jsx';
import Grade3Session6 from './Teach/Foundation/TeachGrade3/Grade3Session6.jsx';
import Grade3Session7 from './Teach/Foundation/TeachGrade3/Grade3Session7.jsx';
import Grade3Session8 from './Teach/Foundation/TeachGrade3/Grade3Session8.jsx';
import Grade3Session9 from './Teach/Foundation/TeachGrade3/Grade3Session9.jsx';  
import Grade3Session10 from './Teach/Foundation/TeachGrade3/Grade3Session10.jsx';
import Grade3Session11 from './Teach/Foundation/TeachGrade3/Grade3Session11.jsx';
import Grade3Session12 from './Teach/Foundation/TeachGrade3/Grade3Session12.jsx';
import Grade3Session13 from './Teach/Foundation/TeachGrade3/Grade3Session13.jsx';
import Grade3Session14 from './Teach/Foundation/TeachGrade3/Grade3Session14.jsx';
import Grade3Session15 from './Teach/Foundation/TeachGrade3/Grade3Session15.jsx';
import Grade3Session16 from './Teach/Foundation/TeachGrade3/Grade3Session16.jsx';
import Grade3Session17 from './Teach/Foundation/TeachGrade3/Grade3Session17.jsx';
import Grade3Session18 from './Teach/Foundation/TeachGrade3/Grade3Session18.jsx';
import Grade3Session19 from './Teach/Foundation/TeachGrade3/Grade3Session19.jsx';
import Grade3Session20 from './Teach/Foundation/TeachGrade3/Grade3Session20.jsx';
import Grade3Session21 from './Teach/Foundation/TeachGrade3/Grade3Session21.jsx';
import Grade3Session22 from './Teach/Foundation/TeachGrade3/Grade3Session22.jsx';
import Grade3Session23 from './Teach/Foundation/TeachGrade3/Grade3Session23.jsx';
import Grade3Session24 from './Teach/Foundation/TeachGrade3/Grade3Session24.jsx';
import Grade3Session25 from './Teach/Foundation/TeachGrade3/Grade3Session25.jsx';
import Grade3Session26 from './Teach/Foundation/TeachGrade3/Grade3Session26.jsx';
import Grade3Session27 from './Teach/Foundation/TeachGrade3/Grade3Session27.jsx';
import Grade3Session28 from './Teach/Foundation/TeachGrade3/Grade3Session28.jsx';
import Grade3Session29 from './Teach/Foundation/TeachGrade3/Grade3Session29.jsx';
import Grade3Session30 from './Teach/Foundation/TeachGrade3/Grade3Session30.jsx';
import Grade3Session31 from './Teach/Foundation/TeachGrade3/Grade3Session31.jsx';
import Grade3Session32 from './Teach/Foundation/TeachGrade3/Grade3Session32.jsx';
import Grade3Session33 from './Teach/Foundation/TeachGrade3/Grade3Session33.jsx';
import Grade3Session34 from './Teach/Foundation/TeachGrade3/Grade3Session34.jsx';
import Grade3Session35 from './Teach/Foundation/TeachGrade3/Grade3Session35.jsx';
import Grade3Session36 from './Teach/Foundation/TeachGrade3/Grade3Session36.jsx';


import Grade4Session1 from './Teach/Foundation/TeachGrade4/Grade4Session1.jsx';
import Grade4Session2 from './Teach/Foundation/TeachGrade4/Grade4Session2.jsx';
import Grade4Session3 from './Teach/Foundation/TeachGrade4/Grade4Session3.jsx';
import Grade4Session4 from './Teach/Foundation/TeachGrade4/Grade4Session4.jsx';
import Grade4Session5 from './Teach/Foundation/TeachGrade4/Grade4Session5.jsx';
import Grade4Session6 from './Teach/Foundation/TeachGrade4/Grade4Session6.jsx';
import Grade4Session7 from './Teach/Foundation/TeachGrade4/Grade4Session7.jsx';
import Grade4Session8 from './Teach/Foundation/TeachGrade4/Grade4Session8.jsx';
import Grade4Session9 from './Teach/Foundation/TeachGrade4/Grade4Session9.jsx';  
import Grade4Session10 from './Teach/Foundation/TeachGrade4/Grade4Session10.jsx';
import Grade4Session11 from './Teach/Foundation/TeachGrade4/Grade4Session11.jsx';
import Grade4Session12 from './Teach/Foundation/TeachGrade4/Grade4Session12.jsx';
import Grade4Session13 from './Teach/Foundation/TeachGrade4/Grade4Session13.jsx';
import Grade4Session14 from './Teach/Foundation/TeachGrade4/Grade4Session14.jsx';
import Grade4Session15 from './Teach/Foundation/TeachGrade4/Grade4Session15.jsx';
import Grade4Session16 from './Teach/Foundation/TeachGrade4/Grade4Session16.jsx';
import Grade4Session17 from './Teach/Foundation/TeachGrade4/Grade4Session17.jsx';
import Grade4Session18 from './Teach/Foundation/TeachGrade4/Grade4Session18.jsx';
import Grade4Session19 from './Teach/Foundation/TeachGrade4/Grade4Session19.jsx';
import Grade4Session20 from './Teach/Foundation/TeachGrade4/Grade4Session20.jsx';
import Grade4Session21 from './Teach/Foundation/TeachGrade4/Grade4Session21.jsx';
import Grade4Session22 from './Teach/Foundation/TeachGrade4/Grade4Session22.jsx';
import Grade4Session23 from './Teach/Foundation/TeachGrade4/Grade4Session23.jsx';
import Grade4Session24 from './Teach/Foundation/TeachGrade4/Grade4Session24.jsx';
import Grade4Session25 from './Teach/Foundation/TeachGrade4/Grade4Session25.jsx';
import Grade4Session26 from './Teach/Foundation/TeachGrade4/Grade4Session26.jsx';
import Grade4Session27 from './Teach/Foundation/TeachGrade4/Grade4Session27.jsx';
import Grade4Session28 from './Teach/Foundation/TeachGrade4/Grade4Session28.jsx';
import Grade4Session29 from './Teach/Foundation/TeachGrade4/Grade4Session29.jsx';
import Grade4Session30 from './Teach/Foundation/TeachGrade4/Grade4Session30.jsx';
import Grade4Session31 from './Teach/Foundation/TeachGrade4/Grade4Session31.jsx';
import Grade4Session32 from './Teach/Foundation/TeachGrade4/Grade4Session32.jsx';
import Grade4Session33 from './Teach/Foundation/TeachGrade4/Grade4Session33.jsx';
import Grade4Session34 from './Teach/Foundation/TeachGrade4/Grade4Session34.jsx';
import Grade4Session35 from './Teach/Foundation/TeachGrade4/Grade4Session35.jsx';
import Grade4Session36 from './Teach/Foundation/TeachGrade4/Grade4Session36.jsx';


import Grade5Session1 from './Teach/Foundation/TeachGrade5/Grade5Session1.jsx';
import Grade5Session2 from './Teach/Foundation/TeachGrade5/Grade5Session2.jsx';
import Grade5Session3 from './Teach/Foundation/TeachGrade5/Grade5Session3.jsx';
import Grade5Session4 from './Teach/Foundation/TeachGrade5/Grade5Session4.jsx';
import Grade5Session5 from './Teach/Foundation/TeachGrade5/Grade5Session5.jsx';
import Grade5Session6 from './Teach/Foundation/TeachGrade5/Grade5Session6.jsx';
import Grade5Session7 from './Teach/Foundation/TeachGrade5/Grade5Session7.jsx';
import Grade5Session8 from './Teach/Foundation/TeachGrade5/Grade5Session8.jsx';
import Grade5Session9 from './Teach/Foundation/TeachGrade5/Grade5Session9.jsx';  
import Grade5Session10 from './Teach/Foundation/TeachGrade5/Grade5Session10.jsx';
import Grade5Session11 from './Teach/Foundation/TeachGrade5/Grade5Session11.jsx';
import Grade5Session12 from './Teach/Foundation/TeachGrade5/Grade5Session12.jsx';
import Grade5Session13 from './Teach/Foundation/TeachGrade5/Grade5Session13.jsx';
import Grade5Session14 from './Teach/Foundation/TeachGrade5/Grade5Session14.jsx';
import Grade5Session15 from './Teach/Foundation/TeachGrade5/Grade5Session15.jsx';
import Grade5Session16 from './Teach/Foundation/TeachGrade5/Grade5Session16.jsx';
import Grade5Session17 from './Teach/Foundation/TeachGrade5/Grade5Session17.jsx';
import Grade5Session18 from './Teach/Foundation/TeachGrade5/Grade5Session18.jsx';
import Grade5Session19 from './Teach/Foundation/TeachGrade5/Grade5Session19.jsx';
import Grade5Session20 from './Teach/Foundation/TeachGrade5/Grade5Session20.jsx';
import Grade5Session21 from './Teach/Foundation/TeachGrade5/Grade5Session21.jsx';
import Grade5Session22 from './Teach/Foundation/TeachGrade5/Grade5Session22.jsx';
import Grade5Session23 from './Teach/Foundation/TeachGrade5/Grade5Session23.jsx';
import Grade5Session24 from './Teach/Foundation/TeachGrade5/Grade5Session24.jsx';
import Grade5Session25 from './Teach/Foundation/TeachGrade5/Grade5Session25.jsx';
import Grade5Session26 from './Teach/Foundation/TeachGrade5/Grade5Session26.jsx';
import Grade5Session27 from './Teach/Foundation/TeachGrade5/Grade5Session27.jsx';
import Grade5Session28 from './Teach/Foundation/TeachGrade5/Grade5Session28.jsx';
import Grade5Session29 from './Teach/Foundation/TeachGrade5/Grade5Session29.jsx';
import Grade5Session30 from './Teach/Foundation/TeachGrade5/Grade5Session30.jsx';
import Grade5Session31 from './Teach/Foundation/TeachGrade5/Grade5Session31.jsx';
import Grade5Session32 from './Teach/Foundation/TeachGrade5/Grade5Session32.jsx';
import Grade5Session33 from './Teach/Foundation/TeachGrade5/Grade5Session33.jsx';
import Grade5Session34 from './Teach/Foundation/TeachGrade5/Grade5Session34.jsx';
import Grade5Session35 from './Teach/Foundation/TeachGrade5/Grade5Session35.jsx';
import Grade5Session36 from './Teach/Foundation/TeachGrade5/Grade5Session36.jsx';


import Grade6Session1 from './Teach/Foundation/TeachGrade6/Grade6Session1.jsx';
import Grade6Session2 from './Teach/Foundation/TeachGrade6/Grade6Session2.jsx';
import Grade6Session3 from './Teach/Foundation/TeachGrade6/Grade6Session3.jsx';
import Grade6Session4 from './Teach/Foundation/TeachGrade6/Grade6Session4.jsx';
import Grade6Session5 from './Teach/Foundation/TeachGrade6/Grade6Session5.jsx';
import Grade6Session6 from './Teach/Foundation/TeachGrade6/Grade6Session6.jsx';
import Grade6Session7 from './Teach/Foundation/TeachGrade6/Grade6Session7.jsx';
import Grade6Session8 from './Teach/Foundation/TeachGrade6/Grade6Session8.jsx';
import Grade6Session9 from './Teach/Foundation/TeachGrade6/Grade6Session9.jsx';  
import Grade6Session10 from './Teach/Foundation/TeachGrade6/Grade6Session10.jsx';
import Grade6Session11 from './Teach/Foundation/TeachGrade6/Grade6Session11.jsx';
import Grade6Session12 from './Teach/Foundation/TeachGrade6/Grade6Session12.jsx';
import Grade6Session13 from './Teach/Foundation/TeachGrade6/Grade6Session13.jsx';
import Grade6Session14 from './Teach/Foundation/TeachGrade6/Grade6Session14.jsx';
import Grade6Session15 from './Teach/Foundation/TeachGrade6/Grade6Session15.jsx';
import Grade6Session16 from './Teach/Foundation/TeachGrade6/Grade6Session16.jsx';
import Grade6Session17 from './Teach/Foundation/TeachGrade6/Grade6Session17.jsx';
import Grade6Session18 from './Teach/Foundation/TeachGrade6/Grade6Session18.jsx';
import Grade6Session19 from './Teach/Foundation/TeachGrade6/Grade6Session19.jsx';
import Grade6Session20 from './Teach/Foundation/TeachGrade6/Grade6Session20.jsx';
import Grade6Session21 from './Teach/Foundation/TeachGrade6/Grade6Session21.jsx';
import Grade6Session22 from './Teach/Foundation/TeachGrade6/Grade6Session22.jsx';
import Grade6Session23 from './Teach/Foundation/TeachGrade6/Grade6Session23.jsx';
import Grade6Session24 from './Teach/Foundation/TeachGrade6/Grade6Session24.jsx';
import Grade6Session25 from './Teach/Foundation/TeachGrade6/Grade6Session25.jsx';
import Grade6Session26 from './Teach/Foundation/TeachGrade6/Grade6Session26.jsx';
import Grade6Session27 from './Teach/Foundation/TeachGrade6/Grade6Session27.jsx';
import Grade6Session28 from './Teach/Foundation/TeachGrade6/Grade6Session28.jsx';
import Grade6Session29 from './Teach/Foundation/TeachGrade6/Grade6Session29.jsx';
import Grade6Session30 from './Teach/Foundation/TeachGrade6/Grade6Session30.jsx';
import Grade6Session31 from './Teach/Foundation/TeachGrade6/Grade6Session31.jsx';
import Grade6Session32 from './Teach/Foundation/TeachGrade6/Grade6Session32.jsx';
import Grade6Session33 from './Teach/Foundation/TeachGrade6/Grade6Session33.jsx';
import Grade6Session34 from './Teach/Foundation/TeachGrade6/Grade6Session34.jsx';
import Grade6Session35 from './Teach/Foundation/TeachGrade6/Grade6Session35.jsx';
import Grade6Session36 from './Teach/Foundation/TeachGrade6/Grade6Session36.jsx';
import Grade6Session37 from './Teach/Foundation/TeachGrade6/Grade6Session37.jsx';
import Grade6Session38 from './Teach/Foundation/TeachGrade6/Grade6Session38.jsx';

import Grade7Session1 from './Teach/Foundation/TeachGrade7/Grade7Session1.jsx';
import Grade7Session2 from './Teach/Foundation/TeachGrade7/Grade7Session2.jsx';
import Grade7Session3 from './Teach/Foundation/TeachGrade7/Grade7Session3.jsx';
import Grade7Session4 from './Teach/Foundation/TeachGrade7/Grade7Session4.jsx';
import Grade7Session5 from './Teach/Foundation/TeachGrade7/Grade7Session5.jsx';
import Grade7Session6 from './Teach/Foundation/TeachGrade7/Grade7Session6.jsx';
import Grade7Session7 from './Teach/Foundation/TeachGrade7/Grade7Session7.jsx';
import Grade7Session8 from './Teach/Foundation/TeachGrade7/Grade7Session8.jsx';
import Grade7Session9 from './Teach/Foundation/TeachGrade7/Grade7Session9.jsx';  
import Grade7Session10 from './Teach/Foundation/TeachGrade7/Grade7Session10.jsx';
import Grade7Session11 from './Teach/Foundation/TeachGrade7/Grade7Session11.jsx';
import Grade7Session12 from './Teach/Foundation/TeachGrade7/Grade7Session12.jsx';
import Grade7Session13 from './Teach/Foundation/TeachGrade7/Grade7Session13.jsx';
import Grade7Session14 from './Teach/Foundation/TeachGrade7/Grade7Session14.jsx';
import Grade7Session15 from './Teach/Foundation/TeachGrade7/Grade7Session15.jsx';
import Grade7Session16 from './Teach/Foundation/TeachGrade7/Grade7Session16.jsx';
import Grade7Session17 from './Teach/Foundation/TeachGrade7/Grade7Session17.jsx';
import Grade7Session18 from './Teach/Foundation/TeachGrade7/Grade7Session18.jsx';
import Grade7Session19 from './Teach/Foundation/TeachGrade7/Grade7Session19.jsx';
import Grade7Session20 from './Teach/Foundation/TeachGrade7/Grade7Session20.jsx';
import Grade7Session21 from './Teach/Foundation/TeachGrade7/Grade7Session21.jsx';
import Grade7Session22 from './Teach/Foundation/TeachGrade7/Grade7Session22.jsx';
import Grade7Session23 from './Teach/Foundation/TeachGrade7/Grade7Session23.jsx';
import Grade7Session24 from './Teach/Foundation/TeachGrade7/Grade7Session24.jsx';
import Grade7Session25 from './Teach/Foundation/TeachGrade7/Grade7Session25.jsx';
import Grade7Session26 from './Teach/Foundation/TeachGrade7/Grade7Session26.jsx';
import Grade7Session27 from './Teach/Foundation/TeachGrade7/Grade7Session27.jsx';
import Grade7Session28 from './Teach/Foundation/TeachGrade7/Grade7Session28.jsx';
import Grade7Session29 from './Teach/Foundation/TeachGrade7/Grade7Session29.jsx';
import Grade7Session30 from './Teach/Foundation/TeachGrade7/Grade7Session30.jsx';
import Grade7Session31 from './Teach/Foundation/TeachGrade7/Grade7Session31.jsx';
import Grade7Session32 from './Teach/Foundation/TeachGrade7/Grade7Session32.jsx';
import Grade7Session33 from './Teach/Foundation/TeachGrade7/Grade7Session33.jsx';
import Grade7Session34 from './Teach/Foundation/TeachGrade7/Grade7Session34.jsx';
import Grade7Session35 from './Teach/Foundation/TeachGrade7/Grade7Session35.jsx';
import Grade7Session36 from './Teach/Foundation/TeachGrade7/Grade7Session36.jsx';
import Grade7Session37 from './Teach/Foundation/TeachGrade7/Grade7Session37.jsx';
import Grade7Session38 from './Teach/Foundation/TeachGrade7/Grade7Session38.jsx';


import Grade8Session1 from './Teach/Foundation/TeachGrade8/Grade8Session1.jsx';
import Grade8Session2 from './Teach/Foundation/TeachGrade8/Grade8Session2.jsx';
import Grade8Session3 from './Teach/Foundation/TeachGrade8/Grade8Session3.jsx';
import Grade8Session4 from './Teach/Foundation/TeachGrade8/Grade8Session4.jsx';
import Grade8Session5 from './Teach/Foundation/TeachGrade8/Grade8Session5.jsx';
import Grade8Session6 from './Teach/Foundation/TeachGrade8/Grade8Session6.jsx';
import Grade8Session7 from './Teach/Foundation/TeachGrade8/Grade8Session7.jsx';
import Grade8Session8 from './Teach/Foundation/TeachGrade8/Grade8Session8.jsx';
import Grade8Session9 from './Teach/Foundation/TeachGrade8/Grade8Session9.jsx';  
import Grade8Session10 from './Teach/Foundation/TeachGrade8/Grade8Session10.jsx';
import Grade8Session11 from './Teach/Foundation/TeachGrade8/Grade8Session11.jsx';
import Grade8Session12 from './Teach/Foundation/TeachGrade8/Grade8Session12.jsx';
import Grade8Session13 from './Teach/Foundation/TeachGrade8/Grade8Session13.jsx';
import Grade8Session14 from './Teach/Foundation/TeachGrade8/Grade8Session14.jsx';
import Grade8Session15 from './Teach/Foundation/TeachGrade8/Grade8Session15.jsx';
import Grade8Session16 from './Teach/Foundation/TeachGrade8/Grade8Session16.jsx';
import Grade8Session17 from './Teach/Foundation/TeachGrade8/Grade8Session17.jsx';
import Grade8Session18 from './Teach/Foundation/TeachGrade8/Grade8Session18.jsx';
import Grade8Session19 from './Teach/Foundation/TeachGrade8/Grade8Session19.jsx';
import Grade8Session20 from './Teach/Foundation/TeachGrade8/Grade8Session20.jsx';
import Grade8Session21 from './Teach/Foundation/TeachGrade8/Grade8Session21.jsx';
import Grade8Session22 from './Teach/Foundation/TeachGrade8/Grade8Session22.jsx';
import Grade8Session23 from './Teach/Foundation/TeachGrade8/Grade8Session23.jsx';
import Grade8Session24 from './Teach/Foundation/TeachGrade8/Grade8Session24.jsx';
import Grade8Session25 from './Teach/Foundation/TeachGrade8/Grade8Session25.jsx';
import Grade8Session26 from './Teach/Foundation/TeachGrade8/Grade8Session26.jsx';
import Grade8Session27 from './Teach/Foundation/TeachGrade8/Grade8Session27.jsx';
import Grade8Session28 from './Teach/Foundation/TeachGrade8/Grade8Session28.jsx';
import Grade8Session29 from './Teach/Foundation/TeachGrade8/Grade8Session29.jsx';
import Grade8Session30 from './Teach/Foundation/TeachGrade8/Grade8Session30.jsx';
import Grade8Session31 from './Teach/Foundation/TeachGrade8/Grade8Session31.jsx';
import Grade8Session32 from './Teach/Foundation/TeachGrade8/Grade8Session32.jsx';
import Grade8Session33 from './Teach/Foundation/TeachGrade8/Grade8Session33.jsx';
import Grade8Session34 from './Teach/Foundation/TeachGrade8/Grade8Session34.jsx';
import Grade8Session35 from './Teach/Foundation/TeachGrade8/Grade8Session35.jsx';
import Grade8Session36 from './Teach/Foundation/TeachGrade8/Grade8Session36.jsx';
import Grade8Session37 from './Teach/Foundation/TeachGrade8/Grade8Session37.jsx';
import Grade8Session38 from './Teach/Foundation/TeachGrade8/Grade8Session38.jsx';



import Grade9Session1 from './Teach/Foundation/TeachGrade9/Grade9Session1.jsx';
import Grade9Session2 from './Teach/Foundation/TeachGrade9/Grade9Session2.jsx';
import Grade9Session3 from './Teach/Foundation/TeachGrade9/Grade9Session3.jsx';
import Grade9Session4 from './Teach/Foundation/TeachGrade9/Grade9Session4.jsx';
import Grade9Session5 from './Teach/Foundation/TeachGrade9/Grade9Session5.jsx';
import Grade9Session6 from './Teach/Foundation/TeachGrade9/Grade9Session6.jsx';
import Grade9Session7 from './Teach/Foundation/TeachGrade9/Grade9Session7.jsx';
import Grade9Session8 from './Teach/Foundation/TeachGrade9/Grade9Session8.jsx';
import Grade9Session9 from './Teach/Foundation/TeachGrade9/Grade9Session9.jsx';  
import Grade9Session10 from './Teach/Foundation/TeachGrade9/Grade9Session10.jsx';
import Grade9Session11 from './Teach/Foundation/TeachGrade9/Grade9Session11.jsx';
import Grade9Session12 from './Teach/Foundation/TeachGrade9/Grade9Session12.jsx';
import Grade9Session13 from './Teach/Foundation/TeachGrade9/Grade9Session13.jsx';
import Grade9Session14 from './Teach/Foundation/TeachGrade9/Grade9Session14.jsx';
import Grade9Session15 from './Teach/Foundation/TeachGrade9/Grade9Session15.jsx';


import Grade10Session1 from './Teach/Foundation/TeachGrade10/Grade10Session1.jsx';
import Grade10Session2 from './Teach/Foundation/TeachGrade10/Grade10Session2.jsx';
import Grade10Session3 from './Teach/Foundation/TeachGrade10/Grade10Session3.jsx';
import Grade10Session4 from './Teach/Foundation/TeachGrade10/Grade10Session4.jsx';
import Grade10Session5 from './Teach/Foundation/TeachGrade10/Grade10Session5.jsx';
import Grade10Session6 from './Teach/Foundation/TeachGrade10/Grade10Session6.jsx';
import Grade10Session7 from './Teach/Foundation/TeachGrade10/Grade10Session7.jsx';
import Grade10Session8 from './Teach/Foundation/TeachGrade10/Grade10Session8.jsx';
import Grade10Session9 from './Teach/Foundation/TeachGrade10/Grade10Session9.jsx';  
import Grade10Session10 from './Teach/Foundation/TeachGrade10/Grade10Session10.jsx';
import Grade10Session11 from './Teach/Foundation/TeachGrade10/Grade10Session11.jsx';
import Grade10Session12 from './Teach/Foundation/TeachGrade10/Grade10Session12.jsx';
import Grade10Session13 from './Teach/Foundation/TeachGrade10/Grade10Session13.jsx';
import Grade10Session14 from './Teach/Foundation/TeachGrade10/Grade10Session14.jsx';
import Grade10Session15 from './Teach/Foundation/TeachGrade10/Grade10Session15.jsx';
import Grade10Session16 from './Teach/Foundation/TeachGrade10/Grade10Session16.jsx';
import Grade10Session17 from './Teach/Foundation/TeachGrade10/Grade10Session17.jsx';
import Grade10Session18 from './Teach/Foundation/TeachGrade10/Grade10Session18.jsx';
import Grade10Session19 from './Teach/Foundation/TeachGrade10/Grade10Session19.jsx';
import Grade10Session20 from './Teach/Foundation/TeachGrade10/Grade10Session20.jsx';
import Grade10Session21 from './Teach/Foundation/TeachGrade10/Grade10Session21.jsx';
import Grade10Session22 from './Teach/Foundation/TeachGrade10/Grade10Session22.jsx';
import Grade10Session23 from './Teach/Foundation/TeachGrade10/Grade10Session23.jsx';
import Grade10Session24 from './Teach/Foundation/TeachGrade10/Grade10Session24.jsx';
import Grade10Session25 from './Teach/Foundation/TeachGrade10/Grade10Session25.jsx';
import Grade10Session26 from './Teach/Foundation/TeachGrade10/Grade10Session26.jsx';
import Grade10Session27 from './Teach/Foundation/TeachGrade10/Grade10Session27.jsx';
import Grade10Session28 from './Teach/Foundation/TeachGrade10/Grade10Session28.jsx';
import Grade10Session29 from './Teach/Foundation/TeachGrade10/Grade10Session29.jsx';
import Grade10Session30 from './Teach/Foundation/TeachGrade10/Grade10Session30.jsx';
import Grade10Session31 from './Teach/Foundation/TeachGrade10/Grade10Session31.jsx';
import Grade10Session32 from './Teach/Foundation/TeachGrade10/Grade10Session32.jsx';
import Grade10Session33 from './Teach/Foundation/TeachGrade10/Grade10Session33.jsx';
import Grade10Session34 from './Teach/Foundation/TeachGrade10/Grade10Session34.jsx';

import Grade11Session1 from './Teach/Foundation/TeachGrade11/Grade11Session1.jsx';
import Grade11Session2 from './Teach/Foundation/TeachGrade11/Grade11Session2.jsx';
import Grade11Session3 from './Teach/Foundation/TeachGrade11/Grade11Session3.jsx';
import Grade11Session4 from './Teach/Foundation/TeachGrade11/Grade11Session4.jsx';
import Grade11Session5 from './Teach/Foundation/TeachGrade11/Grade11Session5.jsx';
import Grade11Session6 from './Teach/Foundation/TeachGrade11/Grade11Session6.jsx';
import Grade11Session7 from './Teach/Foundation/TeachGrade11/Grade11Session7.jsx';
import Grade11Session8 from './Teach/Foundation/TeachGrade11/Grade11Session8.jsx';

import Grade12Session1 from './Teach/Foundation/TeachGrade12/Grade12Session1.jsx';
import Grade12Session2 from './Teach/Foundation/TeachGrade12/Grade12Session2.jsx';
import Grade12Session3 from './Teach/Foundation/TeachGrade12/Grade12Session3.jsx';


import Library from './Library/Library.jsx';
import Report from './Report/Report.jsx';
import TaskPage from './Task/TaskPage.jsx'; 
import Boggle from './Teach/Boggle/Boggle.jsx';
import Cbt from './Teach/CBT/cbt.jsx';
import Vocabulary from './Teach/Vocabulary/Vocabulary.jsx';
import AssignmentReport from './Report/AssignmentReport.jsx';
import LearnerReport from './Report/LearnerReport.jsx';
import TrainerReport from './Report/TrainerReport.jsx';
import InsightReport from './Report/InsightReport.jsx';
import ReaderBoard from './Library/ReaderBoard.jsx';
import Assets from './Task/Assets.jsx';
import Assets1 from './Assign/Assets1.jsx'; 


import TaskGrade1FoundationPage from './Task/TaskFoundationPage/TaskGrade1FoundationPage.jsx';
import TaskGrade2FoundationPage from './Task/TaskFoundationPage/TaskGrade2FoundationPage.jsx';
import TaskGrade3FoundationPage from './Task/TaskFoundationPage/TaskGrade3FoundationPage.jsx';
import TaskGrade4FoundationPage from './Task/TaskFoundationPage/TaskGrade4FoundationPage.jsx';
import TaskGrade5FoundationPage from './Task/TaskFoundationPage/TaskGrade5FoundationPage.jsx';
import TaskGrade6FoundationPage from './Task/TaskFoundationPage/TaskGrade6FoundationPage.jsx';
import TaskGrade7FoundationPage from './Task/TaskFoundationPage/TaskGrade7FoundationPage.jsx';
import TaskGrade8FoundationPage from './Task/TaskFoundationPage/TaskGrade8FoundationPage.jsx';
import TaskGrade9FoundationPage from './Task/TaskFoundationPage/TaskGrade9FoundationPage.jsx';
import TaskGrade10FoundationPage from './Task/TaskFoundationPage/TaskGrade10FoundationPage.jsx';
import TaskGrade11FoundationPage from './Task/TaskFoundationPage/TaskGrade11FoundationPage.jsx';
import TaskGrade12FoundationPage from './Task/TaskFoundationPage/TaskGrade12FoundationPage.jsx';

import TaskGradePage from './Task/TaskGrade/TaskGradePage.jsx'; 
import TaskGrade1Session2Page from './Task/TaskGrade/Grade1/TaskGrade1Session2.jsx';
import TaskGrade1Session3Page from './Task/TaskGrade/Grade1/TaskGrade1Session3.jsx';
import TaskGrade1Session4Page from './Task/TaskGrade/Grade1/TaskGrade1Session4.jsx';
import TaskGrade1Session5Page from './Task/TaskGrade/Grade1/TaskGrade1Session5.jsx';
import TaskGrade1Session6Page from './Task/TaskGrade/Grade1/TaskGrade1Session6.jsx';
import TaskGrade1Session7Page from './Task/TaskGrade/Grade1/TaskGrade1Session7.jsx';
import TaskGrade1Session8Page from './Task/TaskGrade/Grade1/TaskGrade1Session8.jsx';
import TaskGrade1Session9Page from './Task/TaskGrade/Grade1/TaskGrade1Session9.jsx';
import TaskGrade1Session10Page from './Task/TaskGrade/Grade1/TaskGrade1Session10.jsx';
import TaskGrade1Session11Page from './Task/TaskGrade/Grade1/TaskGrade1Session11.jsx';
import TaskGrade1Session12Page from './Task/TaskGrade/Grade1/TaskGrade1Session12.jsx';
import TaskGrade1Session13Page from './Task/TaskGrade/Grade1/TaskGrade1Session13.jsx';
import TaskGrade1Session14Page from './Task/TaskGrade/Grade1/TaskGrade1Session14.jsx';
import TaskGrade1Session15Page from './Task/TaskGrade/Grade1/TaskGrade1Session15.jsx';
import TaskGrade1Session16Page from './Task/TaskGrade/Grade1/TaskGrade1Session16.jsx';
import TaskGrade1Session17Page from './Task/TaskGrade/Grade1/TaskGrade1Session17.jsx';
import TaskGrade1Session18Page from './Task/TaskGrade/Grade1/TaskGrade1Session18.jsx';

import TaskGrade2Session1 from './Task/TaskGrade/Grade2/TaskGrade2Session1.jsx';
import TaskGrade2Session2 from './Task/TaskGrade/Grade2/TaskGrade2Session2.jsx';
import TaskGrade2Session3 from './Task/TaskGrade/Grade2/TaskGrade2Session3.jsx';
import TaskGrade2Session4 from './Task/TaskGrade/Grade2/TaskGrade2Session4.jsx';
import TaskGrade2Session5 from './Task/TaskGrade/Grade2/TaskGrade2Session5.jsx';
import TaskGrade2Session6 from './Task/TaskGrade/Grade2/TaskGrade2Session6.jsx';
import TaskGrade2Session7 from './Task/TaskGrade/Grade2/TaskGrade2Session7.jsx';
import TaskGrade2Session8 from './Task/TaskGrade/Grade2/TaskGrade2Session8.jsx';
import TaskGrade2Session9 from './Task/TaskGrade/Grade2/TaskGrade2Session9.jsx';
import TaskGrade2Session10 from './Task/TaskGrade/Grade2/TaskGrade2Session10.jsx';
import TaskGrade2Session11 from './Task/TaskGrade/Grade2/TaskGrade2Session11.jsx';
import TaskGrade2Session12 from './Task/TaskGrade/Grade2/TaskGrade2Session12.jsx';
import TaskGrade2Session13 from './Task/TaskGrade/Grade2/TaskGrade2Session13.jsx';
import TaskGrade2Session14 from './Task/TaskGrade/Grade2/TaskGrade2Session14.jsx';
import TaskGrade2Session15 from './Task/TaskGrade/Grade2/TaskGrade2Session15.jsx';
import TaskGrade2Session16 from './Task/TaskGrade/Grade2/TaskGrade2Session16.jsx';
import TaskGrade2Session17 from './Task/TaskGrade/Grade2/TaskGrade2Session17.jsx';
import TaskGrade2Session18 from './Task/TaskGrade/Grade2/TaskGrade2Session18.jsx';
import TaskGrade2Session19 from './Task/TaskGrade/Grade2/TaskGrade2Session19.jsx';
import TaskGrade2Session20 from './Task/TaskGrade/Grade2/TaskGrade2Session20.jsx';
import TaskGrade2Session21 from './Task/TaskGrade/Grade2/TaskGrade2Session21.jsx';
import TaskGrade2Session22 from './Task/TaskGrade/Grade2/TaskGrade2Session22.jsx';
import TaskGrade2Session23 from './Task/TaskGrade/Grade2/TaskGrade2Session23.jsx';
import TaskGrade2Session24 from './Task/TaskGrade/Grade2/TaskGrade2Session24.jsx';
import TaskGrade2Session25 from './Task/TaskGrade/Grade2/TaskGrade2Session25.jsx';

import TaskGrade3Session1 from './Task/TaskGrade/Grade3/TaskGrade3Session1.jsx';
import TaskGrade3Session2 from './Task/TaskGrade/Grade3/TaskGrade3Session2.jsx';
import TaskGrade3Session3 from './Task/TaskGrade/Grade3/TaskGrade3Session3.jsx';
import TaskGrade3Session4 from './Task/TaskGrade/Grade3/TaskGrade3Session4.jsx';
import TaskGrade3Session5 from './Task/TaskGrade/Grade3/TaskGrade3Session5.jsx';
import TaskGrade3Session6 from './Task/TaskGrade/Grade3/TaskGrade3Session6.jsx';
import TaskGrade3Session7 from './Task/TaskGrade/Grade3/TaskGrade3Session7.jsx';
import TaskGrade3Session8 from './Task/TaskGrade/Grade3/TaskGrade3Session8.jsx';
import TaskGrade3Session9 from './Task/TaskGrade/Grade3/TaskGrade3Session9.jsx';
import TaskGrade3Session10 from './Task/TaskGrade/Grade3/TaskGrade3Session10.jsx';
import TaskGrade3Session11 from './Task/TaskGrade/Grade3/TaskGrade3Session11.jsx';
import TaskGrade3Session12 from './Task/TaskGrade/Grade3/TaskGrade3Session12.jsx';
import TaskGrade3Session13 from './Task/TaskGrade/Grade3/TaskGrade3Session13.jsx';
import TaskGrade3Session14 from './Task/TaskGrade/Grade3/TaskGrade3Session14.jsx';
import TaskGrade3Session15 from './Task/TaskGrade/Grade3/TaskGrade3Session15.jsx';
import TaskGrade3Session16 from './Task/TaskGrade/Grade3/TaskGrade3Session16.jsx';
import TaskGrade3Session17 from './Task/TaskGrade/Grade3/TaskGrade3Session17.jsx';
import TaskGrade3Session18 from './Task/TaskGrade/Grade3/TaskGrade3Session18.jsx';
import TaskGrade3Session19 from './Task/TaskGrade/Grade3/TaskGrade3Session19.jsx';
import TaskGrade3Session20 from './Task/TaskGrade/Grade3/TaskGrade3Session20.jsx';
import TaskGrade3Session21 from './Task/TaskGrade/Grade3/TaskGrade3Session21.jsx';
import TaskGrade3Session22 from './Task/TaskGrade/Grade3/TaskGrade3Session22.jsx';
import TaskGrade3Session23 from './Task/TaskGrade/Grade3/TaskGrade3Session23.jsx';
import TaskGrade3Session24 from './Task/TaskGrade/Grade3/TaskGrade3Session24.jsx';
import TaskGrade3Session25 from './Task/TaskGrade/Grade3/TaskGrade3Session25.jsx';
import TaskGrade3Session26 from './Task/TaskGrade/Grade3/TaskGrade3Session26.jsx';
import TaskGrade3Session27 from './Task/TaskGrade/Grade3/TaskGrade3Session27.jsx';
import TaskGrade3Session28 from './Task/TaskGrade/Grade3/TaskGrade3Session28.jsx';
import TaskGrade3Session29 from './Task/TaskGrade/Grade3/TaskGrade3Session29.jsx';
import TaskGrade3Session30 from './Task/TaskGrade/Grade3/TaskGrade3Session30.jsx';
import TaskGrade3Session31 from './Task/TaskGrade/Grade3/TaskGrade3Session31.jsx';
import TaskGrade3Session32 from './Task/TaskGrade/Grade3/TaskGrade3Session32.jsx';
import TaskGrade3Session33 from './Task/TaskGrade/Grade3/TaskGrade3Session33.jsx';
import TaskGrade3Session34 from './Task/TaskGrade/Grade3/TaskGrade3Session34.jsx';
import TaskGrade3Session35 from './Task/TaskGrade/Grade3/TaskGrade3Session35.jsx';
import TaskGrade3Session36 from './Task/TaskGrade/Grade3/TaskGrade3Session36.jsx';

import TaskGrade4Session1 from './Task/TaskGrade/Grade4/TaskGrade4Session1.jsx';
import TaskGrade4Session2 from './Task/TaskGrade/Grade4/TaskGrade4Session2.jsx';
import TaskGrade4Session3 from './Task/TaskGrade/Grade4/TaskGrade4Session3.jsx';
import TaskGrade4Session4 from './Task/TaskGrade/Grade4/TaskGrade4Session4.jsx';
import TaskGrade4Session5 from './Task/TaskGrade/Grade4/TaskGrade4Session5.jsx';
import TaskGrade4Session6 from './Task/TaskGrade/Grade4/TaskGrade4Session6.jsx';
import TaskGrade4Session7 from './Task/TaskGrade/Grade4/TaskGrade4Session7.jsx';
import TaskGrade4Session8 from './Task/TaskGrade/Grade4/TaskGrade4Session8.jsx';
import TaskGrade4Session9 from './Task/TaskGrade/Grade4/TaskGrade4Session9.jsx';
import TaskGrade4Session10 from './Task/TaskGrade/Grade4/TaskGrade4Session10.jsx';
import TaskGrade4Session11 from './Task/TaskGrade/Grade4/TaskGrade4Session11.jsx';
import TaskGrade4Session12 from './Task/TaskGrade/Grade4/TaskGrade4Session12.jsx';
import TaskGrade4Session13 from './Task/TaskGrade/Grade4/TaskGrade4Session13.jsx';
import TaskGrade4Session14 from './Task/TaskGrade/Grade4/TaskGrade4Session14.jsx';
import TaskGrade4Session15 from './Task/TaskGrade/Grade4/TaskGrade4Session15.jsx';
import TaskGrade4Session16 from './Task/TaskGrade/Grade4/TaskGrade4Session16.jsx';
import TaskGrade4Session17 from './Task/TaskGrade/Grade4/TaskGrade4Session17.jsx';
import TaskGrade4Session18 from './Task/TaskGrade/Grade4/TaskGrade4Session18.jsx';
import TaskGrade4Session19 from './Task/TaskGrade/Grade4/TaskGrade4Session19.jsx';
import TaskGrade4Session20 from './Task/TaskGrade/Grade4/TaskGrade4Session20.jsx';
import TaskGrade4Session21 from './Task/TaskGrade/Grade4/TaskGrade4Session21.jsx';
import TaskGrade4Session22 from './Task/TaskGrade/Grade4/TaskGrade4Session22.jsx';
import TaskGrade4Session23 from './Task/TaskGrade/Grade4/TaskGrade4Session23.jsx';
import TaskGrade4Session24 from './Task/TaskGrade/Grade4/TaskGrade4Session24.jsx';
import TaskGrade4Session25 from './Task/TaskGrade/Grade4/TaskGrade4Session25.jsx';
import TaskGrade4Session26 from './Task/TaskGrade/Grade4/TaskGrade4Session26.jsx';
import TaskGrade4Session27 from './Task/TaskGrade/Grade4/TaskGrade4Session27.jsx';
import TaskGrade4Session28 from './Task/TaskGrade/Grade4/TaskGrade4Session28.jsx';
import TaskGrade4Session29 from './Task/TaskGrade/Grade4/TaskGrade4Session29.jsx';
import TaskGrade4Session30 from './Task/TaskGrade/Grade4/TaskGrade4Session30.jsx';
import TaskGrade4Session31 from './Task/TaskGrade/Grade4/TaskGrade4Session31.jsx';
import TaskGrade4Session32 from './Task/TaskGrade/Grade4/TaskGrade4Session32.jsx';
import TaskGrade4Session33 from './Task/TaskGrade/Grade4/TaskGrade4Session33.jsx';
import TaskGrade4Session34 from './Task/TaskGrade/Grade4/TaskGrade4Session34.jsx';
import TaskGrade4Session35 from './Task/TaskGrade/Grade4/TaskGrade4Session35.jsx';
import TaskGrade4Session36 from './Task/TaskGrade/Grade4/TaskGrade4Session36.jsx';

import TaskGrade5Session1 from './Task/TaskGrade/Grade5/TaskGrade5Session1.jsx';
import TaskGrade5Session2 from './Task/TaskGrade/Grade5/TaskGrade5Session2.jsx';
import TaskGrade5Session3 from './Task/TaskGrade/Grade5/TaskGrade5Session3.jsx';
import TaskGrade5Session4 from './Task/TaskGrade/Grade5/TaskGrade5Session4.jsx';
import TaskGrade5Session5 from './Task/TaskGrade/Grade5/TaskGrade5Session5.jsx';
import TaskGrade5Session6 from './Task/TaskGrade/Grade5/TaskGrade5Session6.jsx';
import TaskGrade5Session7 from './Task/TaskGrade/Grade5/TaskGrade5Session7.jsx';
import TaskGrade5Session8 from './Task/TaskGrade/Grade5/TaskGrade5Session8.jsx';
import TaskGrade5Session9 from './Task/TaskGrade/Grade5/TaskGrade5Session9.jsx';
import TaskGrade5Session10 from './Task/TaskGrade/Grade5/TaskGrade5Session10.jsx';
import TaskGrade5Session11 from './Task/TaskGrade/Grade5/TaskGrade5Session11.jsx';
import TaskGrade5Session12 from './Task/TaskGrade/Grade5/TaskGrade5Session12.jsx';
import TaskGrade5Session13 from './Task/TaskGrade/Grade5/TaskGrade5Session13.jsx';
import TaskGrade5Session14 from './Task/TaskGrade/Grade5/TaskGrade5Session14.jsx';
import TaskGrade5Session15 from './Task/TaskGrade/Grade5/TaskGrade5Session15.jsx';
import TaskGrade5Session16 from './Task/TaskGrade/Grade5/TaskGrade5Session16.jsx';
import TaskGrade5Session17 from './Task/TaskGrade/Grade5/TaskGrade5Session17.jsx';
import TaskGrade5Session18 from './Task/TaskGrade/Grade5/TaskGrade5Session18.jsx';
import TaskGrade5Session19 from './Task/TaskGrade/Grade5/TaskGrade5Session19.jsx';
import TaskGrade5Session20 from './Task/TaskGrade/Grade5/TaskGrade5Session20.jsx';
import TaskGrade5Session21 from './Task/TaskGrade/Grade5/TaskGrade5Session21.jsx';
import TaskGrade5Session22 from './Task/TaskGrade/Grade5/TaskGrade5Session22.jsx';
import TaskGrade5Session23 from './Task/TaskGrade/Grade5/TaskGrade5Session23.jsx';
import TaskGrade5Session24 from './Task/TaskGrade/Grade5/TaskGrade5Session24.jsx';
import TaskGrade5Session25 from './Task/TaskGrade/Grade5/TaskGrade5Session25.jsx';
import TaskGrade5Session26 from './Task/TaskGrade/Grade5/TaskGrade5Session26.jsx';
import TaskGrade5Session27 from './Task/TaskGrade/Grade5/TaskGrade5Session27.jsx';
import TaskGrade5Session28 from './Task/TaskGrade/Grade5/TaskGrade5Session28.jsx';
import TaskGrade5Session29 from './Task/TaskGrade/Grade5/TaskGrade5Session29.jsx';
import TaskGrade5Session30 from './Task/TaskGrade/Grade5/TaskGrade5Session30.jsx';
import TaskGrade5Session31 from './Task/TaskGrade/Grade5/TaskGrade5Session31.jsx';
import TaskGrade5Session32 from './Task/TaskGrade/Grade5/TaskGrade5Session32.jsx';
import TaskGrade5Session33 from './Task/TaskGrade/Grade5/TaskGrade5Session33.jsx';
import TaskGrade5Session34 from './Task/TaskGrade/Grade5/TaskGrade5Session34.jsx';
import TaskGrade5Session35 from './Task/TaskGrade/Grade5/TaskGrade5Session35.jsx';
import TaskGrade5Session36 from './Task/TaskGrade/Grade5/TaskGrade5Session36.jsx';

import TaskGrade6Session1 from './Task/TaskGrade/Grade6/TaskGrade6Session1.jsx';
import TaskGrade6Session2 from './Task/TaskGrade/Grade6/TaskGrade6Session2.jsx';
import TaskGrade6Session3 from './Task/TaskGrade/Grade6/TaskGrade6Session3.jsx';
import TaskGrade6Session4 from './Task/TaskGrade/Grade6/TaskGrade6Session4.jsx';
import TaskGrade6Session5 from './Task/TaskGrade/Grade6/TaskGrade6Session5.jsx';
import TaskGrade6Session6 from './Task/TaskGrade/Grade6/TaskGrade6Session6.jsx';
import TaskGrade6Session7 from './Task/TaskGrade/Grade6/TaskGrade6Session7.jsx';
import TaskGrade6Session8 from './Task/TaskGrade/Grade6/TaskGrade6Session8.jsx';
import TaskGrade6Session9 from './Task/TaskGrade/Grade6/TaskGrade6Session9.jsx';
import TaskGrade6Session10 from './Task/TaskGrade/Grade6/TaskGrade6Session10.jsx';
import TaskGrade6Session11 from './Task/TaskGrade/Grade6/TaskGrade6Session11.jsx';
import TaskGrade6Session12 from './Task/TaskGrade/Grade6/TaskGrade6Session12.jsx';
import TaskGrade6Session13 from './Task/TaskGrade/Grade6/TaskGrade6Session13.jsx';
import TaskGrade6Session14 from './Task/TaskGrade/Grade6/TaskGrade6Session14.jsx';
import TaskGrade6Session15 from './Task/TaskGrade/Grade6/TaskGrade6Session15.jsx';
import TaskGrade6Session16 from './Task/TaskGrade/Grade6/TaskGrade6Session16.jsx';
import TaskGrade6Session17 from './Task/TaskGrade/Grade6/TaskGrade6Session17.jsx';
import TaskGrade6Session18 from './Task/TaskGrade/Grade6/TaskGrade6Session18.jsx';
import TaskGrade6Session19 from './Task/TaskGrade/Grade6/TaskGrade6Session19.jsx';
import TaskGrade6Session20 from './Task/TaskGrade/Grade6/TaskGrade6Session20.jsx';
import TaskGrade6Session21 from './Task/TaskGrade/Grade6/TaskGrade6Session21.jsx';
import TaskGrade6Session22 from './Task/TaskGrade/Grade6/TaskGrade6Session22.jsx';
import TaskGrade6Session23 from './Task/TaskGrade/Grade6/TaskGrade6Session23.jsx';
import TaskGrade6Session24 from './Task/TaskGrade/Grade6/TaskGrade6Session24.jsx';
import TaskGrade6Session25 from './Task/TaskGrade/Grade6/TaskGrade6Session25.jsx';
import TaskGrade6Session26 from './Task/TaskGrade/Grade6/TaskGrade6Session26.jsx';
import TaskGrade6Session27 from './Task/TaskGrade/Grade6/TaskGrade6Session27.jsx';
import TaskGrade6Session28 from './Task/TaskGrade/Grade6/TaskGrade6Session28.jsx';
import TaskGrade6Session29 from './Task/TaskGrade/Grade6/TaskGrade6Session29.jsx';
import TaskGrade6Session30 from './Task/TaskGrade/Grade6/TaskGrade6Session30.jsx';
import TaskGrade6Session31 from './Task/TaskGrade/Grade6/TaskGrade6Session31.jsx';
import TaskGrade6Session32 from './Task/TaskGrade/Grade6/TaskGrade6Session32.jsx';
import TaskGrade6Session33 from './Task/TaskGrade/Grade6/TaskGrade6Session33.jsx';
import TaskGrade6Session34 from './Task/TaskGrade/Grade6/TaskGrade6Session34.jsx';
import TaskGrade6Session35 from './Task/TaskGrade/Grade6/TaskGrade6Session35.jsx';
import TaskGrade6Session36 from './Task/TaskGrade/Grade6/TaskGrade6Session36.jsx';
import TaskGrade6Session37 from './Task/TaskGrade/Grade6/TaskGrade6Session37.jsx';
import TaskGrade6Session38 from './Task/TaskGrade/Grade6/TaskGrade6Session38.jsx';

import TaskGrade7Session1 from './Task/TaskGrade/Grade7/TaskGrade7Session1.jsx';
import TaskGrade7Session2 from './Task/TaskGrade/Grade7/TaskGrade7Session2.jsx';
import TaskGrade7Session3 from './Task/TaskGrade/Grade7/TaskGrade7Session3.jsx';
import TaskGrade7Session4 from './Task/TaskGrade/Grade7/TaskGrade7Session4.jsx';
import TaskGrade7Session5 from './Task/TaskGrade/Grade7/TaskGrade7Session5.jsx';
import TaskGrade7Session6 from './Task/TaskGrade/Grade7/TaskGrade7Session6.jsx';
import TaskGrade7Session7 from './Task/TaskGrade/Grade7/TaskGrade7Session7.jsx';
import TaskGrade7Session8 from './Task/TaskGrade/Grade7/TaskGrade7Session8.jsx';
import TaskGrade7Session9 from './Task/TaskGrade/Grade7/TaskGrade7Session9.jsx';
import TaskGrade7Session10 from './Task/TaskGrade/Grade7/TaskGrade7Session10.jsx';
import TaskGrade7Session11 from './Task/TaskGrade/Grade7/TaskGrade7Session11.jsx';
import TaskGrade7Session12 from './Task/TaskGrade/Grade7/TaskGrade7Session12.jsx';
import TaskGrade7Session13 from './Task/TaskGrade/Grade7/TaskGrade7Session13.jsx';
import TaskGrade7Session14 from './Task/TaskGrade/Grade7/TaskGrade7Session14.jsx';
import TaskGrade7Session15 from './Task/TaskGrade/Grade7/TaskGrade7Session15.jsx';
import TaskGrade7Session16 from './Task/TaskGrade/Grade7/TaskGrade7Session16.jsx';
import TaskGrade7Session17 from './Task/TaskGrade/Grade7/TaskGrade7Session17.jsx';
import TaskGrade7Session18 from './Task/TaskGrade/Grade7/TaskGrade7Session18.jsx';
import TaskGrade7Session19 from './Task/TaskGrade/Grade7/TaskGrade7Session19.jsx';
import TaskGrade7Session20 from './Task/TaskGrade/Grade7/TaskGrade7Session20.jsx';
import TaskGrade7Session21 from './Task/TaskGrade/Grade7/TaskGrade7Session21.jsx';
import TaskGrade7Session22 from './Task/TaskGrade/Grade7/TaskGrade7Session22.jsx';
import TaskGrade7Session23 from './Task/TaskGrade/Grade7/TaskGrade7Session23.jsx';
import TaskGrade7Session24 from './Task/TaskGrade/Grade7/TaskGrade7Session24.jsx';
import TaskGrade7Session25 from './Task/TaskGrade/Grade7/TaskGrade7Session25.jsx';
import TaskGrade7Session26 from './Task/TaskGrade/Grade7/TaskGrade7Session26.jsx';
import TaskGrade7Session27 from './Task/TaskGrade/Grade7/TaskGrade7Session27.jsx';
import TaskGrade7Session28 from './Task/TaskGrade/Grade7/TaskGrade7Session28.jsx';
import TaskGrade7Session29 from './Task/TaskGrade/Grade7/TaskGrade7Session29.jsx';
import TaskGrade7Session30 from './Task/TaskGrade/Grade7/TaskGrade7Session30.jsx';
import TaskGrade7Session31 from './Task/TaskGrade/Grade7/TaskGrade7Session31.jsx';
import TaskGrade7Session32 from './Task/TaskGrade/Grade7/TaskGrade7Session32.jsx';
import TaskGrade7Session33 from './Task/TaskGrade/Grade7/TaskGrade7Session33.jsx';
import TaskGrade7Session34 from './Task/TaskGrade/Grade7/TaskGrade7Session34.jsx';
import TaskGrade7Session35 from './Task/TaskGrade/Grade7/TaskGrade7Session35.jsx';
import TaskGrade7Session36 from './Task/TaskGrade/Grade7/TaskGrade7Session36.jsx';
import TaskGrade7Session37 from './Task/TaskGrade/Grade7/TaskGrade7Session37.jsx';
import TaskGrade7Session38 from './Task/TaskGrade/Grade7/TaskGrade7Session38.jsx';

import TaskGrade8Session1 from './Task/TaskGrade/Grade8/TaskGrade8Session1.jsx';
import TaskGrade8Session2 from './Task/TaskGrade/Grade8/TaskGrade8Session2.jsx';
import TaskGrade8Session3 from './Task/TaskGrade/Grade8/TaskGrade8Session3.jsx';
import TaskGrade8Session4 from './Task/TaskGrade/Grade8/TaskGrade8Session4.jsx';
import TaskGrade8Session5 from './Task/TaskGrade/Grade8/TaskGrade8Session5.jsx';
import TaskGrade8Session6 from './Task/TaskGrade/Grade8/TaskGrade8Session6.jsx';
import TaskGrade8Session7 from './Task/TaskGrade/Grade8/TaskGrade8Session7.jsx';
import TaskGrade8Session8 from './Task/TaskGrade/Grade8/TaskGrade8Session8.jsx';
import TaskGrade8Session9 from './Task/TaskGrade/Grade8/TaskGrade8Session9.jsx';
import TaskGrade8Session10 from './Task/TaskGrade/Grade8/TaskGrade8Session10.jsx';
import TaskGrade8Session11 from './Task/TaskGrade/Grade8/TaskGrade8Session11.jsx';
import TaskGrade8Session12 from './Task/TaskGrade/Grade8/TaskGrade8Session12.jsx';
import TaskGrade8Session13 from './Task/TaskGrade/Grade8/TaskGrade8Session13.jsx';
import TaskGrade8Session14 from './Task/TaskGrade/Grade8/TaskGrade8Session14.jsx';
import TaskGrade8Session15 from './Task/TaskGrade/Grade8/TaskGrade8Session15.jsx';
import TaskGrade8Session16 from './Task/TaskGrade/Grade8/TaskGrade8Session16.jsx';
import TaskGrade8Session17 from './Task/TaskGrade/Grade8/TaskGrade8Session17.jsx';
import TaskGrade8Session18 from './Task/TaskGrade/Grade8/TaskGrade8Session18.jsx';
import TaskGrade8Session19 from './Task/TaskGrade/Grade8/TaskGrade8Session19.jsx';
import TaskGrade8Session20 from './Task/TaskGrade/Grade8/TaskGrade8Session20.jsx';
import TaskGrade8Session21 from './Task/TaskGrade/Grade8/TaskGrade8Session21.jsx';
import TaskGrade8Session22 from './Task/TaskGrade/Grade8/TaskGrade8Session22.jsx';
import TaskGrade8Session23 from './Task/TaskGrade/Grade8/TaskGrade8Session23.jsx';
import TaskGrade8Session24 from './Task/TaskGrade/Grade8/TaskGrade8Session24.jsx';
import TaskGrade8Session25 from './Task/TaskGrade/Grade8/TaskGrade8Session25.jsx';
import TaskGrade8Session26 from './Task/TaskGrade/Grade8/TaskGrade8Session26.jsx';
import TaskGrade8Session27 from './Task/TaskGrade/Grade8/TaskGrade8Session27.jsx';
import TaskGrade8Session28 from './Task/TaskGrade/Grade8/TaskGrade8Session28.jsx';
import TaskGrade8Session29 from './Task/TaskGrade/Grade8/TaskGrade8Session29.jsx';

import TaskGrade8Session30 from './Task/TaskGrade/Grade8/TaskGrade8Session30.jsx';
import TaskGrade8Session31 from './Task/TaskGrade/Grade8/TaskGrade8Session31.jsx';
import TaskGrade8Session32 from './Task/TaskGrade/Grade8/TaskGrade8Session32.jsx';
import TaskGrade8Session33 from './Task/TaskGrade/Grade8/TaskGrade8Session33.jsx';
import TaskGrade8Session34 from './Task/TaskGrade/Grade8/TaskGrade8Session34.jsx';
import TaskGrade8Session35 from './Task/TaskGrade/Grade8/TaskGrade8Session35.jsx';
import TaskGrade8Session36 from './Task/TaskGrade/Grade8/TaskGrade8Session36.jsx';
import TaskGrade8Session37 from './Task/TaskGrade/Grade8/TaskGrade8Session37.jsx';
import TaskGrade8Session38 from './Task/TaskGrade/Grade8/TaskGrade8Session38.jsx';

import TaskGrade9Session1 from './Task/TaskGrade/Grade9/TaskGrade9Session1.jsx';
import TaskGrade9Session2 from './Task/TaskGrade/Grade9/TaskGrade9Session2.jsx';
import TaskGrade9Session3 from './Task/TaskGrade/Grade9/TaskGrade9Session3.jsx';
import TaskGrade9Session4 from './Task/TaskGrade/Grade9/TaskGrade9Session4.jsx';
import TaskGrade9Session5 from './Task/TaskGrade/Grade9/TaskGrade9Session5.jsx';
import TaskGrade9Session6 from './Task/TaskGrade/Grade9/TaskGrade9Session6.jsx';
import TaskGrade9Session7 from './Task/TaskGrade/Grade9/TaskGrade9Session7.jsx';
import TaskGrade9Session8 from './Task/TaskGrade/Grade9/TaskGrade9Session8.jsx';
import TaskGrade9Session9 from './Task/TaskGrade/Grade9/TaskGrade9Session9.jsx';
import TaskGrade9Session10 from './Task/TaskGrade/Grade9/TaskGrade9Session10.jsx';
import TaskGrade9Session11 from './Task/TaskGrade/Grade9/TaskGrade9Session11.jsx';
import TaskGrade9Session12 from './Task/TaskGrade/Grade9/TaskGrade9Session12.jsx';
import TaskGrade9Session13 from './Task/TaskGrade/Grade9/TaskGrade9Session13.jsx';
import TaskGrade9Session14 from './Task/TaskGrade/Grade9/TaskGrade9Session14.jsx';
import TaskGrade9Session15 from './Task/TaskGrade/Grade9/TaskGrade9Session15.jsx';

import TaskGrade10Session1 from './Task/TaskGrade/Grade10/TaskGrade10Session1.jsx';
import TaskGrade10Session2 from './Task/TaskGrade/Grade10/TaskGrade10Session2.jsx';
import TaskGrade10Session3 from './Task/TaskGrade/Grade10/TaskGrade10Session3.jsx';
import TaskGrade10Session4 from './Task/TaskGrade/Grade10/TaskGrade10Session4.jsx';
import TaskGrade10Session5 from './Task/TaskGrade/Grade10/TaskGrade10Session5.jsx';
import TaskGrade10Session6 from './Task/TaskGrade/Grade10/TaskGrade10Session6.jsx';
import TaskGrade10Session7 from './Task/TaskGrade/Grade10/TaskGrade10Session7.jsx';
import TaskGrade10Session8 from './Task/TaskGrade/Grade10/TaskGrade10Session8.jsx';
import TaskGrade10Session9 from './Task/TaskGrade/Grade10/TaskGrade10Session9.jsx';
import TaskGrade10Session10 from './Task/TaskGrade/Grade10/TaskGrade10Session10.jsx';
import TaskGrade10Session11 from './Task/TaskGrade/Grade10/TaskGrade10Session11.jsx';
import TaskGrade10Session12 from './Task/TaskGrade/Grade10/TaskGrade10Session12.jsx';
import TaskGrade10Session13 from './Task/TaskGrade/Grade10/TaskGrade10Session13.jsx';
import TaskGrade10Session14 from './Task/TaskGrade/Grade10/TaskGrade10Session14.jsx';
import TaskGrade10Session15 from './Task/TaskGrade/Grade10/TaskGrade10Session15.jsx';
import TaskGrade10Session16 from './Task/TaskGrade/Grade10/TaskGrade10Session16.jsx';
import TaskGrade10Session17 from './Task/TaskGrade/Grade10/TaskGrade10Session17.jsx';
import TaskGrade10Session18 from './Task/TaskGrade/Grade10/TaskGrade10Session18.jsx';
import TaskGrade10Session19 from './Task/TaskGrade/Grade10/TaskGrade10Session19.jsx';
import TaskGrade10Session20 from './Task/TaskGrade/Grade10/TaskGrade10Session20.jsx';
import TaskGrade10Session21 from './Task/TaskGrade/Grade10/TaskGrade10Session21.jsx';
import TaskGrade10Session22 from './Task/TaskGrade/Grade10/TaskGrade10Session22.jsx';
import TaskGrade10Session23 from './Task/TaskGrade/Grade10/TaskGrade10Session23.jsx';
import TaskGrade10Session24 from './Task/TaskGrade/Grade10/TaskGrade10Session24.jsx';
import TaskGrade10Session25 from './Task/TaskGrade/Grade10/TaskGrade10Session25.jsx';
import TaskGrade10Session26 from './Task/TaskGrade/Grade10/TaskGrade10Session26.jsx';
import TaskGrade10Session27 from './Task/TaskGrade/Grade10/TaskGrade10Session27.jsx';
import TaskGrade10Session28 from './Task/TaskGrade/Grade10/TaskGrade10Session28.jsx';
import TaskGrade10Session29 from './Task/TaskGrade/Grade10/TaskGrade10Session29.jsx';
import TaskGrade10Session30 from './Task/TaskGrade/Grade10/TaskGrade10Session30.jsx';
import TaskGrade10Session31 from './Task/TaskGrade/Grade10/TaskGrade10Session31.jsx';
import TaskGrade10Session32 from './Task/TaskGrade/Grade10/TaskGrade10Session32.jsx';
import TaskGrade10Session33 from './Task/TaskGrade/Grade10/TaskGrade10Session33.jsx';
import TaskGrade10Session34 from './Task/TaskGrade/Grade10/TaskGrade10Session34.jsx';

import TaskGrade11Session1 from './Task/TaskGrade/Grade11/TaskGrade11Session1.jsx';
import TaskGrade11Session2 from './Task/TaskGrade/Grade11/TaskGrade11Session2.jsx';
import TaskGrade11Session3 from './Task/TaskGrade/Grade11/TaskGrade11Session3.jsx';
import TaskGrade11Session4 from './Task/TaskGrade/Grade11/TaskGrade11Session4.jsx';
import TaskGrade11Session5 from './Task/TaskGrade/Grade11/TaskGrade11Session5.jsx';
import TaskGrade11Session6 from './Task/TaskGrade/Grade11/TaskGrade11Session6.jsx';
import TaskGrade11Session7 from './Task/TaskGrade/Grade11/TaskGrade11Session7.jsx';
import TaskGrade11Session8 from './Task/TaskGrade/Grade11/TaskGrade11Session8.jsx';

import TaskGrade12Session1 from './Task/TaskGrade/Grade12/TaskGrade12Session1.jsx';
import TaskGrade12Session2 from './Task/TaskGrade/Grade12/TaskGrade12Session2.jsx';
import TaskGrade12Session3 from './Task/TaskGrade/Grade12/TaskGrade12Session3.jsx';



import LearningVideos from './Task/LearningVideos/LearningVideos.jsx'; // Correct import for LearningVideos
import VideoPlayerPage from './Task/Videoplayer/VideoPlayer.jsx'; // Correct import for VideoPlayerPage
import CreateTaskPage from './Task/CreateTask/CreateTaskPage.jsx'; 


// eslint-disable-next-line react-refresh/only-export-components
const App = () => (
  <Router>
    <div className="app-container">
      <Sidebar /> {/* Add the Sidebar component */}
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/assets1" element={<Assets1 />} />


          <Route path="/grade1" element={<Grade1FoundationPage />} />
          <Route path="/grade2-foundation" element={<Grade2FoundationPage />} />
          <Route path="/grade3-foundation" element={<Grade3FoundationPage />} />
          <Route path="/grade4-foundation" element={<Grade4FoundationPage />} />
          <Route path="/grade5-foundation" element={<Grade5FoundationPage />} />
          <Route path="/grade6-foundation" element={<Grade6FoundationPage />} />
          <Route path="/grade7-foundation" element={<Grade7FoundationPage />} />
          <Route path="/grade8-foundation" element={<Grade8FoundationPage />} />
          <Route path="/grade9-foundation" element={<Grade9FoundationPage />} />
          <Route path="/grade10-foundation" element={<Grade10FoundationPage />} />
          <Route path="/grade11-foundation" element={<Grade11FoundationPage />} />
          <Route path="/grade12-foundation" element={<Grade12FoundationPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/assign" element={<Assign />} />

          <Route path="/grade1session1" element={<Grade1Session1 />} />
          <Route path="/grade1session2" element={<Grade1Session2/>} />
          <Route path="/grade1session3" element={<Grade1Session3 />} />
          <Route path="/grade1session4" element={<Grade1Session4 />} />
          <Route path="/grade1session5" element={<Grade1Session5 />} />
          <Route path="/grade1session6" element={<Grade1Session6 />} />
          <Route path="/grade1session7" element={<Grade1Session7 />} />
          <Route path="/grade1session8" element={<Grade1Session8 />} />
          <Route path="/grade1session9" element={<Grade1Session9 />} />
          <Route path="/grade1session10" element={<Grade1Session10 />} />
          <Route path="/grade1session11" element={<Grade1Session11/>} />
          <Route path="/grade1session12" element={<Grade1Session12/>} />
          <Route path="/grade1session13" element={<Grade1Session13/>} />
          <Route path="/grade1session14" element={<Grade1Session14/>} />
          <Route path="/grade1session15" element={<Grade1Session15/>} />
          <Route path="/grade1session16" element={<Grade1Session16/>} />
          <Route path="/grade1session17" element={<Grade1Session17/>} />
          <Route path="/grade1session18" element={<Grade1Session18/>} />


          <Route path="/grade2session1" element={<Grade2Session1/>} />
          <Route path="/grade2session2" element={<Grade2Session2/>} />
          <Route path="/grade2session3" element={<Grade2Session3/>} />
          <Route path="/grade2session4" element={<Grade2Session4/>} />
          <Route path="/grade2session5" element={<Grade2Session5/>} />
          <Route path="/grade2session6" element={<Grade2Session6/>} />
          <Route path="/grade2session7" element={<Grade2Session7/>} />
          <Route path="/grade2session8" element={<Grade2Session8/>} />
          <Route path="/grade2session9" element={<Grade2Session9/>} />
          <Route path="/grade2session10" element={<Grade2Session10/>} />
          <Route path="/grade2session11" element={<Grade2Session11/>} />
          <Route path="/grade2session12" element={<Grade2Session12/>} />
          <Route path="/grade2session13" element={<Grade2Session13/>} />
          <Route path="/grade2session14" element={<Grade2Session14/>} />
          <Route path="/grade2session15" element={<Grade2Session15/>} />
          <Route path="/grade2session16" element={<Grade2Session16/>} />
          <Route path="/grade2session17" element={<Grade2Session17/>} />
          <Route path="/grade2session18" element={<Grade2Session18/>} />
          <Route path="/grade2session19" element={<Grade2Session19/>} />
          <Route path="/grade2session20" element={<Grade2Session20/>} />
          <Route path="/grade2session21" element={<Grade2Session21/>} />
          <Route path="/grade2session22" element={<Grade2Session22/>} />
          <Route path="/grade2session23" element={<Grade2Session23/>} />
          <Route path="/grade2session24" element={<Grade2Session24/>} />
          <Route path="/grade2session25" element={<Grade2Session25/>} />


          <Route path="/grade3session1" element={<Grade3Session1/>} />
          <Route path="/grade3session2" element={<Grade3Session2/>} />
          <Route path="/grade3session3" element={<Grade3Session3/>} />
          <Route path="/grade3session4" element={<Grade3Session4/>} />
          <Route path="/grade3session5" element={<Grade3Session5/>} />
          <Route path="/grade3session6" element={<Grade3Session6/>} />
          <Route path="/grade3session7" element={<Grade3Session7/>} />
          <Route path="/grade3session8" element={<Grade3Session8/>} />
          <Route path="/grade3session9" element={<Grade3Session9/>} />
          <Route path="/grade3session10" element={<Grade3Session10/>} />
          <Route path="/grade3session11" element={<Grade3Session11/>} />
          <Route path="/grade3session12" element={<Grade3Session12/>} />
          <Route path="/grade3session13" element={<Grade3Session13/>} />
          <Route path="/grade3session14" element={<Grade3Session14/>} />
          <Route path="/grade3session15" element={<Grade3Session15/>} />
          <Route path="/grade3session16" element={<Grade3Session16/>} />
          <Route path="/grade3session17" element={<Grade3Session17/>} />
          <Route path="/grade3session18" element={<Grade3Session18/>} />
          <Route path="/grade3session19" element={<Grade3Session19/>} />
          <Route path="/grade3session20" element={<Grade3Session20/>} />
          <Route path="/grade3session21" element={<Grade3Session21/>} />
          <Route path="/grade3session22" element={<Grade3Session22/>} />
          <Route path="/grade3session23" element={<Grade3Session23/>} />
          <Route path="/grade3session24" element={<Grade3Session24/>} />
          <Route path="/grade3session25" element={<Grade3Session25/>} />
          <Route path="/grade3session26" element={<Grade3Session26/>} />
          <Route path="/grade3session27" element={<Grade3Session27/>} />
          <Route path="/grade3session28" element={<Grade3Session28/>} />
          <Route path="/grade3session29" element={<Grade3Session29/>} />
          <Route path="/grade3session30" element={<Grade3Session30/>} />
          <Route path="/grade3session31" element={<Grade3Session31/>} />
          <Route path="/grade3session32" element={<Grade3Session32/>} />
          <Route path="/grade3session33" element={<Grade3Session33/>} />
          <Route path="/grade3session34" element={<Grade3Session34/>} />
          <Route path="/grade3session34" element={<Grade3Session35/>} />
          <Route path="/grade3session36" element={<Grade3Session36/>} />
     
          <Route path="/grade4session1" element={<Grade4Session1/>} />
          <Route path="/grade4session2" element={<Grade4Session2/>} />
          <Route path="/grade4session3" element={<Grade4Session3/>} />
          <Route path="/grade4session4" element={<Grade4Session4/>} />
          <Route path="/grade4session5" element={<Grade4Session5/>} />
          <Route path="/grade4session6" element={<Grade4Session6/>} />
          <Route path="/grade3session7" element={<Grade4Session7/>} />
          <Route path="/grade4session8" element={<Grade4Session8/>} />
          <Route path="/grade4session9" element={<Grade4Session9/>} />
          <Route path="/grade4session10" element={<Grade4Session10/>} />
          <Route path="/grade4session11" element={<Grade4Session11/>} />
          <Route path="/grade4session12" element={<Grade4Session12/>} />
          <Route path="/grade4session13" element={<Grade4Session13/>} />
          <Route path="/grade4session14" element={<Grade4Session14/>} />
          <Route path="/grade4session15" element={<Grade4Session15/>} />
          <Route path="/grade4session16" element={<Grade4Session16/>} />
          <Route path="/grade4session17" element={<Grade4Session17/>} />
          <Route path="/grade4session18" element={<Grade4Session18/>} />
          <Route path="/grade4session19" element={<Grade4Session19/>} />
          <Route path="/grade4session20" element={<Grade4Session20/>} />
          <Route path="/grade4session21" element={<Grade4Session21/>} />
          <Route path="/grade4session22" element={<Grade4Session22/>} />
          <Route path="/grade4session23" element={<Grade4Session23/>} />
          <Route path="/grade4session24" element={<Grade4Session24/>} />
          <Route path="/grade4session25" element={<Grade4Session25/>} />
          <Route path="/grade4session26" element={<Grade4Session26/>} />
          <Route path="/grade4session27" element={<Grade4Session27/>} />
          <Route path="/grade4session28" element={<Grade4Session28/>} />
          <Route path="/grade4session29" element={<Grade4Session29/>} />
          <Route path="/grade4session30" element={<Grade4Session30/>} />
          <Route path="/grade4session31" element={<Grade4Session31/>} />
          <Route path="/grade4session32" element={<Grade4Session32/>} />
          <Route path="/grade4session33" element={<Grade4Session33/>} />
          <Route path="/grade4session34" element={<Grade4Session34/>} />
          <Route path="/grade4session35" element={<Grade4Session35/>} />
          <Route path="/grade4session36" element={<Grade4Session36/>} />
    

          <Route path="/grade5session1" element={<Grade5Session1/>} />
          <Route path="/grade5session2" element={<Grade5Session2/>} />
          <Route path="/grade5session3" element={<Grade5Session3/>} />
          <Route path="/grade5session4" element={<Grade5Session4/>} />
          <Route path="/grade5session5" element={<Grade5Session5/>} />
          <Route path="/grade5session6" element={<Grade5Session6/>} />
          <Route path="/grade5session7" element={<Grade5Session7/>} />
          <Route path="/grade5session8" element={<Grade5Session8/>} />
          <Route path="/grade5session9" element={<Grade5Session9/>} />
          <Route path="/grade5session10" element={<Grade5Session10/>} />
          <Route path="/grade5session11" element={<Grade5Session11/>} />
          <Route path="/grade5session12" element={<Grade5Session12/>} />
          <Route path="/grade5session13" element={<Grade5Session13/>} />
          <Route path="/grade5session14" element={<Grade5Session14/>} />
          <Route path="/grade5session15" element={<Grade5Session15/>} />
          <Route path="/grade5session16" element={<Grade5Session16/>} />
          <Route path="/grade5session17" element={<Grade5Session17/>} />
          <Route path="/grade5session18" element={<Grade5Session18/>} />
         <Route path="/grade5session19" element={<Grade5Session19/>} />
<Route path="/grade5session20" element={<Grade5Session20/>} />
<Route path="/grade5session21" element={<Grade5Session21/>} />
<Route path="/grade5session22" element={<Grade5Session22/>} />
<Route path="/grade5session23" element={<Grade5Session23/>} />
<Route path="/grade5session24" element={<Grade5Session24/>} />
<Route path="/grade5session25" element={<Grade5Session25/>} />
<Route path="/grade5session26" element={<Grade5Session26/>} />
<Route path="/grade5session27" element={<Grade5Session27/>} />
<Route path="/grade5session28" element={<Grade5Session28/>} />
<Route path="/grade5session29" element={<Grade5Session29/>} />
<Route path="/grade5session30" element={<Grade5Session30/>} />
<Route path="/grade5session31" element={<Grade5Session31/>} />
<Route path="/grade5session32" element={<Grade5Session32/>} />
<Route path="/grade5session33" element={<Grade5Session33/>} />
<Route path="/grade5session34" element={<Grade5Session34/>} />
<Route path="/grade5session35" element={<Grade5Session35/>} />
<Route path="/grade5session36" element={<Grade5Session36/>} />


<Route path="/grade6session1" element={<Grade6Session1/>} />
<Route path="/grade6session2" element={<Grade6Session2/>} />
<Route path="/grade6session3" element={<Grade6Session3/>} />
<Route path="/grade6session4" element={<Grade6Session4/>} />
<Route path="/grade6session5" element={<Grade6Session5/>} />
<Route path="/grade6session6" element={<Grade6Session6/>} />
<Route path="/grade6session7" element={<Grade6Session7/>} />
<Route path="/grade6session8" element={<Grade6Session8/>} />
<Route path="/grade6session9" element={<Grade6Session9/>} />
<Route path="/grade6session10" element={<Grade6Session10/>} />
<Route path="/grade6session11" element={<Grade6Session11/>} />
<Route path="/grade6session12" element={<Grade6Session12/>} />
<Route path="/grade6session13" element={<Grade6Session13/>} />
<Route path="/grade6session14" element={<Grade6Session14/>} />
<Route path="/grade6session15" element={<Grade6Session15/>} />
<Route path="/grade6session16" element={<Grade6Session16/>} />
<Route path="/grade6session17" element={<Grade6Session17/>} />
<Route path="/grade6session18" element={<Grade6Session18/>} />
<Route path="/grade6session19" element={<Grade6Session19/>} />
<Route path="/grade6session20" element={<Grade6Session20/>} />
<Route path="/grade6session21" element={<Grade6Session21/>} />
<Route path="/grade6session22" element={<Grade6Session22/>} />
<Route path="/grade6session23" element={<Grade6Session23/>} />
<Route path="/grade6session24" element={<Grade6Session24/>} />
<Route path="/grade6session25" element={<Grade6Session25/>} />
<Route path="/grade6session26" element={<Grade6Session26/>} />
<Route path="/grade6session27" element={<Grade6Session27/>} />
<Route path="/grade6session28" element={<Grade6Session28/>} />
<Route path="/grade6session29" element={<Grade6Session29/>} />
<Route path="/grade6session30" element={<Grade6Session30/>} />
<Route path="/grade6session31" element={<Grade6Session31/>} />
<Route path="/grade6session32" element={<Grade6Session32/>} />
<Route path="/grade6session33" element={<Grade6Session33/>} />
<Route path="/grade6session34" element={<Grade6Session34/>} />
<Route path="/grade6session35" element={<Grade6Session35/>} />
<Route path="/grade6session36" element={<Grade6Session36/>} />
<Route path="/grade6session37" element={<Grade6Session37/>} />
<Route path="/grade6session38" element={<Grade6Session38/>} />


<Route path="/grade7session1" element={<Grade7Session1/>} />
<Route path="/grade7session2" element={<Grade7Session2/>} />
<Route path="/grade7session3" element={<Grade7Session3/>} />
<Route path="/grade7session4" element={<Grade7Session4/>} />
<Route path="/grade7session5" element={<Grade7Session5/>} />
<Route path="/grade7session6" element={<Grade7Session6/>} />
<Route path="/grade7session7" element={<Grade7Session7/>} />
<Route path="/grade7session8" element={<Grade7Session8/>} />
<Route path="/grade7session9" element={<Grade7Session9/>} />
<Route path="/grade7session10" element={<Grade7Session10/>} />
<Route path="/grade7session11" element={<Grade7Session11/>} />
<Route path="/grade7session12" element={<Grade7Session12/>} />
<Route path="/grade7session13" element={<Grade7Session13/>} />
<Route path="/grade7session14" element={<Grade7Session14/>} />
<Route path="/grade7session15" element={<Grade7Session15/>} />
<Route path="/grade7session16" element={<Grade7Session16/>} />
<Route path="/grade7session17" element={<Grade7Session17/>} />
<Route path="/grade7session18" element={<Grade7Session18/>} />
<Route path="/grade7session19" element={<Grade7Session19/>} />
<Route path="/grade7session20" element={<Grade7Session20/>} />
<Route path="/grade7session21" element={<Grade7Session21/>} />
<Route path="/grade7session22" element={<Grade7Session22/>} />
<Route path="/grade7session23" element={<Grade7Session23/>} />
<Route path="/grade7session24" element={<Grade7Session24/>} />
<Route path="/grade7session25" element={<Grade7Session25/>} />
<Route path="/grade7session26" element={<Grade7Session26/>} />
<Route path="/grade7session27" element={<Grade7Session27/>} />
<Route path="/grade7session28" element={<Grade7Session28/>} />
<Route path="/grade7session29" element={<Grade7Session29/>} />
<Route path="/grade7session30" element={<Grade7Session30/>} />
<Route path="/grade7session31" element={<Grade7Session31/>} />
<Route path="/grade7session32" element={<Grade7Session32/>} />
<Route path="/grade7session33" element={<Grade7Session33/>} />
<Route path="/grade7session34" element={<Grade7Session34/>} />
<Route path="/grade7session35" element={<Grade7Session35/>} />
<Route path="/grade7session36" element={<Grade7Session36/>} />
<Route path="/grade7session37" element={<Grade7Session37/>} />
<Route path="/grade7session38" element={<Grade7Session38/>} />


<Route path="/grade8session1" element={<Grade8Session1/>} />
<Route path="/grade8session2" element={<Grade8Session2/>} />
<Route path="/grade8session3" element={<Grade8Session3/>} />
<Route path="/grade8session4" element={<Grade8Session4/>} />
<Route path="/grade8session5" element={<Grade8Session5/>} />
<Route path="/grade8session6" element={<Grade8Session6/>} />
<Route path="/grade8session7" element={<Grade8Session7/>} />
<Route path="/grade8session8" element={<Grade8Session8/>} />
<Route path="/grade8session9" element={<Grade8Session9/>} />
<Route path="/grade8session10" element={<Grade8Session10/>} />
<Route path="/grade8session11" element={<Grade8Session11/>} />
<Route path="/grade8session12" element={<Grade8Session12/>} />
<Route path="/grade8session13" element={<Grade8Session13/>} />
<Route path="/grade8session14" element={<Grade8Session14/>} />
<Route path="/grade8session15" element={<Grade8Session15/>} />
<Route path="/grade8session16" element={<Grade8Session16/>} />
<Route path="/grade8session17" element={<Grade8Session17/>} />
<Route path="/grade8session18" element={<Grade8Session18/>} />
<Route path="/grade8session19" element={<Grade8Session19/>} />
<Route path="/grade8session20" element={<Grade8Session20/>} />
<Route path="/grade8session21" element={<Grade8Session21/>} />
<Route path="/grade8session22" element={<Grade8Session22/>} />
<Route path="/grade8session23" element={<Grade8Session23/>} />
<Route path="/grade8session24" element={<Grade8Session24/>} />
<Route path="/grade8session25" element={<Grade8Session25/>} />
<Route path="/grade8session26" element={<Grade8Session26/>} />
<Route path="/grade8session27" element={<Grade8Session27/>} />
<Route path="/grade8session28" element={<Grade8Session28/>} />
<Route path="/grade8session29" element={<Grade8Session29/>} />
<Route path="/grade8session30" element={<Grade8Session30/>} />
<Route path="/grade8session31" element={<Grade8Session31/>} />
<Route path="/grade8session32" element={<Grade8Session32/>} />
<Route path="/grade8session33" element={<Grade8Session33/>} />
<Route path="/grade8session34" element={<Grade8Session34/>} />
<Route path="/grade8session35" element={<Grade8Session35/>} />
<Route path="/grade8session36" element={<Grade8Session36/>} />
<Route path="/grade8session37" element={<Grade8Session37/>} />
<Route path="/grade8session38" element={<Grade8Session38/>} />

<Route path="/grade9session1" element={<Grade9Session1/>} />
<Route path="/grade9session2" element={<Grade9Session2/>} />
<Route path="/grade9session3" element={<Grade9Session3/>} />
<Route path="/grade9session4" element={<Grade9Session4/>} />
<Route path="/grade9session5" element={<Grade9Session5/>} />
<Route path="/grade9session6" element={<Grade9Session6/>} />
<Route path="/grade9session7" element={<Grade9Session7/>} />
<Route path="/grade9session8" element={<Grade9Session8/>} />
<Route path="/grade9session9" element={<Grade9Session9/>} />
<Route path="/grade9session10" element={<Grade9Session10/>} />
<Route path="/grade9session11" element={<Grade9Session11/>} />
<Route path="/grade9session12" element={<Grade9Session12/>} />
<Route path="/grade9session13" element={<Grade9Session13/>} />
<Route path="/grade9session14" element={<Grade9Session14/>} />
<Route path="/grade9session15" element={<Grade9Session15/>} />


<Route path="/grade10session1" element={<Grade10Session1/>} />
<Route path="/grade10session2" element={<Grade10Session2/>} />
<Route path="/grade10session3" element={<Grade10Session3/>} />
<Route path="/grade10session4" element={<Grade10Session4/>} />
<Route path="/grade10session5" element={<Grade10Session5/>} />
<Route path="/grade10session6" element={<Grade10Session6/>} />
<Route path="/grade10session7" element={<Grade10Session7/>} />
<Route path="/grade10session8" element={<Grade10Session8/>} />
<Route path="/grade10session9" element={<Grade10Session9/>} />
<Route path="/grade10session10" element={<Grade10Session10/>} />
<Route path="/grade10session11" element={<Grade10Session11/>} />
<Route path="/grade10session12" element={<Grade10Session12/>} />
<Route path="/grade10session13" element={<Grade10Session13/>} />
<Route path="/grade10session14" element={<Grade10Session14/>} />
<Route path="/grade10session15" element={<Grade10Session15/>} />
<Route path="/grade10session16" element={<Grade10Session16/>} />
<Route path="/grade10session17" element={<Grade10Session17/>} />
<Route path="/grade10session18" element={<Grade10Session18/>} />
<Route path="/grade10session19" element={<Grade10Session19/>} />
<Route path="/grade10session20" element={<Grade10Session20/>} />
<Route path="/grade10session21" element={<Grade10Session21/>} />
<Route path="/grade10session22" element={<Grade10Session22/>} />
<Route path="/grade10session23" element={<Grade10Session23/>} />
<Route path="/grade10session24" element={<Grade10Session24/>} />
<Route path="/grade10session25" element={<Grade10Session25/>} />
<Route path="/grade10session26" element={<Grade10Session26/>} />
<Route path="/grade10session27" element={<Grade10Session27/>} />
<Route path="/grade10session28" element={<Grade10Session28/>} />
<Route path="/grade10session29" element={<Grade10Session29/>} />
<Route path="/grade10session30" element={<Grade10Session30/>} />
<Route path="/grade10session31" element={<Grade10Session31/>} />
<Route path="/grade10session32" element={<Grade10Session32/>} />
<Route path="/grade10session33" element={<Grade10Session33/>} />
<Route path="/grade10session34" element={<Grade10Session34/>} />


<Route path="/grade11session1" element={<Grade11Session1/>} />
<Route path="/grade11session2" element={<Grade11Session2/>} />
<Route path="/grade11session3" element={<Grade11Session3/>} />
<Route path="/grade11session4" element={<Grade11Session4/>} />
<Route path="/grade11session5" element={<Grade11Session5/>} />
<Route path="/grade11session6" element={<Grade11Session6/>} />
<Route path="/grade11session7" element={<Grade11Session7/>} />
<Route path="/grade11session8" element={<Grade11Session8/>} />

<Route path="/grade12session1" element={<Grade12Session1/>} />
<Route path="/grade12session2" element={<Grade12Session2/>} />
<Route path="/grade12session3" element={<Grade12Session3/>} />



          <Route path="/library" element={<Library />} />
          <Route path="/report" element={<Report />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/boggle" element={<Boggle />} />
          <Route path="/cbt" element={<Cbt />} />
          <Route path="/Vocabulary" element={<Vocabulary />} />
          <Route path="/assignment-report" element={<AssignmentReport />} />
          <Route path="/learner-report" element={<LearnerReport />} />
          <Route path="/trainer-report" element={<TrainerReport />} />
          <Route path="/insight-report" element={<InsightReport />} />
          <Route path="/reader-board" element={<ReaderBoard />} />
         
          <Route path="/taskgrade" element={<TaskGradePage />} />
          <Route path="/taskgrade1foundation" element={<TaskGrade1FoundationPage />} />
          <Route path="/taskgrade2foundation" element={<TaskGrade2FoundationPage />} />
          <Route path="/taskgrade3foundation" element={<TaskGrade3FoundationPage />} />
          <Route path="/taskgrade4foundation" element={<TaskGrade4FoundationPage />} />
          <Route path="/taskgrade5foundation" element={<TaskGrade5FoundationPage />} />
          <Route path="/taskgrade6foundation" element={<TaskGrade6FoundationPage />} />
          <Route path="/taskgrade7foundation" element={<TaskGrade7FoundationPage />} />
          <Route path="/taskgrade8foundation" element={<TaskGrade8FoundationPage />} />
          <Route path="/taskgrade9foundation" element={<TaskGrade9FoundationPage />} />
          <Route path="/taskgrade10foundation" element={<TaskGrade10FoundationPage />} />
          <Route path="/taskgrade11foundation" element={<TaskGrade11FoundationPage />} />
          <Route path="/taskgrade12foundation" element={<TaskGrade12FoundationPage />} />
 
          <Route path="/taskgrade" element={<TaskGradePage />} />
          <Route path="/Grade1/taskgrade1session2" element={<TaskGrade1Session2Page />} />
          <Route path="/Grade1/taskgrade1session3" element={<TaskGrade1Session3Page />} />
          <Route path="/Grade1/taskgrade1session4" element={<TaskGrade1Session4Page />} />
          <Route path="/Grade1/taskgrade1session5" element={<TaskGrade1Session5Page />} />
          <Route path="/Grade1/taskgrade1session6" element={<TaskGrade1Session6Page />} />
          <Route path="/Grade1/taskgrade1session7" element={<TaskGrade1Session7Page />} />
          <Route path="/Grade1/taskgrade1session8" element={<TaskGrade1Session8Page />} />
          <Route path="/Grade1/taskgrade1session9" element={<TaskGrade1Session9Page />} />
          <Route path="/Grade1/taskgrade1session10" element={<TaskGrade1Session10Page />} />
          <Route path="/Grade1/taskgrade1session11" element={<TaskGrade1Session11Page />} />
          <Route path="/Grade1/taskgrade1session12" element={<TaskGrade1Session12Page />} />
          <Route path="/Grade1/taskgrade1session13" element={<TaskGrade1Session13Page />} />
          <Route path="/Grade1/taskgrade1session14" element={<TaskGrade1Session14Page />} />
          <Route path="/Grade1/taskgrade1session15" element={<TaskGrade1Session15Page />} />
          <Route path="/Grade1/taskgrade1session16" element={<TaskGrade1Session16Page />} />
          <Route path="/Grade1/taskgrade1session17" element={<TaskGrade1Session17Page />} />
          <Route path="/Grade1/taskgrade1session18" element={<TaskGrade1Session18Page />} />


          <Route path="/Grade2/taskgrade2session1" element={<TaskGrade2Session1/>} />
          <Route path="/Grade2/taskgrade2session2" element={<TaskGrade2Session2/>} />
          <Route path="/Grade2/taskgrade2session3" element={<TaskGrade2Session3/>} />
          <Route path="/Grade2/taskgrade2session4" element={<TaskGrade2Session4/>} />
          <Route path="/Grade2/taskgrade2session5" element={<TaskGrade2Session5/>} />
          <Route path="/Grade2/taskgrade2session6" element={<TaskGrade2Session6/>} />
          <Route path="/Grade2/taskgrade2session7" element={<TaskGrade2Session7/>} />
          <Route path="/Grade2/taskgrade2session8" element={<TaskGrade2Session8/>} />
          <Route path="/Grade2/taskgrade2session9" element={<TaskGrade2Session9/>} />
          <Route path="/Grade2/taskgrade2session10" element={<TaskGrade2Session10/>} />
          <Route path="/Grade2/taskgrade2session11" element={<TaskGrade2Session11/>} />
          <Route path="/Grade2/taskgrade2session12" element={<TaskGrade2Session12/>} />
          <Route path="/Grade2/taskgrade2session13" element={<TaskGrade2Session13/>} />
          <Route path="/Grade2/taskgrade2session14" element={<TaskGrade2Session14/>} />
          <Route path="/Grade2/taskgrade2session15" element={<TaskGrade2Session15/>} />
          <Route path="/Grade2/taskgrade2session16" element={<TaskGrade2Session16/>} />
          <Route path="/Grade2/taskgrade2session17" element={<TaskGrade2Session17/>} />
          <Route path="/Grade2/taskgrade2session18" element={<TaskGrade2Session18/>} />
          <Route path="/Grade2/taskgrade2session19" element={<TaskGrade2Session19/>} />
          <Route path="/Grade2/taskgrade2session20" element={<TaskGrade2Session20/>} />
          <Route path="/Grade2/taskgrade2session21" element={<TaskGrade2Session21/>} />
          <Route path="/Grade2/taskgrade2session22" element={<TaskGrade2Session22/>} />
          <Route path="/Grade2/taskgrade2session23" element={<TaskGrade2Session23/>} />
          <Route path="/Grade2/taskgrade2session24" element={<TaskGrade2Session24/>} />
          <Route path="/Grade2/taskgrade2session25" element={<TaskGrade2Session25/>} />


<Route path="/taskgrade3foundation/Grade3/taskgrade3session1" element={<TaskGrade3Session1 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session2" element={<TaskGrade3Session2 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session3" element={<TaskGrade3Session3 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session4" element={<TaskGrade3Session4 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session5" element={<TaskGrade3Session5 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session6" element={<TaskGrade3Session6 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session7" element={<TaskGrade3Session7 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session8" element={<TaskGrade3Session8 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session9" element={<TaskGrade3Session9 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session10" element={<TaskGrade3Session10 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session11" element={<TaskGrade3Session11 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session12" element={<TaskGrade3Session12 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session13" element={<TaskGrade3Session13 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session14" element={<TaskGrade3Session14 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session15" element={<TaskGrade3Session15 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session16" element={<TaskGrade3Session16 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session17" element={<TaskGrade3Session17 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session18" element={<TaskGrade3Session18 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session19" element={<TaskGrade3Session19 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session20" element={<TaskGrade3Session20 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session21" element={<TaskGrade3Session21 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session22" element={<TaskGrade3Session22 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session23" element={<TaskGrade3Session23 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session24" element={<TaskGrade3Session24 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session25" element={<TaskGrade3Session25 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session26" element={<TaskGrade3Session26 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session27" element={<TaskGrade3Session27 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session28" element={<TaskGrade3Session28 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session29" element={<TaskGrade3Session29 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session30" element={<TaskGrade3Session30 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session31" element={<TaskGrade3Session31 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session32" element={<TaskGrade3Session32 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session33" element={<TaskGrade3Session33 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session34" element={<TaskGrade3Session34 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session35" element={<TaskGrade3Session35 />} />
<Route path="/taskgrade3foundation/Grade3/taskgrade3session36" element={<TaskGrade3Session36 />} />

<Route path="/taskgrade4foundation/Grade4/taskgrade4session1" element={<TaskGrade4Session1 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session2" element={<TaskGrade4Session2 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session3" element={<TaskGrade4Session3 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session4" element={<TaskGrade4Session4 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session5" element={<TaskGrade4Session5 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session6" element={<TaskGrade4Session6 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session7" element={<TaskGrade4Session7 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session8" element={<TaskGrade4Session8 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session9" element={<TaskGrade4Session9 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session10" element={<TaskGrade4Session10 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session11" element={<TaskGrade4Session11 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session12" element={<TaskGrade4Session12 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session13" element={<TaskGrade4Session13 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session14" element={<TaskGrade4Session14 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session15" element={<TaskGrade4Session15 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session16" element={<TaskGrade4Session16 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session17" element={<TaskGrade4Session17 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session18" element={<TaskGrade4Session18 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session19" element={<TaskGrade4Session19 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session20" element={<TaskGrade4Session20 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session21" element={<TaskGrade4Session21 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session22" element={<TaskGrade4Session22 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session23" element={<TaskGrade4Session23 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session24" element={<TaskGrade4Session24 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session25" element={<TaskGrade4Session25 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session26" element={<TaskGrade4Session26 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session27" element={<TaskGrade4Session27 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session28" element={<TaskGrade4Session28 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session29" element={<TaskGrade4Session29 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session30" element={<TaskGrade4Session30 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session31" element={<TaskGrade4Session31 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session32" element={<TaskGrade4Session32 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session33" element={<TaskGrade4Session33 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session34" element={<TaskGrade4Session34 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session35" element={<TaskGrade4Session35 />} />
<Route path="/taskgrade4foundation/Grade4/taskgrade4session36" element={<TaskGrade4Session36 />} />

<Route path="/taskgrade5foundation/Grade5/taskgrade5session1" element={<TaskGrade5Session1 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session2" element={<TaskGrade5Session2 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session3" element={<TaskGrade5Session3 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session4" element={<TaskGrade5Session4 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session5" element={<TaskGrade5Session5 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session6" element={<TaskGrade5Session6 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session7" element={<TaskGrade5Session7 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session8" element={<TaskGrade5Session8 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session9" element={<TaskGrade5Session9 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session10" element={<TaskGrade5Session10 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session11" element={<TaskGrade5Session11 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session12" element={<TaskGrade5Session12 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session13" element={<TaskGrade5Session13 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session14" element={<TaskGrade5Session14 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session15" element={<TaskGrade5Session15 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session16" element={<TaskGrade5Session16 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session17" element={<TaskGrade5Session17 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session18" element={<TaskGrade5Session18 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session19" element={<TaskGrade5Session19 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session20" element={<TaskGrade5Session20 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session21" element={<TaskGrade5Session21 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session22" element={<TaskGrade5Session22 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session23" element={<TaskGrade5Session23 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session24" element={<TaskGrade5Session24 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session25" element={<TaskGrade5Session25 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session26" element={<TaskGrade5Session26 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session27" element={<TaskGrade5Session27 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session28" element={<TaskGrade5Session28 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session29" element={<TaskGrade5Session29 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session30" element={<TaskGrade5Session30 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session31" element={<TaskGrade5Session31 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session32" element={<TaskGrade5Session32 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session33" element={<TaskGrade5Session33 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session34" element={<TaskGrade5Session34 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session35" element={<TaskGrade5Session35 />} />
<Route path="/taskgrade5foundation/Grade5/taskgrade5session36" element={<TaskGrade5Session36 />} />

<Route path="/taskgrade6foundation/Grade6/taskgrade6session1" element={<TaskGrade6Session1 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session2" element={<TaskGrade6Session2 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session3" element={<TaskGrade6Session3 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session4" element={<TaskGrade6Session4 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session5" element={<TaskGrade6Session5 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session6" element={<TaskGrade6Session6 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session7" element={<TaskGrade6Session7 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session8" element={<TaskGrade6Session8 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session9" element={<TaskGrade6Session9 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session10" element={<TaskGrade6Session10 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session11" element={<TaskGrade6Session11 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session12" element={<TaskGrade6Session12 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session13" element={<TaskGrade6Session13 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session14" element={<TaskGrade6Session14 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session15" element={<TaskGrade6Session15 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session16" element={<TaskGrade6Session16 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session17" element={<TaskGrade6Session17 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session18" element={<TaskGrade6Session18 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session19" element={<TaskGrade6Session19 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session20" element={<TaskGrade6Session20 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session21" element={<TaskGrade6Session21 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session22" element={<TaskGrade6Session22 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session23" element={<TaskGrade6Session23 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session24" element={<TaskGrade6Session24 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session25" element={<TaskGrade6Session25 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session26" element={<TaskGrade6Session26 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session27" element={<TaskGrade6Session27 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session28" element={<TaskGrade6Session28 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session29" element={<TaskGrade6Session29 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session30" element={<TaskGrade6Session30 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session31" element={<TaskGrade6Session31 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session32" element={<TaskGrade6Session32 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session33" element={<TaskGrade6Session33 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session34" element={<TaskGrade6Session34 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session35" element={<TaskGrade6Session35 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session36" element={<TaskGrade6Session36 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session37" element={<TaskGrade6Session37 />} />
<Route path="/taskgrade6foundation/Grade6/taskgrade6session38" element={<TaskGrade6Session38 />} />

<Route path="/taskgrade7foundation/Grade7/taskgrade7session1" element={<TaskGrade7Session1 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session2" element={<TaskGrade7Session2 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session3" element={<TaskGrade7Session3 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session4" element={<TaskGrade7Session4 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session5" element={<TaskGrade7Session5 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session6" element={<TaskGrade7Session6 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session7" element={<TaskGrade7Session7 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session8" element={<TaskGrade7Session8 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session9" element={<TaskGrade7Session9 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session10" element={<TaskGrade7Session10 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session11" element={<TaskGrade7Session11 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session12" element={<TaskGrade7Session12 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session13" element={<TaskGrade7Session13 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session14" element={<TaskGrade7Session14 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session15" element={<TaskGrade7Session15 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session16" element={<TaskGrade7Session16 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session17" element={<TaskGrade7Session17 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session18" element={<TaskGrade7Session18 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session19" element={<TaskGrade7Session19 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session20" element={<TaskGrade7Session20 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session21" element={<TaskGrade7Session21 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session22" element={<TaskGrade7Session22 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session23" element={<TaskGrade7Session23 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session24" element={<TaskGrade7Session24 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session25" element={<TaskGrade7Session25 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session26" element={<TaskGrade7Session26 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session27" element={<TaskGrade7Session27 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session28" element={<TaskGrade7Session28 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session29" element={<TaskGrade7Session29 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session30" element={<TaskGrade7Session30 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session31" element={<TaskGrade7Session31 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session32" element={<TaskGrade7Session32 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session33" element={<TaskGrade7Session33 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session34" element={<TaskGrade7Session34 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session35" element={<TaskGrade7Session35 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session36" element={<TaskGrade7Session36 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session37" element={<TaskGrade7Session37 />} />
<Route path="/taskgrade7foundation/Grade7/taskgrade7session38" element={<TaskGrade7Session38 />} />

<Route path="/taskgrade8foundation/Grade8/taskgrade8session1" element={<TaskGrade8Session1 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session2" element={<TaskGrade8Session2 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session3" element={<TaskGrade8Session3 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session4" element={<TaskGrade8Session4 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session5" element={<TaskGrade8Session5 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session6" element={<TaskGrade8Session6 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session7" element={<TaskGrade8Session7 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session8" element={<TaskGrade8Session8 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session9" element={<TaskGrade8Session9 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session10" element={<TaskGrade8Session10 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session11" element={<TaskGrade8Session11 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session12" element={<TaskGrade8Session12 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session13" element={<TaskGrade8Session13 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session14" element={<TaskGrade8Session14 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session15" element={<TaskGrade8Session15 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session16" element={<TaskGrade8Session16 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session17" element={<TaskGrade8Session17 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session18" element={<TaskGrade8Session18 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session19" element={<TaskGrade8Session19 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session20" element={<TaskGrade8Session20 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session21" element={<TaskGrade8Session21 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session22" element={<TaskGrade8Session22 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session23" element={<TaskGrade8Session23 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session24" element={<TaskGrade8Session24 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session25" element={<TaskGrade8Session25 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session26" element={<TaskGrade8Session26 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session27" element={<TaskGrade8Session27 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session28" element={<TaskGrade8Session28 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session29" element={<TaskGrade8Session29 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session30" element={<TaskGrade8Session30 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session31" element={<TaskGrade8Session31 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session32" element={<TaskGrade8Session32 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session33" element={<TaskGrade8Session33 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session34" element={<TaskGrade8Session34 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session35" element={<TaskGrade8Session35 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session36" element={<TaskGrade8Session36 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session37" element={<TaskGrade8Session37 />} />
<Route path="/taskgrade8foundation/Grade8/taskgrade8session38" element={<TaskGrade8Session38 />} />

<Route path="/taskgrade9foundation/Grade9/taskgrade9session1" element={<TaskGrade9Session1 />} />
<Route path="/taskgrade9foundation/Grade9/taskgrade9session2" element={<TaskGrade9Session2 />} />
<Route path="/taskgrade9foundation/Grade9/taskgrade9session3" element={<TaskGrade9Session3 />} />
<Route path="/taskgrade9foundation/Grade9/taskgrade9session4" element={<TaskGrade9Session4 />} />
<Route path="/taskgrade9foundation/Grade9/taskgrade9session5" element={<TaskGrade9Session5 />} />
<Route path="/taskgrade9foundation/Grade9/taskgrade9session6" element={<TaskGrade9Session6 />} />
<Route path="/taskgrade9foundation/Grade9/taskgrade9session7" element={<TaskGrade9Session7 />} />
<Route path="/taskgrade9foundation/Grade9/taskgrade9session8" element={<TaskGrade9Session8 />} />
<Route path="/taskgrade9foundation/Grade9/taskgrade9session9" element={<TaskGrade9Session9 />} />
<Route path="/taskgrade9foundation/Grade9/taskgrade9session10" element={<TaskGrade9Session10 />} />
<Route path="/taskgrade9foundation/Grade9/taskgrade9session11" element={<TaskGrade9Session11 />} />
<Route path="/taskgrade9foundation/Grade9/taskgrade9session12" element={<TaskGrade9Session12 />} />
<Route path="/taskgrade9foundation/Grade9/taskgrade9session13" element={<TaskGrade9Session13 />} />
<Route path="/taskgrade9foundation/Grade9/taskgrade9session14" element={<TaskGrade9Session14 />} />
<Route path="/taskgrade9foundation/Grade9/taskgrade9session15" element={<TaskGrade9Session15 />} />

<Route path="/taskgrade10foundation/Grade10/taskgrade10session1" element={<TaskGrade10Session1 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session2" element={<TaskGrade10Session2 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session3" element={<TaskGrade10Session3 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session4" element={<TaskGrade10Session4 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session5" element={<TaskGrade10Session5 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session6" element={<TaskGrade10Session6 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session7" element={<TaskGrade10Session7 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session8" element={<TaskGrade10Session8 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session9" element={<TaskGrade10Session9 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session10" element={<TaskGrade10Session10 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session11" element={<TaskGrade10Session11 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session12" element={<TaskGrade10Session12 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session13" element={<TaskGrade10Session13 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session14" element={<TaskGrade10Session14 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session15" element={<TaskGrade10Session15 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session16" element={<TaskGrade10Session16 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session17" element={<TaskGrade10Session17 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session18" element={<TaskGrade10Session18 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session19" element={<TaskGrade10Session19 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session20" element={<TaskGrade10Session20 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session21" element={<TaskGrade10Session21 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session22" element={<TaskGrade10Session22 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session23" element={<TaskGrade10Session23 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session24" element={<TaskGrade10Session24 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session25" element={<TaskGrade10Session25 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session26" element={<TaskGrade10Session26 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session27" element={<TaskGrade10Session27 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session28" element={<TaskGrade10Session28 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session29" element={<TaskGrade10Session29 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session30" element={<TaskGrade10Session30 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session31" element={<TaskGrade10Session31 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session32" element={<TaskGrade10Session32 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session33" element={<TaskGrade10Session33 />} />
<Route path="/taskgrade10foundation/Grade10/taskgrade10session34" element={<TaskGrade10Session34 />} />

<Route path="/taskgrade11foundation/Grade11/taskgrade11session1" element={<TaskGrade11Session1 />} />
<Route path="/taskgrade11foundation/Grade11/taskgrade11session2" element={<TaskGrade11Session2 />} />
<Route path="/taskgrade11foundation/Grade11/taskgrade11session3" element={<TaskGrade11Session3 />} />
<Route path="/taskgrade11foundation/Grade11/taskgrade11session4" element={<TaskGrade11Session4 />} />
<Route path="/taskgrade11foundation/Grade11/taskgrade11session5" element={<TaskGrade11Session5 />} />
<Route path="/taskgrade11foundation/Grade11/taskgrade11session6" element={<TaskGrade11Session6 />} />
<Route path="/taskgrade11foundation/Grade11/taskgrade11session7" element={<TaskGrade11Session7 />} />
<Route path="/taskgrade11foundation/Grade11/taskgrade11session8" element={<TaskGrade11Session8 />} />

<Route path="/taskgrade12foundation/Grade12/taskgrade12session1" element={<TaskGrade12Session1 />} />
<Route path="/taskgrade12foundation/Grade12/taskgrade12session2" element={<TaskGrade12Session2 />} />
<Route path="/taskgrade12foundation/Grade12/taskgrade12session3" element={<TaskGrade12Session3 />} />

          <Route path="/learningvideos" element={<LearningVideos />} />
          <Route path="/videoplayer" element={<VideoPlayerPage />} />
          <Route path="/CreateTask" element={<CreateTaskPage />} />

        </Routes>
      </div>
    </div>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
