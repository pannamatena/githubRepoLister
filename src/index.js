import React from 'react';
import ReactDOM from 'react-dom';
import { RequestProvider } from 'react-request-hook';
import axios from 'axios';
import './index.css';
import App from './components/App';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
});

ReactDOM.render(
    <RequestProvider value={axiosInstance}>
      <App />
    </RequestProvider>,
    document.getElementById('root')
);
