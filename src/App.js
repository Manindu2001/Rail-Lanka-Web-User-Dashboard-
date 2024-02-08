import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login & SignUp & Reset/Login";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
