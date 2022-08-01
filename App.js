import React, {useState} from 'react'
import {auth}  from './firebase_config'
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from '@firebase/auth'



const App = () => {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('') 
  const [loginPassword, setLoginPassword] = useState('')
  const [error, setError] = useState(false)
  const [user, setUser] = useState({})

  const register = async() => {
   
  try {
    let user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    console.log(user)

  }catch(error){
   setError(error.message)
  }
  }


 
  const login =  async () => {
    try {
      let user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(user)
  
    }catch(error){
     setError(error.message)
  }
}

  const logout = async() => {
 await signOut(auth)
  }

  onAuthStateChanged(auth, (currentUser) => {
   setUser(currentUser)
  })

  return (
    <div> 
      {error}
      <h1>register user </h1>
      <input  placeholder="email" 
      onChange={(e) => setRegisterEmail(e.target.value)}
      /> 
      <input 
      placeholder="password"  
      onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <button onClick={register}>register</button>
     

     <h1>login</h1> 
     <input placeholder="email"  
     onChange={(e) => setLoginEmail(e.target.value)}
     />
     <input placeholder="password"  
     onChange={(e) => setLoginPassword(e.target.value)}
     />
     <button>login</button>
     
   { <pre>{user?.email}</pre> }
    <button onClick={logout}>signOut</button>
    </div>
  )
}



export default App
