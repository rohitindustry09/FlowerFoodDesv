export default function HamburgerCrossNav({ handleHamburger, hambugerClick, transformTriggered, hamburgerTransTrigg }) {
  return (
    <div className="hamburger-parent-outer" onClick={handleHamburger} 
      style={{
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
  );
}