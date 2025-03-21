import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
