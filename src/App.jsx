import { Routes, Route } from "react-router";
import Project from "./Pages/Project";
import Chat from "./Pages/Chat";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <section>
      <div className="wrapper">
        <a href="/"><img className="logo-pop" src="/assets/logo.png" alt="Anh Thu Logo" /></a>
          <Nav />
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
 
    </section>
  );
}
export default App;
