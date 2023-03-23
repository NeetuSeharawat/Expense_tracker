import axios from 'axios';
import React, { useEffect, useRef } from 'react';

const UpdateProfile = () => {
 const fullNameRef = useRef();
  const profilePhotoUrlRef = useRef();



  const UpdateHandler= async(e)=>{
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCSf5df3wQzSx7GQ34HdC2hCFcD4sIETvM",
          {
            idToken: token,
            displayName: fullNameRef.current.value,
            photoUrl: profilePhotoUrlRef.current.value,
            returnSecureToken: true,
          }
      );
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };

  async function getData() {
    try {
     
      let res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCSf5df3wQzSx7GQ34HdC2hCFcD4sIETvM",
        {
          idToken: localStorage.getItem("token"),
        }
      );
        console.log(res);
      fullNameRef.current.value=(res.data.users[0].displayName || "");
      profilePhotoUrlRef.current.value=(res.data.users[0].photoUrl || "");
      
    } catch (error) {
      console.log("error:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Contact Details</h1>
      <input 
      type="text" placeholder='Enter your Full Name' ref={fullNameRef} required>
      </input>
      <input 
      type="text" placeholder='Enter Profile Photo URL'ref={profilePhotoUrlRef} required>
      </input>
      <br />

      <button onClick={UpdateHandler}>Update</button>
      <button>Cancel</button>
      
    </div>
  )
}

export default UpdateProfile;
