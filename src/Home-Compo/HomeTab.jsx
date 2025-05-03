import imageLotus2nd from '/Flowers/lotus_2nd.jpg'
import VisitSalesTab from './VisitSalesTab.jsx';

import './HomeTab.css'
export default function HomeTab() {
  return (
    <>
     <div className="">
       <h2 className="headings"> Most Loved </h2>
       <div className="image-outer-holder">
         <div className="image-outer">
           <img src={imageLotus2nd} />
         </div>
         <div className="image-outer">
           <img src={imageLotus2nd} />
         </div>
         <div className="image-outer">
           <img src={imageLotus2nd} />
         </div>
         <div className="image-outer">
           <img src={imageLotus2nd} />
         </div>
         <div className="image-outer">
           <img src={imageLotus2nd} />
         </div>
       </div>
       
       <h2 className="headings"> Demanded Sales Live </h2>
       <VisitSalesTab setImage={imageLotus2nd} setDiscount="45"/>
       <VisitSalesTab setImage={imageLotus2nd} setDiscount="36"/>
       <VisitSalesTab setImage={imageLotus2nd} setDiscount="57"/>
        
     </div>
    </>
  );
}