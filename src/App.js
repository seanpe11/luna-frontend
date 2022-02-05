import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from './views/Home.js';
import About from './views/About.js';
import FindMe from './views/FindMe.js';
import Recommendations from './views/Recommendations.js';
import Register from './views/Register';
import Login from './views/Login';
import Doctors from './views/Doctors';
import NotFound from './views/NotFound';
// import { useSelector } from 'react-redux'

function RequiredAuth() {
  const auth = parseInt(sessionStorage.getItem("auth"))
  console.log(auth)
  if (!auth) {
    console.log("true")
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

function App() {
  return (
    <>
      <div className="App min-vh-100 d-none d-lg-block">
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route element={<RequiredAuth />}>
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/findMe" element={<FindMe/>} />
            <Route path="/recommendations" element={<Recommendations/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="d-flex d-lg-none mh-100 align-items-center">
        <div className="container">
          <h1>Error!</h1>
          <span className="text-danger fw-bold">Unsupported resolution.</span> Please make the browser screen bigger to use the app or use a device with a bigger screen.
        </div>
      </div>
    </>

  );
}

export default App;
