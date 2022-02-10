import Header from './Component/Header/Header';
import Articles from './Component/Articles/Articles';
import About from './About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact={true} element={<Articles />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
