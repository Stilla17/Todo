import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './../Pages/Dashboard.jsx';
// agar boshqa sahifalar bo‘lsa, ularni ham import qilamiz

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* boshqa route lar */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
