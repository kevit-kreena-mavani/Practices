import React , {useState} from 'react';
import './App.css';
import User from './components/User/User';
import UsersList from './components/User/UsersList';


function App() {

  const [userList , UpdateUser]= useState([]);

  const addUserHandler = (uName , uAge) =>{
    UpdateUser((prevUser)=>{
      return [...prevUser , {name : uName , age: uAge , id:Math.random().toString()}]
    })
  }
  return (
    <div>
      <User  onAddUser = {addUserHandler}></User>
      <UsersList users = {userList}></UsersList>
    </div>
  );
}

export default App;
