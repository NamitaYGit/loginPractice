import { useState } from 'react'

import './App.css'


const  githubClientId = import.meta.env.GITHUB_CLIENT_ID;
 

function App() {
 
//Forwerd the user to the github login screen (we pass the client Id)
//User is now on the github side and logs in (github.com/login)
//When user decides to login..they get forwrded back to localhost:5173
//but now on localhost://5173?code=ASDFASDFADSF
//use the code to getthe access token(code can be used only once)
function loginWithGithub(){
  window.location.assign("https://github.com/login/oauth/authorize?client_id="+ githubClientId)
}
console.log("hello")
  return (
   <>
   <button onClick={loginWithGithub}>Login with Github</button>
   </>
  )
}

export default App
