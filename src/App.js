import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./components/Category";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category/:category" element={<Category />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
