import './ShowProductTab.css'
import imageLotus2nd from '/Flowers/lotus_2nd.jpg'
export default function ShowProductTab() {
  return (
    <>
      <div className="show-container">
        <div className="show-compo-image-container">
          <img src={imageLotus2nd} />
        </div>
        <div className="Product-details">
          <h2> Product Name 7</h2>
          <span> This will let you visually see which element is overflowing the screen. </span>
          <div className="price-ratings-parent">
            <div className="prices"> ₹ 564 </div>
            <div className="ratings"> 4.5 <i class="bi bi-stars"></i></div>
          </div>
        </div>
      </div>
      
      <div className="navigate-to-platforms">
        <div className="flipkart-btn btn"> 
          <button> ₹376 Flipkart </button>
        </div>
        <div className="amazon-btn btn"> 
          <button> ₹466 Amazon </button>
        </div>
      </div>
    </>
  );
}