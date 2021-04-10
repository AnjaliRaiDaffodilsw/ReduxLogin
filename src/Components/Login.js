import React ,{useState} from 'react';
import { login, logout } from "../features/userSlice";
import { useDispatch } from "react-redux";

import './Login.css';

const Login = () => {
const[name,setName] = useState("");
const[email,setEmail]= useState("");
const[password,setPassword] = useState("");
const[position,setPosition] = useState("");


const dispatch = useDispatch();

const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        position : position,
        loggedIn: true,
      })
    );

    setEmail("");
    setPassword("");
    setPosition("");
   
  };
    return (
        
        <div className = "login">
             <form className="login__form" onSubmit={(event) => handleSubmit(event)}>
        <h1>Login here 🚪</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="name"
          value={position}
          placeholder="Your Position"
          onChange={(event) => setPosition(event.target.value)}
        />
        <button type="submit" className="submit__btn">
          Submit
        </button>
      </form>
        </div>
    )
}

export default Login
