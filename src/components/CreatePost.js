import React, { useState } from "react";
import "./CreatePost.css";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { auth } from "../Firebase";

const CreatePost = () => {
    const [title, setTitle] = useState();
    const [post, setPost] = useState();

    // const firebaseConfig = {
    //     apiKey: process.env.API_KEY,
    //     authDomain: process.env.API_DOMAIN,
    //     projectId: process.env.API_PROJECT_ID,
    //     storageBucket: process.env.API_STORAGE,
    //     messagingSenderId: process.env.API_SENDER_ID,
    //     appId: process.env.API_APP_ID,
    // };
    const firebaseConfig = {
        apiKey: "AIzaSyDelE6YPKEQ1nVP0liNSMzIGNAYaztMOYk",
        authDomain: "react-blog-4e78f.firebaseapp.com",
        projectId: "react-blog-4e78f",
        storageBucket: "react-blog-4e78f.appspot.com",
        messagingSenderId: "1076435976220",
        appId: "1:1076435976220:web:895fb1e730a870b48a1fd9",
    };
    // Firebaseの初期化
    const app = initializeApp(firebaseConfig, "posts");

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

    async function createPost() {
        const user = auth.currentUser;
        if (user) {
            console.log("ログインされています");
            // ユーザーがログインしている場合の処理
            const docRef = await addDoc(collection(db, "posts"), {
                postTitle: title,
                postContent: post,
                author: {
                    username: user.displayName,
                    id: user.uid,
                },
            });
            console.log("Document written with ID: ", docRef.id);
            console.log(title + ":" + post);
        } else {
            // ユーザーがログインしていない場合の処理
            console.log("ログインしていないので投稿できません ");
        }
    }
    return (
        <div className="createPostPage">
            <div className="postContainer">
                <h1>記事投稿</h1>
                <div className="inputPost">
                    <p>タイトル</p>
                    <input type="text" placeholder="タイトルを入力" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="inputPost">
                    <p>投稿内容</p>
                    <textarea placeholder="投稿内容を入力" onChange={(e) => setPost(e.target.value)} />
                </div>
                <button className="postBtn" onClick={createPost}>
                    投稿する
                </button>
            </div>
        </div>
    );
};

export default CreatePost;
