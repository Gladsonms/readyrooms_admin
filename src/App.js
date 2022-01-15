import "./App.css";
import { Login } from "./Components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Sigin } from "./Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sigin" element={<Sigin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
