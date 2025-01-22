import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./styles/global.scss";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
