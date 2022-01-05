import React, {Component} from 'react'
import doctorimage from '../images/Doctor-talking-to-patient.jpg'

class Login extends Component {
  render() {
    return (
      <>
        <div className="row h-100 m-0 p-0">
          <div className="col-6 d-flex flex-column justify-content-center h-100 px-5">
            <h1>Welcome to LUNA!</h1>
            <p className='mb-3'>To access the system, input your login details</p>

            <h3>Email</h3>
            <input type="text" className="form-control mb-3"/>

            <h3>Password</h3>
            <input type="password" className="form-control mb-3"/>

            <a style={{textDecoration: 'none', color: 'black'}} href='google.com'>Forget Password</a>

            <button type="button" class="btn btn-primary mb-3">Sign In</button>
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
}

export default Login