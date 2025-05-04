import React,{ useState, useEffect } from "react";
import imageLotus2nd from '/Flowers/lotus_2nd.jpg'
import imageLotus from '/Flowers/lotus.jpg'
import "./ProductCards.css";

const products = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  mainImage: imageLotus2nd,
  extraImages: [
    imageLotus,
    imageLotus,
    imageLotus
  ],
  discount: Math.floor(Math.random() * 50) + 10,
  price: (Math.random() * 100 + 10).toFixed(2),
  details: "This is a sample product with great features.",
}));

const ProductCards = () => {
  
const [measureDistance, setMeasureDistance] = useState(70)
const [reactOnMeasure, setReactOnMeasure] = useState(false)

  useState(()=>{
    if (measureDistance == 70) {
      setTimeout(function() {
        setReactOnMeasure(true)
      }, 1000);
    } 
  }, [])
  return (
    <div className="cards-container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <div className="main-info">
            <div className="discount-badge">
              <span>
                {product.discount}% OFF
              </span>
              </div>
            <img src={product.mainImage} alt="Main" className="main-image" />
            <div className="price">${product.price}</div>
            <p className="details">{product.details}</p>
          </div>
          <div className="stair-images">
            {product.extraImages.map((src, index) => (
             <div className={`every-img-parent ${reactOnMeasure ? '' : 'starting-point'}`} style={{
               left: (reactOnMeasure ? (measureDistance / index) : 0),
               top: reactOnMeasure ? (measureDistance / index) : 0,
               boxShadow: reactOnMeasure ? '5px 5px 5px rgba(0,0,0,0.3)' : ''
             }}>
              <img
                key={index}
                src={src}
                alt={`Extra ${index + 1}`}
                className="extra-image"
              />
             </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
