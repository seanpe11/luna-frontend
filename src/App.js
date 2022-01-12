import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home.js';
import About from './views/About.js';
import FindMe from './views/FindMe.js';
import Recommendations from './views/Recommendations.js';
import Register from './views/Register';
import Login from './views/Login';
import Doctors from './views/Doctors';

function App() {
  return (
    <>
      <div className="App h-100 d-none d-lg-block">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/findMe" element={<FindMe/>} />
          <Route path="/recommendations" element={<Recommendations/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
      </div>
      <div className="d-flex d-lg-none h-100 align-items-center">
        <div className="container">
          <h1>Error!</h1>
          <span className="text-danger fw-bold">Unsupported resolution.</span> Please make the browser screen bigger to use the app or use a device with a bigger screen.
        </div>
      </div>
    </>

  );
}

export default App;
