import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PaginationTableScene } from './components';

export const Scenes: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PaginationTableScene />} />
      <Route path="projects" element={<PaginationTableScene />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);
