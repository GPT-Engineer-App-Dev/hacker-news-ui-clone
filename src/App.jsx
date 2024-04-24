import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SubmitPost from "./pages/SubmitPost.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/submit" element={<SubmitPost />} />
      </Routes>
    </Router>
  );
}

export default App;