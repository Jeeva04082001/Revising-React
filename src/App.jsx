import User from './Props/User'

function App(){
  const Userdata = {
    Name:'Jeeva',
    Age:23,
    Phone:'8870147970',
    Email:'jeeva@gmail.com'

  };

  return(
    <>
    <User
    {...Userdata}  //spread operator
    />
    
    </>
  )
}

export default App;

















//-----------------------------------------

// function Hello ( ){
//   return <h1>Hekkow World</h1>
// }

// function World () {
//   return <h2>Ruban</h2>
// }
// export default Hello;

// export {Hello,World};


