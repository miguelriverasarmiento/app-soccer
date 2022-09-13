import { Teams } from './components/Teams';
import { Positions } from './components/Positions';
import { Layout } from './Layout';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Teams />} />
          <Route path="positions" element={<Positions />} />
        </Route>  
      </Routes>
    </div>
  );
}

export default App;