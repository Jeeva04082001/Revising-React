import React,{useState} from 'react'
import { useQuery } from '@tanstack/react-query';


// const MainQuery = () => {


//     const {isLoading,data,error } = useQuery('githubData', apiCall);


//     function apiCall(){
//         return fetch(
//             "https://api.github.com/repos/antonfrancisjeejo/flipkart-clone"
//         ).then((res)=>res.json());
//     }

//     if (isLoading){
//         return <h1>Loading...........</h1>
//     }

//     if(error){
//         return<h1>An Error occured {error}......</h1>
//     }

//     console.log(data,'data-----------');
    

//   return (
//     <div>
//         <h1>Repo name : {data.name}</h1>
//             <h1>Repo subscribers_count : {data.subscribers_count}</h1>
//             <h1>Repo stargazers_count : {data.stargazers_count}</h1>
//             <h1>Repo forks : {data.forks}</h1>

//     </div>
//   )
// }

// export default MainQuery;

//----------------------------------------------------------------


//---------------------------------



// const MainQuery = () => {



//     const repo1 = useQuery({
//         queryKey:["githubData","https://api.github.com/repos/antonfrancisjeejo/flipkart-clone"],
//         queryFn:apiCall
//     })

//     const repo2 = useQuery({
//         queryKey:["githubData","https://api.github.com/repos/antonfrancisjeejo/telegram-clone"],
//         queryFn:apiCall
//     })
    

//     function apiCall({queryKey}){
//         return fetch(queryKey[1]).then((res)=>res.json());
//     }

//     if (repo1.isLoading || repo2.isLoading){
//         return <h1>Loading...........</h1>
//     }

//     if(repo1.error || repo2.error){
//         return<h1>An Error occured {error}......</h1>
//     }

//     console.log(repo1.data,'data-----------1');
//     console.log(repo2.data,'data-----------2');

    

//   return (
//     <div>
//         <div>
//             <h1>Repo name:{repo1.data.name}</h1>
//             <h1>Subscribers count:{repo1.data.subscribers_count}</h1>
//             <h1>Repo stargazers_count : {repo1.data.stargazers_count}</h1>
//             <h1>Repo forks : {repo1.data.forks}</h1>
//         </div>

//         <div>
//             <h1>Repo name : {repo2.data.name}</h1>
//             <h1>Repo subscribers_count : {repo2.data.subscribers_count}</h1>
//             <h1>Repo stargazers_count : {repo2.data.stargazers_count}</h1>
//             <h1>Repo forks : {repo2.data.forks}</h1>

//         </div>
//     </div>
//   )
// }

// export default MainQuery;


//----------------------------------------------------------------


// const MainQuery = () => {


//     const [url,setUrl]=useState("https://api.github.com/repos/antonfrancisjeejo/flipkart-clone")

//     const repo1 = useQuery({
//         queryKey:["githubData",url],
//         queryFn:apiCall
//     })

//     const repo2 = useQuery({
//         queryKey:["githubData","https://api.github.com/repos/antonfrancisjeejo/telegram-clone"],
//         queryFn:apiCall
//     })
    

//     function apiCall({queryKey}){
//         return fetch(queryKey[1]).then((res)=>res.json());
//     }

//     if (repo1.isLoading || repo2.isLoading){
//         return <h1>Loading...........</h1>
//     }

//     if(repo1.error || repo2.error){
//         return<h1>An Error occured {error}......</h1>
//     }

//     console.log(repo1.data,'data-----------1');
//     console.log(repo2.data,'data-----------2');

    

//   return (
//     <div>
//         <div>
//             <h1>Repo name:{repo1.data.name}</h1>
//             <h1>Subscribers count:{repo1.data.subscribers_count}</h1>
//             <h1>Repo stargazers_count : {repo1.data.stargazers_count}</h1>
//             <h1>Repo forks : {repo1.data.forks}</h1>
//         </div>

//         <div>
//             <h1>Repo name : {repo2.data.name}</h1>
//             <h1>Repo subscribers_count : {repo2.data.subscribers_count}</h1>
//             <h1>Repo stargazers_count : {repo2.data.stargazers_count}</h1>
//             <h1>Repo forks : {repo2.data.forks}</h1>

