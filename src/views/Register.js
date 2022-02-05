import React from "react"
import SideBar from "../components/SideBar"
import logo from '../images/moon-full-moon-icon.png'
import { useState, useEffect } from 'react'


function Register () {

  var [progressIndex, setProgressIndex] = useState(1)
  var [content, setContent] = useState("")
  var [sidedata, setSidedata] = useState([])

  var [firstname, setFirstname] = useState("")
  var [lastname, setLastname] = useState("")
  var [birthMonth, setBirthMonth] = useState("")
  var [birthDay, setbirthDay] = useState("")
  var [birthYear, setbirthYear] = useState("")
  var [email, setemail] = useState("")
  var [sex, setsex] = useState("")
  var [password, setpassword] = useState("")
  var [confPassword, setconfPassword] = useState("")
  var [bloodType, setbloodType] = useState("")
  var [heightCm, setheightCm] = useState("")
  var [weightKg, setweightKg] = useState("")
  var [diet, setdiet] = useState("")
  var [illnesses, setillnesses] = useState("")

  var [showError, SetShowError] = useState(false)
  var [errorText, SetErrorText] = useState("Required fields must be completed.")

  var dateDict = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  }
  // , lastname, birthMonth, birthDay, birthYear, email, sex, password, confpassword, bloodType, heightCm, weightKg, diet, illnesses = ""

  useEffect(() => {
    setContent(changeContent())
    setSidedata(changeProgress())
    // console.log(firstname)
  // eslint-disable-next-line
  }, [progressIndex]) 

  useEffect(() => {
    setContent(changeContent())
    // console.log(firstname)
    // console.log(birthMonth)
    // eslint-disable-next-line
  }, [firstname, lastname, birthMonth, birthDay, birthYear, email, sex, password, confPassword, bloodType, heightCm, weightKg, diet, illnesses, showError, errorText])
    
  function registerAccount() {
    var account = {
      firstname,
      lastname,
      birthMonth,
      birthDay,
      birthYear,
      email,
      sex,
      password,
      bloodType,
      heightCm,
      weightKg,
      diet,
      illnesses
    }
    console.log(account)
    window.location.href = "/login"
  }

  function checkPersonal(){
    if(firstname === "" || lastname === "" || birthMonth === "" || birthDay === "" || birthYear === "" || email === "" || sex === "")
    {
      SetErrorText("Required fields must be completed.")
      SetShowError(true)
    } else {
      setProgressIndex(2)
      SetShowError(false)
    }
  }

  function checkSecurity(){
    if((password === "" || confPassword === "")){
      SetErrorText("Required fields must be completed.")
      SetShowError(true)
    } else if (password !== confPassword) {
      SetErrorText("Passwords do not match.")
      SetShowError(true)
    }
    else {
      setProgressIndex(3)
      SetShowError(false)
    }
  }

  function checkMedical(){
    if(bloodType === "" || weightKg === "" || heightCm === "")
    {
      SetErrorText("Required fields must be completed.")
      SetShowError(true)
    } else {
      setProgressIndex(4)
      SetShowError(false)
    }
  }

  function changeProgress() {
    switch(progressIndex) {  
      case 2:
        return(
          [
            {
              title: 'Personal Details',
              desc: 'Provide your name, age, and email',
              progress: 'done',
            },
            {
                title: 'Security',
                desc: 'Enter in a secure password to protect your account',
                progress: 'inprogress'
            },
            {
                title: 'Medical Information',
                desc: 'Input your medical information to be used by your doctors',
                progress: 'notdone'
            },
            {
              title: 'Confirm Account Details',
              desc: 'Confirm account details to complete registration process',
              progress: 'notdone'
            }
          ]
        )
      case 3:
        return(
          [
            {
              title: 'Personal Details',
              desc: 'Provide your name, age, and email',
              progress: 'done',
            },
            {
                title: 'Security',
                desc: 'Enter in a secure password to protect your account',
                progress: 'done'
            },
            {
                title: 'Medical Information',
                desc: 'Input your medical information to be used by your doctors',
                progress: 'inprogress'
            },
            {
              title: 'Confirm Account Details',
              desc: 'Confirm account details to complete registration process',
              progress: 'notdone'
            }
          ]
        )
      case 4:
        return(
          [
            {
              title: 'Personal Details',
              desc: 'Provide your name, age, and email',
              progress: 'done',
            },
            {
                title: 'Security',
                desc: 'Enter in a secure password to protect your account',
                progress: 'done'
            },
            {
                title: 'Medical Information',
                desc: 'Input your medical information to be used by your doctors',
                progress: 'done'
            },
            {
              title: 'Confirm Account Details',
              desc: 'Confirm account details to complete registration process',
              progress: 'inprogress'
            }
          ]
        )
      default:
        return(
          [
            {
                title: 'Personal Details',
                desc: 'Provide your name, age, and email',
                progress: 'inprogress',
            },
            {
                title: 'Security',
                desc: 'Enter in a secure password to protect your account',
                progress: 'notdone'
            },
            {
                title: 'Medical Information',
                desc: 'Input your medical information to be used by your doctors',
                progress: 'notdone'
            },
            {
              title: 'Confirm Account Details',
              desc: 'Confirm account details to complete registration process',
              progress: 'notdone'
            }
          ]
        )
    }
  }

  function changeContent() {
    switch(progressIndex) {
      case 1:
        return (
          <div class="container ps-5 min-vh-100 d-flex align-items-center">
            <div>
              <h1>Personal Details</h1>
              <p>Provide your name, age, and email. <span className="text-danger">Required fields*</span></p>
              <div className="row">
                <div className="col-6">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={firstname} onChange={event => setFirstname(event.target.value)}/>
                    <label for="floatingInput">First Name<span className="text-danger">*</span></label>
                  </div>
                </div>
                <div className="col-6">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={lastname} onChange={event => setLastname(event.target.value)}/>
                    <label for="floatingInput">Last Name<span className="text-danger">*</span></label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div class="form-floating mb-3">
                    <select class="form-select" id="validationDefault04" required value={birthMonth} onChange={event => setBirthMonth(event.target.value)}>
                      <option selected disabled value="">Choose...</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                    <label for="floatingInput">Birth Month<span className="text-danger">*</span></label>
                  </div>
                </div>
                <div className="col-3">
                  <div className="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={birthDay} onChange={event => setbirthDay(event.target.value)}/>
                    <label for="floatingInput">Birth Day<span className="text-danger">*</span></label>
                  </div>
                </div>
                <div className="col-3">
                  <div className="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={birthYear} onChange={event => setbirthYear(event.target.value)}/>
                    <label for="floatingInput">Birth Year<span className="text-danger">*</span></label>
                  </div>
                </div>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={event => setemail(event.target.value)}/>
                <label for="floatingInput">Email Address<span className="text-danger">*</span></label>
              </div>
              <div class="form-floating mb-3">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example" value={sex} onChange={event => setsex(event.target.value)}>
                  <option selected value="">Choose Sex</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
                <label for="floatingSelect">Sex<span className="text-danger">*</span></label>
              </div>
              {/* <button type="button" class="btn btn-primary" onClick={() => {this.setState({progressIndex: 2}, () => this.componentDidMount())}}>NEXT</button> */}
              <div class={showError ? "alert alert-danger" : "alert alert-danger d-none"} role="alert">
                {errorText}
              </div>
              <button type="button" class="btn btn-primary" onClick={() => {checkPersonal()}}>NEXT</button>
            </div>
          </div>
        )
      case 2:
        return (
          <div class="container ps-5 min-vh-100 d-flex align-items-center">
            <div class="me-5 mt-5">
              <h1>Security</h1>
              <p>Input an 8 character password. <span className="text-danger">Required fields*</span></p>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com" value={password} onChange={event => setpassword(event.target.value)}/>
                <label for="floatingInput">Password<span className="text-danger">*</span></label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com" value={confPassword} onChange={event => setconfPassword(event.target.value)}/>
                <label for="floatingInput">Confirm Password<span className="text-danger">*</span></label>
              </div>

              <div class={showError ? "alert alert-danger" : "alert alert-danger d-none"} role="alert">
                {errorText}
              </div>
              <button type="button" class="btn btn-secondary me-3" onClick={() => {setProgressIndex(1)}}>BACK</button>
              <button type="button" class="btn btn-primary" onClick={() => {checkSecurity()}}>NEXT</button>
            </div>
          </div>
        )
        case 3:
          return (
            <div class="container ps-5 min-vh-100 d-flex align-items-center">
              <div class="me-5 mt-5">
                <h1>Medical Information</h1>
                <p>Input relevant medical information to assit your doctors. <span className="text-danger">Required fields*</span></p>
                <div className="row">
                  <div className="col-4">
                    <div class="form-floating">
                      <select class="form-select" id="floatingSelect" aria-label="Floating label select example" value={bloodType} onChange={event => setbloodType(event.target.value)}>
                        <option selected value="">Choose Blood Type</option>
                        <option value="ap">A+</option>
                        <option value="am">A-</option>
                        <option value="bp">B+</option>
                        <option value="bm">B-</option>
                        <option value="op">O+</option>
                        <option value="om">O-</option>
                        <option value="abp">AB+</option>
                        <option value="abm">AB-</option>
                      </select>
                      <label for="floatingSelect">Blood Type<span className="text-danger">*</span></label>
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={heightCm} onChange={event => setheightCm(event.target.value)}/>
                      <label for="floatingInput">Height (in cm)<span className="text-danger">*</span></label>
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={weightKg} onChange={event => setweightKg(event.target.value)}/>
                      <label for="floatingInput">Weight (in kg)<span className="text-danger">*</span></label>
                    </div>
                  </div>
                </div>
                <div class="form-floating mb-3">
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: "100px"}} value={diet} onChange={event => setdiet(event.target.value)}></textarea>
                  <label for="floatingTextarea">Dietary Restrictions</label>
                </div>
                <div class="form-floating mb-3">
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: "100px"}} value={illnesses} onChange={event => setillnesses(event.target.value)}></textarea>
                  <label for="floatingTextarea">Known Illnesses</label>
                </div>

                <div class={showError ? "alert alert-danger" : "alert alert-danger d-none"} role="alert">
                  {errorText}
                </div>
                <button type="button" class="btn btn-secondary me-3" onClick={() => {setProgressIndex(2)}}>BACK</button>
                <button type="button" class="btn btn-primary" onClick={() => {checkMedical()}}>NEXT</button>
              </div>
            </div>
          )
          case 4:
            return (
              <div class="container ps-5 min-vh-100 d-flex align-items-center">
                <div class="me-5 mt-5">
                  <h1>Account Details</h1>
                  <p>Confirm account details to complete registration process</p>
                  <table class='table table-bordered'>
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <td>{firstname} {lastname}</td>
                      </tr>
                      <tr>
                        <th>Birthdate</th>
                        <td>{dateDict[birthMonth]} {birthDay}, {birthYear}</td>
                      </tr>
                      <tr>
                        <th>Sex</th>
                        <td>{sex === 1 ? "Male" : "Female"}</td>
                      </tr>
                      <tr>
                        <th>Email Address</th>
                        <td>{email}</td>
                      </tr>
                      <tr>
                        <th>Blood Type</th>
                        <td>{bloodType}</td>
                      </tr>
                      <tr>
                        <th>Weight in kg</th>
                        <td>{weightKg}</td>
                      </tr>
                      <tr>
                        <th>Height in cm</th>
                        <td>{heightCm}</td>
                      </tr>
                      <tr>
                        <th>Dietary Restrictions</th>
                        <td>{diet}</td>
                      </tr>
                      <tr>
                        <th>Known Illnesses</th>
                        <td>{illnesses}</td>
                      </tr>
                    </tbody>
                  </table>
                  <button type="button" class="btn btn-secondary me-3" onClick={() => {setProgressIndex(3)}}>BACK</button>
                  <button type="button" class="btn btn-primary" onClick={() => registerAccount()}>REGISTER ACCOUNT</button>
                </div>
              </div>
            )
      default:
        break
    }
  }

  return(
    <>
      <div className="row min-vh-100 p-0 m-0">
        <div className='min-vh-100 col-3 p-5' style={{backgroundColor: '#3B4AD0', color: 'white'}}>
          <div className='w-100 d-flex mb-4' onClick={() => {window.location.href = "/"}}>
              <img className='me-3' src={logo} alt='logo' width='75px'/>
              <span style={{fontSize: '40px', fontWeight: 'bolder'}}>LUNA</span>
          </div>
          <SideBar sidedata={sidedata} />
        </div>
        <div className="col-9 m-0 p-0">
          {content}
        </div>
      </div>
    </>
  )
}

export default Register