import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import UsersList from "./components/UsersList";
import { Route, Routes } from "react-router-dom";
import './App.css'

const App = () => {
  return (
    <div>
       <NavBar />
      <Routes>
       <Route path="/" element={ <Home />} />
        <Route path="/usersList" element={<UsersList />} />
      </Routes>
    </div>
  );
};

export default App;
