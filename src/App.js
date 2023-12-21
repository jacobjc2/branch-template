import './App.css';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/about/AboutPage';
import { ContactPage } from './pages/contact/ContactPage';
import { IndustriesPage } from './pages/industries/IndustriesPage';
import { ManufacturersPage } from './pages/manufacturers/ManufacturersPage';
import { ProductsPage } from './pages/products/ProductsPage';
import { ServicesPage } from './pages/services/ServicesPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='products' element={<ProductsPage/>}/>
            <Route path='services' element={<ServicesPage/>}/>
            <Route path='industries' element={<IndustriesPage/>}/>
            <Route path='manufacturers' element={<ManufacturersPage/>}/>
            <Route path='contact' element={<ContactPage/>}/>
            <Route path='about' element={<AboutPage/>}/>
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
