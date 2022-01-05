import React from "react"
import SideBar from "../components/SideBar"

class Register extends React.Component {
  
  constructor(){
    super()
    this.state = {
      progressIndex: 1,
      content: "",
      sidedata: [],
    }
  }

  componentDidMount() {
    this.setState({content: this.changeContent()})
    this.setState({sidedata: this.changeProgress()})
  }

  changeProgress() {
    switch(this.state.progressIndex) {  
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

  changeContent() {
    switch(this.state.progressIndex) {
      case 1:
        return (
          <div class="container ps-5 h-100 d-flex align-items-center">
            <div class="me-5 mt-5">
              <h1>Personal Details</h1>
              <p>Provide your name, age, and email</p>
              <div className="row">
                <div className="col-6">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">First Name</label>
                  </div>
                </div>
                <div className="col-6">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Last Name</label>
                  </div>
                </div>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Birthdate</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email Address</label>
              </div>
              <button type="button" class="btn btn-primary" onClick={() => {this.setState({progressIndex: 2}, () => this.componentDidMount())}}>NEXT</button>
            </div>
          </div>
        )
      case 2:
        return (
          <div class="container ps-5 h-100 d-flex align-items-center">
            <div class="me-5 mt-5">
              <h1>Security</h1>
              <p>Input an 8 character password</p>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Password</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Confirm Password</label>
              </div>
              <button type="button" class="btn btn-primary" onClick={() => {this.setState({progressIndex: 3}, () => this.componentDidMount())}}>NEXT</button>
            </div>
          </div>
        )
        case 3:
          return (
            <div class="container ps-5 h-100 d-flex align-items-center">
              <div class="me-5 mt-5">
                <h1>Medical Information</h1>
                <p>Input relevant medical information to assit your doctors</p>
                <div className="row">
                  <div className="col-4">
                    <div class="form-floating">
                      <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected="" value="1">A</option>
                        <option value="2">B</option>
                        <option value="3">O</option>
                      </select>
                      <label for="floatingSelect">Blood Type</label>
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                      <label for="floatingInput">Height (in cm)</label>
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                      <label for="floatingInput">Weight (in kg)</label>
                    </div>
                  </div>
                </div>
                <div class="form-floating mb-3">
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: "100px"}}></textarea>
                  <label for="floatingTextarea">Dietary Restrictions</label>
                </div>
                <div class="form-floating mb-3">
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: "100px"}}></textarea>
                  <label for="floatingTextarea">Known Illnesses</label>
                </div>
                <button type="button" class="btn btn-primary" onClick={() => {this.setState({progressIndex: 4}, () => this.componentDidMount())}}>NEXT</button>
              </div>
            </div>
          )
          case 4:
            return (
              <div class="container ps-5 h-100 d-flex align-items-center">
                <div class="me-5 mt-5">
                  <h1>Account Details</h1>
                  <p>Confirm account details to complete registration process</p>
                  <button type="button" class="btn btn-primary">REGISTER ACCOUNT</button>
                </div>
              </div>
            )
      default:
        break
    }
  }

  render() {
    return(
      <>
        <div className="row h-100 p-0 m-0">
          <SideBar sidedata={this.state.sidedata} />
          <div className="col-9 m-0 p-0">
            {this.state.content}
          </div>
        </div>
      </>
    )
  }
}

export default Register