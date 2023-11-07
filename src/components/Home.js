import React, { useEffect, useState } from "react";
import "./Home.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const Home = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collection(db, "posts"));
            setPostList(data.docs.map((doc) => ({ ...doc.data() })));
            console.log(postList);
        };
        getPosts();
    }, []);
    return (
        <div className="home">
            <div className="article_area">
                {postList.map((post) => {
                  return(
                    <div className="article_card">
                        <h2>{post.postTitle}</h2>
                        <p>{post.postContent}</p>
                        <div className="deleteBtn">
                            <p>{post.author.username}</p>
                            <button>記事の削除</button>
                        </div>
                    </div>
                  )
                })}
            </div>
        </div>
    );
};

export default Home;
