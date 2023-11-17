import React, { useEffect, useState } from "react";
import "./Home.css";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../Firebase";
import { Link } from "react-router-dom";

const Home = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collection(db, "posts"));
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("本当に削除しますか？")) {
            await deleteDoc(doc(db, "posts", id));
            window.location.href = "./";
        } else {
            alert("削除は実行されませんでした。");
        }
    };

    return (
        <div className="home">
            <div className="article_area">
                {postList.map((post) => {
                    return (
                        <Link to={post.postUrl} key={post.id} className="article_card" target="_blank">
                            <h2>{post.postTitle}</h2>
                            <p>{post.postContent}</p>
                            <div className="deleteBtn">
                                <p className="user_name">
                                    投稿者：{post.author.username} <span>さん</span>
                                </p>
                                {auth.currentUser && post.author.id === auth.currentUser.uid && <button onClick={() => handleDelete(post.id)}>削除</button>}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
