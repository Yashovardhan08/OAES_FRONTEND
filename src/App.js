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
      <Routes>
        <Route path="/search" element={<><Sidebar/><SearchPage/></>}/>
        <Route path="/modify" element={<><Sidebar/><ModifyPage/></>}/>
        <Route path="/delete" element={<><Sidebar/><DeletePage/></>}/>
        <Route path="/add" element={<><Sidebar/><AddPage/></>}/>
        <Route path="/" element={<LoginPage/>}/>
      </Routes>
    </div>
   </UserContext.Provider>
  );
}

export default App;
