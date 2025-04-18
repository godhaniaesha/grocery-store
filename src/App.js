import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import NoPage from './components/NoPage';
import HomeMain from './container/HomeMain';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<Home />} />
          <Route path="/GardenFresh" element={<HomeMain />} />,
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
