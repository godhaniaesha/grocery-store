import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import HomeMain from './container/HomeMain';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/HomeMain" element={<HomeMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
