import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./styles/global.scss";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Routes>
          <Route path={"/portfolio"} element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
