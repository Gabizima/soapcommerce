import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from './pages/home.jsx'
import Cart from './pages/cart.jsx'
// Importation de React, Bootstrap et des icônes nécessaires depuis react-icons
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        
      </Router>
    </>
  )
}

export default App
