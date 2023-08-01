import React from "react";
import s from './Post.module.css';

const Post = (props) => {

  console.log(props.message);
  return <div className={s.item}>
    <div>
      <img  alt='disribe' src="https://image.pngaaa.com/402/1423402-middle.png"></img>
</div>
    <div> 
      { props.message }
    <div><span>Like </span>{props.likes}</div>
  </div>
  </div>
}

export default Post;