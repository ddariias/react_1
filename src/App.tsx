import React, {useEffect, useState } from 'react';
import './App.css';
import { IUser } from './model/IUser';
import { userServices, postServices } from './services/user.api.services';
import { IPosts } from './model/IPosts';
import UserCopponents from './component/UserCopponents';
import PostComponent from './posts/PostComponent';

const App = () => {

  const [users, setUsers] = useState<IUser[]>([]);
  const [userId, setUserId] = useState<number>(0)
  const [posts, setPosts] = useState<IPosts[]>([])


  useEffect(() => {
    userServices()
        .then(value=>
          setUsers(value.data.users)
  )
  }, []);


  useEffect(() => {
    if (userId !== 0) {
      postServices(userId).then(value => setPosts(value.data.posts))
    }
  }, [userId]);


  const buttonClick = (id:number) => {
    setUserId(id)
  }
  return (
    <>
      {
       users.map((user: IUser) => <UserCopponents
           id = {user.id}
           firstName ={user.firstName}
           lastName = {user.lastName}
           age = {user.age}
           gender ={user.gender}
           email ={user.email}
           phone ={user.phone}
           key = {user.id}
           buttonClick ={buttonClick}


       />)
      }
      <div>
      <PostComponent posts ={posts}/>
      </div>
    </>
  );
}

export default App;
