import "./App.css";
import Home from "./components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
