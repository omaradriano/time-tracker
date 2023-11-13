import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

import './css/custom.css' //CSS Agregado custom

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min"; //Estos dos son para bootstrap

import 'material-icons/iconfont/material-icons.css'; //Importar íconos


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)