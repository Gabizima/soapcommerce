import React, { useState } from 'react';
import './connexion.css'; // Réutilisez le même fichier CSS pour la cohérence
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import FreeDelivery from '../../components/freedelivery/freedelivery';
import { supabase } from '../../supabaseConfig';

function Inscription() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici, intégrez la logique pour inscrire l'utilisateur
    console.log("Inscription de l'utilisateur avec", nom, prenom, email, password);
    // verifier que les deux adresses email sont identiques
    if (email !== confirmEmail) {
      alert("Les adresses e-mail ne correspondent pas");
      return;
    }
    // Verifier que le mot de passe contient au moins 8 caractères
    if (password.length < 8) {
      alert("Le mot de passe doit contenir au moins 8 caractères");
      return;
    }
    // Enregistrement de l'utilisateur
    if (nom && prenom && email && password && email === confirmEmail && password.length >= 8) {
      // envoyer les données à la base de données supabase
      console.log("Envoi des données à la base de données");
      checkUser(email);
      
    }
  };

  async function checkUser(email) {
    const { data, error } = await supabase
      .from('customers')
      .select('email')
      .eq('email', email);
    if (error) {
      console.log("Erreur lors de la recherche de l'utilisateur", error.message);
      alert("Erreur lors de la recherche de l'utilisateur");
    }
    if (data.length > 0) {
      alert("Un utilisateur avec cette adresse e-mail existe déjà");
      return false;
    }
    registerUser(nom, prenom, email, password).then(() => {
      // Rediriger l'utilisateur vers la page de connexion
      window.location.href = "/authentification/connexion";
    });
  }
  
  async function registerUser(nom, prenom, email, password) {

    try {
      const  {data, error} = await supabase
      .from('customers')
      .insert([
        { nom: nom, prenom: prenom, email: email, mot_de_passe: password },
      ]).select();
      //envoyer dans la console un message de confirmation
      console.log("Inscription réussie", data);

    }
    catch (error) {
      console.log("Erreur lors de l'inscription", error.message);
      alert("Erreur lors de l'inscription");
    }

     
  }

  return (
    <>
    <FreeDelivery />
    <Navbar />
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Inscription</h2>
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            className="form-control login-input"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Prénom</label>
          <input
            type="text"
            className="form-control login-input"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </div>
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
          <label htmlFor="confirmEmail">Confirmer adresse e-mail</label>
          <input
            type="email"
            className="form-control login-input"
            id="confirmEmail"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
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
        <button type="submit" className="btnLogin">S'inscrire</button>
      </form>
    </div>
    <Footer />
    </>
  );
}

export default Inscription;
