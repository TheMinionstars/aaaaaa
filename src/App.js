import logo from "./logo.svg";
import "./App.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import { createContext, useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
export const UserContent = createContext();


function App() {
  return (
    
      
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cate/:slug" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        {/* <Home /> */}
      </div>
    </Router>
    
  );
}

export default App;
