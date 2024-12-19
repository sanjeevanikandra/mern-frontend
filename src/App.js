import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './component/Create';
import Feature from './component/Feature';
function App() {
  return (
    <div>
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create/>} />
          <Route exact path="/features" element={<Feature/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
