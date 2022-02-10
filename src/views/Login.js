// import doctorimage from '../images/Doctor-talking-to-patient.png'
import lunalogo from '../images/moon-full-moon-icon.png'
import { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { changeValue } from '../store/auth'
// import { useDispatch } from 'react-redux'
// import { Navigate } from "react-router-dom";

function Login () {
  var [email, setEmail] = useState("")
  var [password, setPassword] = useState("")
  var [status, setStatus] = useState("")
  var [loading, setLoading] = useState(false)
  // const dispatch = useDispatch()

  function queryUser (email, password) {
    console.log(email, password)
    setLoading(true)
    return axios.post(
      'https://luna-backend-thesis.herokuapp.com/login',
      {
        email, password
      }
    ).then((res) => {
      console.log(res.data)
      setStatus(res.data.status)
      if(res.data.status === "ok") {
        sessionStorage.setItem("auth", 1)
        sessionStorage.setItem("userData", JSON.stringify(res.data.userData))
        window.location.replace('/')
      }
      setLoading(false)
    }).catch(e => {
      console.log('Error lol')
      console.log(e)
    })
  }

  return (
    <>
      <div className="row min-vh-100 m-0 p-0" style={{backgroundColor: '#3b4acf'}}>
        <div className="mx-auto col-xl-7 col-lg-9 d-flex flex-column justify-content-center px-5">
          <div className="card p-5 mb-2" style={{borderRadius: "10px"}}>
            <div className="row">
              <div className="col-6 d-flex flex-column justify-content-center">
                <img src={lunalogo} alt="LUNA Logo" width='100px'/>
                <h1 className=''>LUNA</h1>
                <h5>Finding the best doctors for you.</h5>
              </div>
              <div className="col-6 row">
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
                {/* <a style={{textDecoration: 'none', color: 'black'}} href='google.com'>Forget Password</a> */}
                <button type="button" class="btn btn-primary mb-3" onClick={()=>{queryUser(email, password)}}>
                  { loading ?
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    :
                    <span>Sign In</span>
                  }
                </button>
                
                <div class="input-group mb-3 p-0">
                  <span class="input-group-text" id="input-group-left-example">
                    <FontAwesomeIcon icon={['fab', 'google']} />
                  </span>
                  {/* <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="input-group-left"> */}
                  <button type="button" class="form-control btn btn-outline-secondary">Sign in with Google</button>
                </div>
                <div className="d-flex p-0">
                  <i className='me-2' style={{fontWeight: 'bold'}}>Don't have an account?</i>
                  <a style={{textDecoration: 'none', color: 'black'}} href='/register'>Register an account</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* <div className="col-6" style={{backgroundImage: `url(${doctorimage})`, backgroundSize: 'cover'}}>
        </div> */}
      </div>
    </>
  )
}

export default Login