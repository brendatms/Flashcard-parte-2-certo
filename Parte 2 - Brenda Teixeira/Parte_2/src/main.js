// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importantando o component Contact
import Courses from "./components/courses/courses";
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Route, Routes } from 'react-router-dom';

const Main = () => (
    <Routes>
        <Route exact path='/' element={ <Home />}/>
        <Route path='/courses' element={<Courses />}/>
    </Routes>
);

export default Main;