import React, { useState } from "react";
import "./CreatePost.css";
import { collection, addDoc } from "firebase/firestore";
import { auth , db } from "../Firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const [title, setTitle] = useState();
    const [post, setPost] = useState();
    const [url, setUrl] = useState();
    const navigate = useNavigate();

    async function createPost() {
        const user = auth.currentUser;
        if (user) {
            // ユーザーがログインしている場合の処理
            try {
                const docRef = await addDoc(collection(db, "posts"), {
                    postTitle: title,
                    postContent: post,
                    postUrl: url,
                    author: {
                        username: user.displayName,
                        id: user.uid,
                    },
                });
                navigate("/");
            } catch (error) {
                console.error("Error adding document to Firestore: ", error);
            }
        } else {
            // ユーザーがログインしていない場合の処理
            alert("ログインされていない状態での投稿は出来ません。");
            navigate("/Login");
        }
    }
    return (
        <div className="createPostPage">
            <div className="postContainer">
                <h1>参考URL投稿<span>（ログインが必須です）</span></h1>
                <div className="inputPost">
                    <p>タイトル(簡易的な内容説明)</p>
                    <input type="text" placeholder="例）Hooksをまとめてくれている" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="inputPost">
                    <p>投稿内容(具体的な内容説明)</p>
                    <textarea placeholder="例）useStateやuseEffectのようなよく使うもの以外にも様々な有意義なHooksが説明されている" onChange={(e) => setPost(e.target.value)} />
                </div>
                <div className="inputPost">
                    <p>URL(https://から始まるURLをお願いします)</p>
                    <input placeholder="例）https://www.google.com/" onChange={(e) => setUrl(e.target.value)} />
                </div>
                <button className="postBtn" onClick={createPost}>
                    投稿する
                </button>
            </div>
        </div>
    );
};

export default CreatePost;
