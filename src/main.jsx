import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import HomeTab from './Home-Compo/HomeTab.jsx';
import ShowProductTab from './Show-Compo/ShowProductTab.jsx';
import CategoryGrid from './UserFirst-compo/CategoryGrid'
import AffiliateLinkManager from './Update-compo/AffiliateLinkManager'
import DemoCategory from './Demo/DemoCategory.jsx'
  
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <CategoryGrid /> },
     /* { path: 'category/:category', element: <HomeTab /> },*/
     /* { path: 'category/:category/show/:id', element: <ShowProductTab /> },*/
      { path: 'update-panel', element: <AffiliateLinkManager /> },
      { path: 'category/:category', element: <DemoCategory /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
