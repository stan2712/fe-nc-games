import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import SingleReview from "./components/SingleReview"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category/:category" element={<Category />} />
          <Route path="reviews/:review_id" element={<SingleReview/>} />
          <Route path="reviews/:review_id/comments" element={<SingleReview/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
