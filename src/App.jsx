// import TimeElement from "./components/TimeElement.jsx"
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Icon from "./components/Icon.jsx"
import OffCanvasMenu from "./components/OffcanvasMenu.jsx"
import Home from "./components/Home.jsx"
import Profile from "./components/Profile.jsx"

const App = () => {

    return (
        <>
            <button className="navbar-toggler offcanvasMenu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <Icon icon="menu" />
            </button>
            <OffCanvasMenu />
            <h1 className="title">Time Tracker</h1>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>


        </>
    )
}

export default App