import React from "react";
import { createRoot } from 'react-dom/client';
import './i18n';
import "./utils"
import App from './App';

// append app to dom
const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);