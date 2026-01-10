import React,{Suspense,lazy,useState} from 'react'
const PostsTable = lazy(()=>import("./PostsTable"))

const ShowLazyLoad = () => {

    const [showTable, setShowTable] = useState(false);

  return (
    <div>
        <h1>React Lazy Loading Example</h1>
        <button onClick={()=> setShowTable(true)} style={{ padding: "10px", marginBottom: "20px" }}> Load Post Table</button>
        {showTable && (
            <Suspense fallback={<div>Loading Table...</div>}>
                <PostsTable/>
            </Suspense>
        )}
    </div>
  )
}

export default ShowLazyLoad;