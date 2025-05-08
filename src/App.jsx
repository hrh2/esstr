import Home from "./components/Home.jsx";
import BlogPostWithComments from "./components/Blogs.jsx";
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Landing from "./components/Landing.jsx";


function App() {
  return (
      <div className={`w-[100vw] relative h-[100vh] overflow-x-hidden overflow-y-scroll p-0 transition duration-200`}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Landing/>} />
              <Route path="real" element={<BlogPostWithComments />} />
            </Route>
          </Routes>
        </Router>
      </div>
  )
}

export default App
