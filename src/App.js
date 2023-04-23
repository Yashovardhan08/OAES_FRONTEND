import './App.css';
import Sidebar from './Components/SideBar/Sidebar';
import {Routes,  Route } from 'react-router-dom';
import AddPage from './Components/Pages/AddPage';
import DeletePage from './Components/Pages/DeletePage';
import ModifyPage from './Components/Pages/ModifyPage';
import AllQuestions from './Components/Pages/AllQuestions';
import LoginPage from './Components/Pages/LoginPage';
import { createContext, useState } from 'react';
import {Questions} from './Components/Data/Questions.js';

export const UserContext = createContext({user:null});
export const QuestionContext = createContext({user:null});

function App() {
  const [user,setUser] = useState(null);
  const [questions,setQuestions] = useState([]);
  return (
   <UserContext.Provider value ={[user,setUser]}>
   <QuestionContext.Provider value ={[questions,setQuestions]}>
    <div style={{display:"flex"}}>
      <Routes >
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/allQuestions" element={
             user!==null? <><Sidebar/><AllQuestions/></>:<LoginPage/>
        }/>
        <Route path="/modify" element={
             user!==null? <><Sidebar/><ModifyPage/></>:<LoginPage/>
        }/>
        <Route path="/delete" element={
             user!==null? <><Sidebar/><DeletePage/></>:<LoginPage/>
        }/>
        <Route path="/add" element={
             user!==null? <><Sidebar/><AddPage/></>:<LoginPage/>
        }/>
      </Routes>
    </div>
   </QuestionContext.Provider>
   </UserContext.Provider>
  );
}

export default App;
