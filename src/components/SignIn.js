import React from 'react'
import {Button} from 'material-ui-core'
import {auth} from '../firebase.js'
import firebase from 'firebase/compat/app'




function SignIn() {
    function signInWithGoogle(){
        const provider=new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
  return (
    <div>
        <Button onClick={signInWithGoogle()}>Signin with Google</Button>
    </div>
  )
}

export default SignIn