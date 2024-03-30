// Importation de React
import React from 'react';
// Importation des styles CSS nécessaires (assurez-vous d'ajouter les styles correspondants dans vos fichiers CSS)
import './FreeDelivery.css'; 
import { useEffect } from 'react';


function FreeDelivery() {
    // use effect pour changer la text toutes les 10 secondes de " Profitez de la livraison gratuite pour toute commande de plus de 50€ 🚚" en "Utiliser le code FIRSTDELIVERY10 pour avoir moins 10%" puis faire une boucle
    useEffect(() => {
        const text = document.querySelector('.free-delivery-bar');
        let i = 0;
        const messages = [
            " Profitez de la livraison gratuite pour toute commande de plus de 50€ 🚚",
            "Utiliser le code FIRSTDELIVERY10 pour avoir moins 10%"
        ];
        setInterval(() => {
            text.textContent = messages[i];
            i = (i + 1) % messages.length;
        }, 10000);
    }
    , []);

  return (
    <div className="free-delivery-bar">
      Profitez de la livraison gratuite pour toute commande de plus de 50€ 🚚
    </div>
  );
}
export default FreeDelivery;
