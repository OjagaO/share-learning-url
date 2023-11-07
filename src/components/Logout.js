import React from "react";
import "./Logout.css";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {

    const Navigate = useNavigate();

    const signOutGoogle = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            Navigate("/Login");
        })
    }

    return (
        <div className="logout">
            <div className="logout_area">
                <div className="logout_box">
                    <p>ログアウトする</p>
                    <button onClick={signOutGoogle}>ログアウト</button>
                </div>
            </div>
        </div>
    );
};

export default Logout;
