import React,{useState,useEffect,useRef} from 'react'
import SignOut from './SignOut'
import { auth, db } from '../firebase'
import SendMessage from './SendMessage'


function Chat() {
  const [messages,setMessages]=useState([])
  const scroll = useRef()
  useEffect(()=>{
   
    db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
  })
  },[])
 
  return (

    <>
          <SignOut/>
          <div className='msgs'>
          {messages.map(({id,text,photoURL,uid,createdAt}) =>{
           
             return(
               <div>
               <div key={id} className={`msg ${uid === auth.currentUser.uid ?'sent': 'received'}`}>
                  <img  crossOrigin="anonymous" src={photoURL} alt=""  />
                  <p>{text}</p>
                  <span className='time'>{ createdAt.toDate().toString().slice(0,34)}</span>
                 
               </div>
               </div>)
          })}
          </div>
         

         
          <SendMessage scroll={scroll} />
           <div ref={scroll}></div>
    </>
  )
}

export default Chat
