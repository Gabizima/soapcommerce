
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import "./navbar.css";
// Définition du composant fonctionnel Navbar
function Navbar() {
  return (
    // Utilisation de la classe navbar de Bootstrap pour le style de base
    <nav className="navbar navbar-expand-lg p-4 soap-nav">
      <div className="container">
        {/* // Lien vers la page d'accueil avec le logo ou le nom de la marque */}
        <a className="navbar-brand" href="/">SoapBuy</a>
        {/* // Bouton pour les petits écrans qui permet d'afficher ou de masquer les liens de navigation */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        {/* // Conteneur pour les éléments de la navbar qui peuvent être masqués sur les petits écrans */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* // Formulaire de recherche centré avec une mise en page flexible */}
          <form className="d-flex flex-grow-1 mx-4">
            <input className="form-control me-2 soap-search" type="search" placeholder="Recherchez des savons..." aria-label="Search" />
            <button className="btn btn-outline-success" type="submit"><FaSearch /></button>
          </form>
          {/* // Liens de navigation alignés à droite pour le compte utilisateur, les favoris et le panier */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/account"><FaUser /> Mon compte</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/favorites"><FaHeart /> Mes favoris</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart"><FaShoppingCart /> Mon panier</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
export default Navbar;