//         </div>

//         <button onClick={()=>setUrl("https://api.github.com/repos/antonfrancisjeejo/tinder-clone-expo-app")}>Update</button>
//     </div>
//   )
// }

// export default MainQuery;


//----------------------------------------------------------------


// const MainQuery = () => {


//     // https://api.github.com/repos/antonfrancisjeejo/flipkart-clone
    
//     const [url,setUrl]=useState("")

//     const repo1 = useQuery({
//         queryKey:["githubData",url],
//         queryFn:apiCall
//     })

//     const repo2 = useQuery({
//         queryKey:["githubData","https://api.github.com/repos/antonfrancisjeejo/telegram-clone"],
//         queryFn:apiCall
//     })
    

//     // function apiCall({queryKey}){
//     //     return fetch(queryKey[1]).then((res)=>res.json());
//     // }



//     function apiCall({queryKey}){
//         if(queryKey[1]){
//             return fetch(queryKey[1]).then((res)=>res.json());
//         }
//         throw new Error("Url is Missing");
//     }

//     if (repo1.isLoading || repo2.isLoading){
//         return <h1>Loading...........</h1>
//     }

//     if(repo1.error || repo2.error){
//         return<h1>An Error occured {error}......</h1>
//     }

//     console.log(repo1.data,'data-----------1');
//     console.log(repo2.data,'data-----------2');

    

//   return (
//     <div>
//         <div>
//             <h1>Repo name:{repo1.data.name}</h1>
//             <h1>Subscribers count:{repo1.data.subscribers_count}</h1>
//             <h1>Repo stargazers_count : {repo1.data.stargazers_count}</h1>
//             <h1>Repo forks : {repo1.data.forks}</h1>
//         </div>

//         <div>
//             <h1>Repo name : {repo2.data.name}</h1>
//             <h1>Repo subscribers_count : {repo2.data.subscribers_count}</h1>
//             <h1>Repo stargazers_count : {repo2.data.stargazers_count}</h1>
//             <h1>Repo forks : {repo2.data.forks}</h1>

//         </div>

//         <button onClick={()=>setUrl("https://api.github.com/repos/antonfrancisjeejo/tinder-clone-expo-app")}>Update</button>
//     </div>
//   )
// }

// export default MainQuery;


//----------------------------------------------------------------


const MainQuery = () => {


    // https://api.github.com/repos/antonfrancisjeejo/flipkart-clone
    
    const [url,setUrl]=useState("")

    const repo1 = useQuery({
        queryKey:["githubData",url],
        queryFn:apiCall
    })

    const repo2 = useQuery({
        queryKey:["githubData","https://api.github.com/repos/antonfrancisjeejo/telegram-clone"],
        queryFn:apiCall
    })
    

    // function apiCall({queryKey}){
    //     return fetch(queryKey[1]).then((res)=>res.json());
    // }



    function apiCall({queryKey}){
        if(queryKey[1]){
            return fetch(queryKey[1]).then((res)=>res.json());
        }
        throw new Error("Url is Missing");
    }

    if (repo2.isLoading){
        return <h1>Loading...........</h1>
    }

    if(repo2.error){
        return<h1>An Error occured {error}......</h1>
    }

    console.log(repo1.data,'data-----------1');
    console.log(repo2.data,'data-----------2');

    

  return (
    <div>
        {repo1.data && (
            <div>
                <h1>Repo name:{repo1.data.name}</h1>
                <h1>Subscribers count:{repo1.data.subscribers_count}</h1>
                <h1>Repo stargazers_count : {repo1.data.stargazers_count}</h1>
                <h1>Repo forks : {repo1.data.forks}</h1>
            </div>
        )}
        

        <div>
            <h1>Repo name : {repo2.data.name}</h1>
            <h1>Repo subscribers_count : {repo2.data.subscribers_count}</h1>
            <h1>Repo stargazers_count : {repo2.data.stargazers_count}</h1>
            <h1>Repo forks : {repo2.data.forks}</h1>

        </div>

        <button onClick={()=>setUrl("https://api.github.com/repos/antonfrancisjeejo/tinder-clone-expo-app")}>Update</button>
    </div>
  )
}

export default MainQuery;


