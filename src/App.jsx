import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavbarTab from './Navbar/NavbarTab.jsx';

import HomeTab from './Home-Compo/HomeTab.jsx';

function App() {
  return (
    <>
      <NavbarTab />
      <Outlet />
    </>
  )
}

export default App
