import React from 'react';
import './newsletter.css';

function Newsletter() {
  return (
    <div className="newsletter py-5">
        <div className="text-center">
            <h2 className="mb-4">Inscrivez-vous à notre newsletter</h2>
            <p>Recevez des offres exclusives et des conseils de soins de la peau directement dans votre boîte de réception.</p>
            <form className="newsletter-form mt-4 d-flex justify-content-center">
                <div className="input-group mb-3 w-50">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Entrez votre adresse e-mail"
                      aria-label="Adresse e-mail"
                    />
                    <div className="input-group-append">
                        <button className="btn" type="submit">S'inscrire</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Newsletter;
