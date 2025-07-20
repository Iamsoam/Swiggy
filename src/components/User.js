import React from 'react'
import { useState,useEffect } from 'react'

const User =(props)=> {

 const [count,setCount] = useState(0);

 const [user,setUser] = useState([])

//    const increment =()=>{
//       setCount(count+1)
//    }


useEffect(()=>{
    fetchData();
},[])

   const fetchData = async()=>{
      const data = await fetch('https://api.github.com/users/Iamsoam');
      const json = await data.json();

      console.log(json);

      setUser(json);
   }


  return (
    <div className="border border-black bg-gray-500 p-4 rounded-lg flex items-center justify-between">
      <div>
        {/* <h1>Count: {count}</h1> */}
        {/* <button
          onClick={() => setCount(count + 1)}
          className="border border-black bg-gray-200 p-1 rounded-lg mb-2"
        >
          Click
        </button> */}
        <h1>Name: {user.login}</h1>
        <h3>Age: {props.age}</h3>
        <h3>Location: Pune</h3>
        <h3>Profession: Software Engineer</h3>
      </div>
      <img
        className="w-56 border rounded ml-6"
        src={user.avatar_url}
        alt="User Avatar"
      />
    </div>
  );
};

export default User