import React,{useState,useEffect} from 'react';
import { FixedSizeList as List } from "react-window";


const PostsTable = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>setPosts(data));
    },[])

    const Row=({index,style}) =>(
        <div
        style={{
            ...style,
            display:"grid",
            gridTemplateColumns: "250px 400px 100px",
            borderBottom: "1px solid #ddd",
            padding: "6px",
        }}
        >
            <div style={{ fontWeight: index === 0 ? "bold" : "normal" }}>
                {index === 0 ? "Title" : posts[index - 1]?.title}
            </div>
            <div>
                {index === 0 ? "Body" : posts[index - 1]?.body}
            </div>
            <div>
                {index === 0 ? "User ID" : posts[index - 1]?.userId}
            </div>

        </div>
    );

  return (
    <div>
        <h2>Posts Table ({posts.length} rows)</h2>
        {posts.length>0 ? (
            <List
            height={500}
            itemCount={posts.length + 1}
            itemSize={80}
            width={800}
            >
            {Row}
            </List>
        ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default PostsTable