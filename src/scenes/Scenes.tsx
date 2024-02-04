import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { DynamicLayoutScene, PaginationTableScene } from './components';

export const Scenes: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="projects" />} />
    <Route path="/projects" element={<PaginationTableScene />} />
    <Route path="/conditions" element={<PaginationTableScene />} />
    <Route path="/inspections" element={<PaginationTableScene />} />
    <Route path="/projects/:itemId" element={<DynamicLayoutScene />} />
    <Route path="/conditions/:itemId" element={<DynamicLayoutScene />} />
    <Route path="/inspections/:itemId" element={<DynamicLayoutScene />} />
    <Route path="*" element={<div>404</div>} />
  </Routes>
);
