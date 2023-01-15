import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Edit from "./pages/Edit";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Container fluid style={{ padding: "2rem", maxWidth: "600px", width: "90vw" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/new" element={<Edit />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
