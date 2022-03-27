import axios from "axios";
import React, { useState } from "react";
import "./App.css";
const App = () => {
	const [user, Updateuser] = useState([]);
const[data,setData] = useState(false);
  const Fetchuser = async () => {
    const response = await axios.get("https://reqres.in/api/users?page=1");
    Updateuser(response.data.data);
    console.log(response.data.data);
    setData(true);
  };

  return (
    <div className = "App">
      <div className="navbar">
      <h1>Fetch-User</h1>
      <button className = "btn" onClick = {Fetchuser}  >Get Data</button>
        </div>
        {data?
   
      <div className="user-card">
        {user.map(({ id, first_name, last_name, email,avatar}) => (
          <div className="data"key={id}>
            <div className="image">
            <img src = {avatar} alt="img" ></img>
            <div className="about">
           
           <span>
              {first_name}  &nbsp;{last_name} 
             </span>
            <span>
              &nbsp;{email}
              </span>
            </div>
            </div>
          </div>
          
          ))}
        </div>
           :
           <h2>Click On Get User Button To Get Data of  Users</h2>
    }
      </div>
    );
};


export default App;
