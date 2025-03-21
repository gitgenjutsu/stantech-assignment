// import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col">
        <nav className="w-full bg-gray-200 p-4 flex justify-center gap-4 shadow-md">
          <Link to="/" className="text-blue-500">
            Home
          </Link>
          <Link to="/about" className="text-blue-500">
            About
          </Link>
        </nav>
        <div className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
