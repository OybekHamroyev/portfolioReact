import axios from 'axios';
import React, {useState, useEffect} from 'react';

const PostApp = () => {
const [post, setPost]=useState(null);
useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/posts').then(res=>{ setPost(res.data)})
    .catch(err=>console.error("Xatolik!"))
}, [])

function createPost(){ //tugma bosilganda post orqali title va body yuboriladi (id:101)-obyekt bulib qo'shiladi
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title:"Hello React",
        body: "This is post metods tests"
    }).then(res=>{console.log(res.data); setPost(res.data)})//statega olamiz
}
if(!post) return "Loading..."
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={createPost}>Create Post</button>
        </div>
    );
};

export default PostApp;