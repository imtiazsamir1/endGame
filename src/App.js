import logo from "./logo.svg";
import "./App.css";
import Navber from "./Pages/Navber/Navber";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import { Routes, Route, Link } from "react-router-dom";
import ToDo from "./Pages/ToDo/ToDo";
import CompletedTasks from "./Pages/CompletedTasks/CompletedTasks";
import Calander from "./Pages/Calander/Calander";
import Task from "./Pages/Task/Task";

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/compleatedTasks"
          element={<CompletedTasks></CompletedTasks>}
        ></Route>
        <Route path="/toDo" element={<ToDo></ToDo>}></Route>
        <Route path="/calander" element={<Calander></Calander>}></Route>
        <Route path="/task" element={<Task></Task>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
