import './App.css';
import Sidebar from './Components/SideBar/Sidebar';
import {Routes,  Route } from 'react-router-dom';
import AddPage from './Components/Pages/AddPage';
import DeletePage from './Components/Pages/DeletePage';
import ModifyPage from './Components/Pages/ModifyPage';
import SearchPage from './Components/Pages/SearchPage';
import LoginPage from './Components/Pages/LoginPage';
import { createContext, useState } from 'react';

export const UserContext = createContext({user:null});

function App() {
  const [user,setUser] = useState(null);
  return (
   <UserContext.Provider value ={[user,setUser]}>
    <div style={{display:"flex"}}>
      <Routes >
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/search" element={
             user!==null? <><Sidebar/><SearchPage/></>:<LoginPage/>
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
   </UserContext.Provider>
  );
}

export default App;
