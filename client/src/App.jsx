import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import About from "./pages/about";
import Root from "./pages/root";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path = "/" element = {<Root />} />
      <Route path = "/login" element = {<Login />} />
      <Route path = "/about" element = {<About />} />
    </Routes>
    </>
 );
}

export default App;