import '../css/Header.css';
import logo from '../images/moon-full-moon-icon.png'
import dp from '../images/profile_pic.png'

function Header({active}) {
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
            <a class="float-end me-3 nav-link text-black" href="/">
              Jane Doe
              <img className='ms-3 rounded-pill' src={dp} alt="profile pic" style={{width: '50px'}}/>
            </a>
        </div>

        <div class="">
            
        </div>
    </nav>
}

export default Header;