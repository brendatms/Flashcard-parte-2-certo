// Importando o React
import React from "react";
import {NavLink} from 'react-router-dom';
// Importando os components necessários da lib react-materialize
import Curso from "./curso"


const Courses = () => {
    return (
        <div>
            <div class="row">
                <h5>Cursos</h5>
                <NavLink to="/formulario"><a class="grey waves-effect waves-light btn">Adicionar</a></NavLink>
                <Curso 
                    title="Biologia" 
                    descReveal="Ramo da biologia que estuda a formação, estrutura e função das macromoléculas essenciais à vida." 
                    reveal="Descrição" 
                    link="Saiba mais" />
                <Curso title="História" 
                    descReveal="Ciência que estuda eventos passados com referência a um povo, país, período ou indivíduo específico." 
                    reveal="Descrição" 
                    link="Saiba mais" />
                <Curso title="Matemática" 
                    descReveal="É a ciência dedutiva que se dedica ao estudo das propriedades das entidades abstratas e das suas relações. Isto significa que a matemática trabalha com números, símbolos, figuras geométricas, etc." 
                    reveal="Descrição" 
                    link="Saiba mais" />

            </div>
        </div>
    );
};

export default Courses;