import { Dropdown } from 'react-bootstrap';
import { forwardRef } from 'react';
import '../css/Header.css';
import logo from '../images/moon-full-moon-icon.png'
import dp from '../images/profile_pic.png'

function Header({active}) {
  const {firstName, lastName} = JSON.parse(sessionStorage.getItem("userData"))

  const customToggle = forwardRef(({ children, onClick }, ref) => (
    <button
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      class="btn btn-link float-end me-3 nav-link text-black"
    >
      {children}
    </button>
  ));

  function logOut() {
    sessionStorage.setItem("auth", "")
    sessionStorage.setItem("userData", "")
    window.location.replace('/')
  }
  

    return <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand ms-3" href="/">
              <img className='me-3' src={logo} alt="logo" style={{width: '50px'}}/>
              LUNA
            </a>
            <ul class="navbar-nav mx-auto mt-2 mt-lg-0">
              <li class="nav-item active mx-3">
                  <a class="nav-link" href="/">Home</a>
              </li>
              {/* <li class="nav-item">
                  <a class="nav-link" href="/about">About</a>
              </li> */}
              <li class="nav-item mx-3">
                  <a class="nav-link" href="/findMe">Find Me a Doctor</a>
              </li>
              {/* <li class="nav-item">
                  <a class="nav-link" href="/login">Login</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/register">Register</a>
              </li> */}
              <li class="nav-item mx-3">
                  <a class="nav-link" href="/doctors">Doctors</a>
              </li>
            </ul>
            <Dropdown>
              <Dropdown.Toggle as={customToggle}>
                {firstName} {lastName}
                <img className='ms-3 rounded-pill' src={dp} alt="profile pic" style={{width: '50px'}}/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => logOut()}>Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>

        <div class="">
            
        </div>
    </nav>
}

export default Header;