import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SubmitPost from "./pages/SubmitPost.jsx";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/submit" element={<SubmitPost />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;