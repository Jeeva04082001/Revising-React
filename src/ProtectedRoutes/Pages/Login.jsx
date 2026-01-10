import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../Slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = ()=>{

    dispatch( 
        setUser({
        name:"Jeeva",
        email:"jeeva@gmail.com",
      })
    );
    navigate("/");
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login;
