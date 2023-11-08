import {createRoot} from 'react-dom/client'
import App from './App.jsx'

import './css/custom.css'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";


createRoot(document.getElementById('root')).render(
    <App />
)