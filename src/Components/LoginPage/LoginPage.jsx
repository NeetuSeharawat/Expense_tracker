import React, { useRef } from "react";
import axios from "axios";

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      returnSecureToken:true,
    };
    try {
      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSf5df3wQzSx7GQ34HdC2hCFcD4sIETvM",
        obj
      );
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <form>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Enter your Name"
          ref={emailRef}
          required
        ></input>
        <input
          type="password"
          placeholder="Enter your Passward"
          ref={passwordRef}
          required
        ></input>
       
        <button onClick={handleSubmit} type={"submit"}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;