import './App.css';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
          <Routes>
            <Route index element={<HomePage/>}/>
            {/* <Route path='contact' element={<ContactPage/>}/> */}
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
