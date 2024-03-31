import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from './pages/home.jsx'
import Cart from './pages/cart.jsx'
import Connexion from './pages/authentification/connexion.jsx'
import Inscription from './pages/authentification/inscription.jsx'
// Importation de React, Bootstrap et des icônes nécessaires depuis react-icons
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./supabaseConfig.js";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/authentification/connexion" element={<Connexion />} />
          <Route path="/authentification/inscription" element={<Inscription />} />
          
        </Routes>
        
      </Router>
    </>
  )
}

export default App
