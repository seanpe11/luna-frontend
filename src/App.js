import './luna.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home.js';
import About from './views/About.js';
import FindMe from './views/FindMe.js';
import Recommendations from './views/Recommendations.js';

function App() {
  return (
    <div className="App h-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/findMe" element={<FindMe/>} />
        <Route path="/recommendations" element={<Recommendations/>} />
      </Routes>
    </div>
  );
}

export default App;
