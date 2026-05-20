import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import IndexPage from './page/IndexPage.jsx';
import Explore from './page/Explore.jsx';
import Brand from './page/Brand.jsx';
import FreeDelivery from './page/FreeDelivery.jsx';
import Categroy from './page/Categroy.jsx';
import Bag from './page/Bag.jsx';
import Notification from './page/NotificationPage.jsx';
import PhkaMainPage from './page/PkhaMainPage.jsx';
import ShopAll from './page/ShopAll.jsx';
import Skin1004MainPage from './page/Skin1004MainPage.jsx';
import WeyoungMainPage from './page/WeyoungMainPage.jsx';
import LoginPage from './page/LoginPage.jsx';
import RegisterPage from './page/RegisterPage.jsx';
import Navbar from './components/Navbar.jsx';
import FooterBar from './components/FooterBar.jsx';

function Layout() {
  const location = useLocation();

  // Normalize path to lowercase to prevent case-mismatch bugs
  const path = location.pathname.toLowerCase();

  // Using an array for "hide" logic is cleaner and easier to scale
  const hideLayoutPaths = ['/loginpage', '/registerpage'];
  const shouldHide = hideLayoutPaths.includes(path);

  return (
    <>
      {!shouldHide && <Navbar />}

      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/category" element={<Categroy />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/freedelivery" element={<FreeDelivery />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/phka" element={<PhkaMainPage />} />
        <Route path="/shopall" element={<ShopAll />} />
        <Route path="/skin1004" element={<Skin1004MainPage />} />
        <Route path="/weyoung" element={<WeyoungMainPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
      </Routes>

      {!shouldHide && <FooterBar />}
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}

export default App;
