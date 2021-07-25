import React, { useState,useEffect} from 'react'

function UseEffectHook() {
    const [post,setPosts]=useState('posts');
    const [items,setItems]=useState([])
    

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${post}`)
        .then(response => response.json())
        .then(json => setItems(json))
        // return () => {
        //     cleanup
        // }
    }, [post])
    return (
        <>
             <button onClick={()=>{setPosts('posts')}}>Posts</button>
             <button onClick={()=>{setPosts('users')}}>Users</button>
             <button onClick={()=>{setPosts('comments')}}>Comments</button>   
        
        <p>{post}</p>
        {items.map(item=>{
            return <pre>{JSON.stringify(item)}</pre>
        })}
        </>
    )
}

export default UseEffectHook
   