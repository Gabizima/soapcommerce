import React from 'react';
import './footer.css'; // Assurez-vous que le chemin d'accès est correct

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>À propos</h6>
            <p className="text-justify">Savonnerie Douceur <i>LA PURETÉ NATURELLE</i> est un e-commerce dédié à offrir les meilleurs savons naturels pour votre peau. Nos produits sont fabriqués avec amour et respect de l'environnement.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Catégories</h6>
            <ul className="footer-links">
              <li><a href="#!">Savon de Marseille</a></li>
              <li><a href="#!">Savon à la Lavande</a></li>
              <li><a href="#!">Savon Exfoliant</a></li>
              <li><a href="#!">Savon Hydratant</a></li>
              <li><a href="#!">Savon pour Bébé</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Liens Rapides</h6>
            <ul className="footer-links">
              <li><a href="#!">À propos de Nous</a></li>
              <li><a href="#!">Contactez-nous</a></li>
              <li><a href="#!">Politique de Confidentialité</a></li>
              <li><a href="#!">Commandes et Retours</a></li>
              <li><a href="#!">Termes & Conditions</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p>&copy; 2024 Savonnerie Douceur. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
