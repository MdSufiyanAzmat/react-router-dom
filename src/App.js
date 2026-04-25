import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo">
              <Link to="/">MyApp</Link>
            </div>
            <div className="nav-links">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                end
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2024 MyApp. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;