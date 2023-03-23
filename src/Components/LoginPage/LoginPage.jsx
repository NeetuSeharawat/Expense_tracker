import React, { useRef } from "react";
import axios from "axios";

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  // login
  const loginHandler = async (e) => {
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
       localStorage.setItem('token',res.data.idToken);
    } catch (error) {
      console.log("error", error);
    }
  };

  // Logout
  const handleLogout =()=>{
    localStorage.removeItem("token");
  }
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
       
        <button onClick={loginHandler} type={"submit"}>
          Login
        </button>
        <button onClick={handleLogout}>Logout</button>
      </form>
    </div>
  );
};
export default LoginPage;