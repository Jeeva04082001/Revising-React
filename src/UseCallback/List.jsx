import React,{useState,useEffect} from 'react'

const List = ({getItems})=>{
    const [Items, setItems] = useState([]);

    console.log(Items,'Items');
    
    useEffect(()=>{
        setItems(getItems(10)); //for UseCallback
        console.log('setting items');
        
    },[getItems]);

    // useEffect(()=>{
    //     setItems(getItems);
    //     console.log('setting items'); //for Usememo
        
    // },[getItems]);

    return(
        <div>
            {
                Items.map((item,index)=>{
                    return<p key={index}>{item}</p>
                })
            }
        </div>
    )

}

export default List;