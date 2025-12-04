import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

import Assessment from './pages/Assessment';

import Supervision from './pages/Supervision';

import Resources from './pages/Resources';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="assessment" element={<Assessment />} />
        <Route path="supervision" element={<Supervision />} />
        <Route path="resources" element={<Resources />} />
      </Route>
    </Routes>
  );
}

export default App;
