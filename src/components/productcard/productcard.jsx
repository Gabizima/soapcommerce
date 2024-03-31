import { useState, useEffect } from "react";
import "./productcard.css"; // Vérifiez le chemin
import { supabase } from "../../supabaseConfig.js"; // Vérifiez le chemin

function ProductCard({ filterCategory  }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [filterCategory]); // Ajout de filterCategory comme dépendance d'effet

  async function fetchProducts() {
    let { data: products, error } = await supabase
  .from("products")
  .select("*")
  .eq('categorie_id', filterCategory); // Assurez-vous que filterCategory est bien un nombre

    if (error) {
      console.error("Error fetching products", error);
    } else {
      setProducts(products);
      console.log(products); // Console log pour débogage
    }
  }

  return (
    <div className="container my-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-4 col-md-6 col-12 mb-4" key={product.id}>
            <div className="product-card card h-100">
              <img src={product.image} className="card-img-top" alt={product.Nom} />
              <div className="card-body">
                <h5 className="card-title">{product.Nom}</h5>
                <p className="card-text">{product.Description}</p>
              </div>
              <div className="card-footer bg-transparent border-0 d-flex justify-content-between align-items-center">
                <strong style={{ fontSize: "1.25rem" }}>{product.Prix} €</strong>
                <button className="btn btn-outline-dark">Ajouter au panier</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
