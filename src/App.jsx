import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Register from "./Register";
import Home from "./Home";

import "./styles/styles.css";

export default function App() {
  return (
    <>
      <Link to="/bbs">Home</Link>
      <Link to="/register">Register</Link>
     
      <Routes>
        <Route path="/bbs" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
      
    </>
  );
}
