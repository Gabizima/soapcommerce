import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Newsletter.css'; // Importez votre fichier CSS ici

function Newsletter() {
  return (
    <Carousel>
      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block"
          src="/newlsetter/image1.jpg"
          alt="Première slide"
        />
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block"
          src="/newlsetter/image2.jpg"
          alt="Deuxième slide"
        />
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block"
          src="/newlsetter/image3.jpg"
          alt="Troisième slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Newsletter;
