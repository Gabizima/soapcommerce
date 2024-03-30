import Navbar from "../components/navbar/navbar.jsx";
import FreeDelivery from "../components/freedelivery/freedelivery.jsx";
import Newsletter from "../components/newsletter/newsletter.jsx";

function home() {
  return (
    <>
      <FreeDelivery />
      <Navbar />
      <Newsletter />
      <div className="Special" style={{ margin: "6em" }}>
        <h2 style={{ marginBottom: "2em" }}>Offre spéciales</h2>
        <div style={{ display: "flex" }}>
          <img src="/other/special.webp" alt="speical-offer" />
          <p style={{ marginLeft: "2em" }}>
            Découvrez l'excellence de notre Savon de Marseille, spécialement
            conçu pour prendre soin de votre peau sensible. Formulé à partir
            d'ingrédients naturels et respectueux de l'environnement, notre
            savon est le choix idéal pour ceux qui recherchent une solution
            douce mais efficace pour leur routine de nettoyage quotidienne.
          </p>
        </div>
      </div>
    </>
  );
}

export default home;
