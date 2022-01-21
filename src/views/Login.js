import doctorimage from '../images/Doctor-talking-to-patient.jpg'
import { useState } from 'react'
import axios from 'axios'
// import { changeValue } from '../store/auth'
// import { useDispatch } from 'react-redux'
// import { Navigate } from "react-router-dom";

function Login () {
  var [email, setEmail] = useState("")
  var [password, setPassword] = useState("")
  var [status, setStatus] = useState("")
  // const dispatch = useDispatch()

  function queryUser (email, password) {
    console.log(email, password)
    return axios.post(
      'https://luna-backend-thesis.herokuapp.com/login',
      {
        email, password
      }
    ).then((res) => {
      console.log(res.data)
      setStatus(res.data.status)
      if(res.data.status === "ok"){
        sessionStorage.setItem("auth", 1)
        sessionStorage.setItem("userData", JSON.stringify(res.data.userData))
        window.location.replace('/')
      }
    }).catch(e => {
      console.log('Error lol')
      console.log(e)
    })
  }

  return (
    <>
      <div className="row h-100 m-0 p-0">
        <div className="col-6 d-flex flex-column justify-content-center h-100 px-5">
          <h1>Welcome to LUNA!</h1>
          <p className='mb-3'>To access the system, input your login details</p>

          {status === "wrong_creds" && 
            <div class="alert alert-danger" role="alert">
              Wrong email or password. Please try again.
            </div>
          }

          <h3>Email</h3>
          <input type="text" className="form-control mb-3" onChange={e => setEmail(e.target.value)} />

          <h3>Password</h3>
          <input type="password" className="form-control mb-3" onChange={e => setPassword(e.target.value)} />

          <a style={{textDecoration: 'none', color: 'black'}} href='google.com'>Forget Password</a>

          <button type="button" class="btn btn-primary mb-3" onClick={()=>{queryUser(email, password)}}>Sign In</button>
          <button type="button" class="btn btn-outline-secondary mb-3">Sign in with Google</button>

          <div className="d-flex">
            <span className='me-2' style={{fontWeight: 'bold'}}>Don't have an account?</span>
            <a style={{textDecoration: 'none', color: 'black'}} href='/register'>Register an account</a>
          </div>

        </div>
        <div className="col-6" style={{backgroundImage: `url(${doctorimage})`, backgroundSize: 'cover'}}>
        </div>
      </div>
    </>
  )
}

export default Login