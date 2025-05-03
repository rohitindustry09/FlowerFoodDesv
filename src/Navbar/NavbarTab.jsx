import { useState, useEffect } from 'react';
import './NavbarTab.css'
import imageBg from '/peakpx-navbar-bg.jpg'
import NavbarSliderTab from './Navbar-Inside/NavbarSliderTab.jsx';

export default function NavbarTab() {
  const [flowerClick, setFlowerClick] = useState(true)
  const [foodClick, setFoodClick] = useState(false)
  const [hambugerClick, setHambugerClick] = useState(false);
  const [transformTriggered, setTransformTriggered] = useState(false);
  const [hamburgerTransTrigg, setHamburgerTransTrigg] = useState(false);

  
  const handleFlowerClick = (element)=> {
    setFlowerClick(true)
    setFoodClick(false)
  }
  const handleFoodsClick = ()=> {
    setFoodClick(true)
    setFlowerClick(false)
  }
  
  useEffect(()=>{
    if (flowerClick) {
     document.documentElement.style.setProperty('--elementsFontsColor', 'lightgreen');
     document.documentElement.style.setProperty('--elementsShadowColor', '#a658ff');
    }
    else if (foodClick) {
    document.documentElement.style.setProperty('--elementsFontsColor', '#ff533c');
    document.documentElement.style.setProperty('--elementsShadowColor', '#19ffda');
    }
  }, [flowerClick, foodClick]);
  
  useEffect(() => {
   document.body.classList.toggle('no-scroll', hambugerClick);
  }, [hambugerClick]);


  function handleHamburger() {
    setHambugerClick(!hambugerClick)
    setTimeout(() => {
      setTransformTriggered(!transformTriggered)
    }, 600);
    setTimeout(() => {
      setHamburgerTransTrigg(!hamburgerTransTrigg)
    }, 1100);
  }

  return (
    <>

      <div className="navbar-search-outer-parent" style={{
        background: `url(${imageBg})`, 
        filter: flowerClick ? 'hue-rotate(160deg) brightness(1.2) saturate(1.5)' 
        : 'hue-rotate(0deg) brightness(1.2) saturate(1.5)'
      }}>
        <div className="navbar-search-inner-parent">
          <label for=""> <i class="bi bi-search"></i> </label>
          <input type="text" placeholder="Search a Food or a Flower..." />
        </div>
      </div>
    
    <nav style={{
      position: 'sticky',
      top: '0',
      background: '#fff',
      zIndex: '100'
    }}>
      
      {/*navigation flower or food*/}
      <div className="navigation-tab-parent">
        <div className="flower-navigation-tab navigation-tabs">
          <button onClick={handleFlowerClick} style={{
            background: flowerClick ? '#29db00' : '#edffe8',
            color: flowerClick ? 'black' : '#1a1a1a',
          }}>
            <i>Flowers</i>
            <span className="icon">
              <i class="bi bi-flower3"></i>
            </span>
          </button>
        </div>
        <div className="food-navigation-tab navigation-tabs">
          <button onClick={handleFoodsClick} style={{
            background: foodClick ? '#ff533c' : '#ffe5e1',
            color: foodClick ? '#ffffff' : '#1a1a1a',
          }}>
            <i>Foods</i>
            <span className="icon">
              <i class="bi bi-cup-straw"></i>
            </span>
          </button>
        </div>
      </div>
    
    </nav>
  
  
    <div className="hamburger-parent-outer" onClick={handleHamburger} style={{
      boxShadow: hambugerClick ? '2px -2px 5px black' : '2px 2px 5px black',
      right: transformTriggered ? '86%' : '5%'
    }}>
      <div className="hamburger-parent"
      style={{
       transform: `translate(${hamburgerTransTrigg ? '-22px'
          : '22px'}, 2px)`,
      }}>

        <div> <i class="bi bi-list"></i> </div>
        <div> <i class="bi bi-x"></i> </div>
      </div>
    </div>
    
    <NavbarSliderTab 
      hambugerClick={hambugerClick} 
      transformTriggered={transformTriggered} 
    />
   
    </>
  );
}