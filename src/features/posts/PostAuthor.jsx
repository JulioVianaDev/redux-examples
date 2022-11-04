import { useSelector } from "react-redux";
import { selectAllUsers } from "../user/userSlice";

import React from 'react'

function PostAuthor({userId}) {

  const users = useSelector(selectAllUsers)
  const author = users.find(user => user.id === userId);


  
  return (
    <span>by {author? author.name : 'autor desconhecido'}</span>
  )
}

export default PostAuthor