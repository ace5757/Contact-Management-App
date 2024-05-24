import { useLocation } from "react-router-dom";
import './App.css';
import React from 'react';
import SideBar from './Components/SideBar';
import {Route,Routes} from "react-router-dom"
import Contacts from "./Pages/Contacts"
import Dashboard from "./Pages/Charts_and_Maps"
import EditContact from "./Components/Edit_Contact"
import ContactForm from "./Components/ContactForm"
import background from "./bg.png"

function App() {

  const location = useLocation();
  const currentRoute = location.pathname;
 
  return (

    <div className="App">
      <h1 className='z-50 w-full fixed shadow shadow-slate-700 top-0 text-2xl text-white bg-blue-600 font-bold p-4'>
        {
          currentRoute == "/" ? 'Contact Management' : currentRoute == "/contact_form" ? "Contacts" : "Charts and Maps"
        }
      </h1>
      <div className='flex w-full '>
        <div className='sticky  top-0 h-screen'>
          <SideBar />
        </div>
        <div className='w-full'>
        <Routes >
            <Route path="/" element={<Contacts/>}/>
            <Route path="/contact_form" element={<ContactForm/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/edit/:id" element={<EditContact/>}/>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
