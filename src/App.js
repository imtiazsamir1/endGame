import logo from "./logo.svg";
import "./App.css";
import Navber from "./Pages/Navber/Navber";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import { Routes, Route, Link } from "react-router-dom";
import ToDo from "./Pages/ToDo/ToDo";

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/toDo" element={<ToDo></ToDo>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
