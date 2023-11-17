import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faSignIn, faSignOut } from "@fortawesome/free-solid-svg-icons";

const pen = <FontAwesomeIcon icon={faPen} />;
const openDoor = <FontAwesomeIcon icon={faSignIn} />;
const closeDoor = <FontAwesomeIcon icon={faSignOut} />;

const Navbar = ({ isAuth }) => {
    return (
        <div className="navbar">
            <nav>
                <Link to="/" className="nav_link"><img src="./images/KakuKiji.png" alt="" /></Link>
                <Link to="/CreatePost" className="nav_link">{pen}<span>参考URL投稿</span></Link>
                {isAuth ? <Link to="/Logout" className="nav_link">{openDoor}<span>ログアウト</span></Link> : <Link to="/Login" className="nav_link">{closeDoor}<span>ログイン</span></Link>}
            </nav>
        </div>
    );
};

export default Navbar;
