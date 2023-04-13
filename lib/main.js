import { jsx } from 'react/jsx-runtime';
import React__default from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './components/DropdownMenu.js';
import './components/DropdownItem.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsx(React__default.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
);
