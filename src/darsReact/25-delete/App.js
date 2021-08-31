import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AppDelete = () => {
    const [post, setPost] = useState(null);

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res=>{setPost(res.data)})
    },[])

    function delPost() {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{alert('o`chirildi'); setPost(null)})
    }
    if(!post) return "No post!"
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={delPost}>Delete</button>
        </div>
    );
};

export default AppDelete;