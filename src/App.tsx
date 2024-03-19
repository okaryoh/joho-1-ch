import React from 'react';
import './style.css';
import { ToolsArea } from './home/ToolsArea/ToolsArea';
import { ClassArea } from './home/ClassArea/ClassArea';
import { Home } from './home/Home';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import FloatingPointApp from './Page/Tools/FloatingPointApp/FloatingPointApp';
import NotFoundApp from './Page/NotFoundApp';

function App() {
  return (
    // https://qiita.com/gaia003/items/2be915f3963c3f152727
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Home>
        <Routes>
          <Route path="/" element={
            <>
              <ToolsArea />
              <ClassArea />
            </>
          } />
          <Route path="/floatingpoint" element={<FloatingPointApp />} />
          <Route path="*" element={<NotFoundApp />} />
        </Routes>
      </Home>
    </BrowserRouter>
  );
}

export default App;
