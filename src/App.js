import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import PokeDetails from './pages/PokeDetails';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<Home />} exact />
        <Route path='/pokemon/:id' element={<PokeDetails />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>

    </div>
  );
}

export default App;
