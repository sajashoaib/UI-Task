import './App.css';
import Offers from './components/Offers';
import AboutUsPage from './pages/AboutUsPage';
import BlogsPage from './pages/BlogsPage';
import CookingPage from './pages/CookingPage';
import FooterPage from './pages/FooterPage';
import LandingPage from './pages/LandingPage';
import MenuaPage from './pages/MenuaPage';
import NumbersPage from './pages/NumbersPage';
import ReviewePage from './pages/ReviewePage';
import SocialMediaPage from './pages/SocialMediaPage';
import SpecialPage from './pages/SpecialPage';
import SubscribePage from './pages/SubscribePage';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <AboutUsPage/>
      <SpecialPage/>
      <MenuaPage/>
      <Offers/>
      <CookingPage/>
      <NumbersPage/>
      <ReviewePage/>
      <BlogsPage/>
      <SocialMediaPage/>
      <SubscribePage/>
      <FooterPage/>
    </div>
  );
}

export default App;
