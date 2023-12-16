import React from 'react';
import "./App.css";
import { NavBar} from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import {Dashboard} from './Components/Pages/Dashboard';
import SalesForm  from './Components/Pages/SalesForm';
import  SalesRecord  from './Components/Pages/SalesRecord';
import {StockRecord} from './Components/Pages/StockRecord';
import {StockInput} from './Components/Pages/StockInput';
import {Settings} from './Components/Pages/Settings';
import {LoginPage} from './Components/Pages/LoginPage';


const App = () => {
  return( 
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/sales form' element={<SalesForm/>}/>
        <Route path='/sales records' element={<SalesRecord/>}/>
        <Route path='/stock records' element={<StockRecord/>}/>
        <Route path='/stock input' element={<StockInput/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/logout' element={<LoginPage/>}/>
      </Routes>


    </div>
  
  )
};

export default App;