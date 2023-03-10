import React from 'react'
import { useNavigate } from 'react-router-dom'
let obj = {
    userName: 'ali',
    password: 123
}

let key = 'qwertyuiop'
function Login() {
    const navigate = useNavigate()
    const loginChecking = (e) => {
        e.preventDefault()
        if(obj.userName == e.target.username.value && obj.password == e.target.password.value) {
            navigate('/')
            window.localStorage.setItem('key', key)
        }else {
            alert('hato login yoki password')
        }
    }
  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={loginChecking} action="#">
      <input type="text" placeholder='user name' name='username'/>
      <input type="text" placeholder='password' name='password' />
      <button>Log in</button>
      </form>
    </div>
  )
}

export default Login
