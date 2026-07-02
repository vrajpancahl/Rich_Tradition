import './App.css';
import LandingPage from './pages/landing_page';
import ErrorPage from './pages/ErrorPage';
import AboutUs from './pages/AboutUs';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Web_image_gallary from './pages/Web_image_gallary';
import TermsAndCondition from './pages/TermsAndCondition';

function App() {
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <LandingPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/landing_page",
      element: <LandingPage />
    },
    {
      path: "/about_us",
      element: <AboutUs />
    },
      {
        path: "/WebImageGallary/:category_id/:category_title",
        element: <Web_image_gallary />,
        errorElement: <ErrorPage />
      },
      {
      path: "/termsAndConditions",
      element: <TermsAndCondition />
    },
  
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
  