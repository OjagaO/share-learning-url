import './App.css';
import  {BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import { useState } from 'react';
import Navbar from './components/parts/Navbar';

function App() {

  const storedIsAuth = localStorage.getItem("isAuth");

  const [isAuth, setIsAuth] = useState(storedIsAuth === "true");

  return (
    <Router>
      <Navbar isAuth={ isAuth } />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/CreatePost" element={<CreatePost />}></Route>
        <Route path="/Login" element={<Login setIsAuth={ setIsAuth }/>}></Route>
        <Route path="/Logout" element={<Logout setIsAuth={ setIsAuth } />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
