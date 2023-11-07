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
                <Link to="/"><img src="./images/KakuKiji.png" alt="" /></Link>
                <Link to="/CreatePost">{pen}<span>記事投稿</span></Link>
                {!isAuth ? <Link to="/Login">{closeDoor}<span>ログイン</span></Link> : <Link to="/Logout">{openDoor}<span>ログアウト</span></Link>}
            </nav>
        </div>
    );
};

export default Navbar;
