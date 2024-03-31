import React from 'react';
import { Carousel } from 'react-bootstrap';
import './bannerpromo.css'; // Importez votre fichier CSS ici

function Bannerpromo() {
  return (
    <Carousel>
      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block"
          src="/newlsetter/image1.png "
          alt="Première slide"
        />
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block"
          src="/newlsetter/image2.png"
          alt="Deuxième slide"
        />
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block"
          src="/newlsetter/image3.png"
          alt="Troisième slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Bannerpromo;
