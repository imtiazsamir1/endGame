import logo from "./logo.svg";
import "./App.css";
import Navber from "./Pages/Navber/Navber";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
