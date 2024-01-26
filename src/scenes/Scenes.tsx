import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PaginationTableScene } from './components';

export const Scenes: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="projects" />} />
    <Route path="/projects" element={<PaginationTableScene />} />
    <Route path="/conditions" element={<PaginationTableScene />} />
    <Route path="/reports" element={<PaginationTableScene />} />
    <Route path="*" element={<div>404</div>} />
  </Routes>
);
