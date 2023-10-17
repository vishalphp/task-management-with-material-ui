import './App.css';
import React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Screen from './Screen';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Routes >
          <Route path='/*' element={<Screen />} />
      </Routes>
      
    </div>
  );
}

export default App;
