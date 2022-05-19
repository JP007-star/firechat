import { Button } from 'material-ui-core'
import {auth} from '../firebase'
import React from 'react'

function SignOut() {
  return (
    <div>
        <Button onClick={()=>auth.signOut()}> SignOut </Button>
    </div>
  )
}

export default SignOut