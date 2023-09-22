import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './containers/App.css';
import 'tachyons';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);
reportWebVitals();
