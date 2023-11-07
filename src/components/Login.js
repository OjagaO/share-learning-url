import React from "react";
import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = ({setIsAuth}) => {


    const navigate = useNavigate();

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // ログイン成功時の処理
                setIsAuth(true);
                localStorage.setItem("isAuth",true);
                navigate("/")
            })
            .catch((error) => {
                // ログインエラー時の処理
                console.error("Login error:", error);
            });
    };

    return (
        <div className="login">
            <div className="login_area">
                <div className="login_box">
                    <p>ログインして始める</p>
                    <button onClick={loginWithGoogle}>Googleでログインする</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
