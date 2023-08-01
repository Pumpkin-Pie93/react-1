import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = () => {

  let posts = [
    { id: 1, message: 'Hi, how are you?', likes: 12 },
    { id: 2, message: "It`s my first post!!!", likes: 2 },
    { id: 2, message: "It`s my second post!!!", likes: 2 },
    { id: 2, message: "Ha-ah-ha-ha-haHa-ah-ha-ha-ha!!!", likes: 0 },
    { id: 2, message: "JK", likes: 6 }

  ];

  let postsElements = posts.map(p => <Post message={p.message} likes={p.likes} />);

  return <div className={s.postsBlock}>
    <h3>My posts</h3>
    <div>
      <div><textarea></textarea></div>
      <div>
        <button>Add post</button>
      </div>
    </div>
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>
}

export default MyPosts;