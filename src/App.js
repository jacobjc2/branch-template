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
import { ProductOnePage } from './pages/products/ProductLine/ProductOnePage';
import { ProductTwoPage } from './pages/products/ProductLine/ProductTwoPage';
import { ServiceOnePage } from './pages/services/ServiceLine/ServiceOnePage';
import { ServicesPage } from './pages/services/ServicesPage';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation />
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='products' element={<ProductsPage/>}/>
            <Route path='products/productone' element={<ProductOnePage/>}/>
            <Route path='products/producttwo' element={<ProductTwoPage/>}/>
            <Route path='services' element={<ServicesPage/>}/>
            <Route path='services/serviceone' element={<ServiceOnePage/>}/>
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
