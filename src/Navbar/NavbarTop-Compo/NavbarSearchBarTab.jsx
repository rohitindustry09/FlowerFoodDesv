import imageBg from '/peakpx-navbar-bg.jpg'
export default function NavbarSearchBarTab({ flowerClick }) {
  return (
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
  );
}