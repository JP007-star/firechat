import React,{useState,useEffect} from 'react'
import SignOut from './SignOut'
import { db } from '../firebase'

function Chat() {
  const [messages,setMessages]=useState([])
  useEffect(()=>{
      db.collection('messages').orderBy('createdBy').limit(50).onSnapshot(snapshot=>{
            setMessages(snapshot.docs.map(doc=>doc.data))
      })
  },[])
  console.log(messages.data);
  return (

    <div>
          <SignOut/>
          {messages.map(({id,text,photoURL})=>{
               <div key={id}>
                  <img src={photoURL}  />
                  <p>text</p>
               </div>
          })}
    </div>
  )
}

export default Chat