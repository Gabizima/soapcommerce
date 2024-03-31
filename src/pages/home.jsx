import Navbar from "../components/navbar/navbar.jsx";
import FreeDelivery from "../components/freedelivery/freedelivery.jsx";
import Bannerpromo from "../components/bannerpromo/bannerpromo.jsx";
import ProductCard from "../components/productcard/productcard.jsx";
import Newsletter from "../components/newsletter/newsletter.jsx";
import Footer from "../components/footer/footer.jsx";

function Home() {
  return (
    <>
      <FreeDelivery />
      <Navbar />
      <Bannerpromo /> 

      <div className="container" style={{marginTop: " 100px", marginBottom: "200px"}}>
        <h2 className="mb-4" style={{textAlign: "center"}}>Nos meilleurs ventes</h2>

        <div className="container" style={{marginTop: "100px"}}>
        <div className="row">
        <ProductCard filterCategory="1" />
        </div>
        </div>



      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
