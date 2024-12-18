import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './component/Create';
import Feature from './component/Feature';
function App() {
  return (
    <div>
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Create/>} />
          <Route exact path="/features" element={<Feature/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
