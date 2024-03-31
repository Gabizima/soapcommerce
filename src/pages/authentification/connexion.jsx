import React, { useState } from 'react';
import './connexion.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import FreeDelivery from '../../components/freedelivery/freedelivery';
function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici, intégrez la logique pour connecter l'utilisateur
    console.log("Connexion de l'utilisateur avec", email, password);
  };

  return (
    <>
    <FreeDelivery />
    <Navbar />
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            className="form-control login-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btnLogin">Se connecter</button>
        <div className="login-links">
          <a href="/authentification/inscription">Créer un compte</a> | <a href="#!">Mot de passe oublié?</a>
        </div>
      </form>
    </div>
    <Footer />
    </>
    
  );
}

export default Connexion;
