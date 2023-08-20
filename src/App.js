import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetection from "./pages/ItemDetection";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/face-detect-page" element={<ItemDetection />} />
      </Routes>
    </div>
  );
}

export default App;
