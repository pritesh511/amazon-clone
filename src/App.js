import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckOut from "./Pages/CheckOut/CheckOut";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/checkout" element={<CheckOut />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
