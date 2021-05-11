import './App.css';
import React from 'react'
import SideNavPage from './component/SideNavPage'
import Data from './component/Data'
import {BrowserRouter ,Route } from "react-router-dom";
const element = <h1>hi this the home page</h1>
function App() {
  return (
    <div>element</div>,
    <BrowserRouter>
  
    <Route path="/SideNavPage" component={SideNavPage}/>
    <Route path="/Data" component= {Data}/>
    </BrowserRouter>
  )
}

export default App


// we can use the router to redirect the page where i want
