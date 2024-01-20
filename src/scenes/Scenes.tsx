import React, { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ProjectsPage } from './components';

export const Scenes: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="projects" replace />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);
