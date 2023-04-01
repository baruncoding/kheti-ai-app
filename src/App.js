import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import KishanDashbord from './pages/Iot/KishanDashbord';
import Home from './pages/home/Home';
import Learn from './pages/learn/Learn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home */}
        <Route path='home/' element={<Home/>}/>
        {/* Learn */}
        <Route path='learn/' element={<Learn/>}/>
        {/* Mart */}
        <Route path='mart/' element={<>mart</>}/>
        {/* Iot */}
        <Route path='/' element={<KishanDashbord/>}/>
        <Route path='iot/' element={<></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
