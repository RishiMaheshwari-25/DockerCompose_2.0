import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [users,SetUser]=useState([]);
  useEffect(()=>{
    axios.get("/api/users")
    .then((response)=>{
      SetUser(response.data.users);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
  console.log(users);
  return (
    <div>
     <h1>Users</h1>
     <ul>
      {users.map((user)=>(
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
     </ul>
     <h1>Health Check</h1>
     <ul>
      <li><a href="http://localhost:3000/api/health" target="_blank">Health Check</a></li>
      <li><a href="http://localhost:3000/api/hello" target="_blank">Hello</a></li>
     </ul>
    </div>
  )
}

export default App
