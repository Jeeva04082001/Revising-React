import React, {useState} from 'react'

//[11-06-2025]
const Hooks = () => {
    const [num, setNum] = useState(1);

    console.log(num,'num-----1');

    let x= 1;

    const handleAdd1 = () => {
        x=x+1;
        console.log(x,'x-----1');
        
    };
    const handleAdd2 = () => {
       
        setNum(2);
        console.log(x,'x----2');

        
    };

    console.log(x,'x----0');


    // -------------------------------------

   

    

    // return(
    //     <>
    //     <h1>{x}</h1>
    //     <button onClick={handleAdd1}>Add1</button>
    //     <button onClick={handleAdd2}>Add2</button>
        
    //     </>
    // )


    // -------------------------------------


    const handleAdd3 = () => {
       
        setNum(2);
        console.log(x,'x----3');

        
    };
    const handleAdd4 = () => {
       
        setNum(num+1);
        console.log(x,'x----4');

        
    };
    const handleAdd5 = () => {
       
        // setNum((currentvalue)=>{  //callback function
        //     return currentvalue + 1;
        // })

        setNum((curr)=>{
            return curr + 1;
        })
        
    };


     return(
        <>
        <h1>{num}</h1>
        <button onClick={handleAdd3}>Add3</button>
        <button onClick={handleAdd4}>Add4</button>
        <button onClick={handleAdd5}>Add4</button>
        
        </>
    )
 
}
export default Hooks;