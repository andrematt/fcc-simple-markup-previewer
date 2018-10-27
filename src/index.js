import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/*
The service worker is a web API that helps you cache your assets and other files
so that when the user is offline or on slow network, he/she can still see results 
on the screen, as such, it helps you build a better user experience. 
It's all about adding offline capabilities to your site: React creates a service 
worker for you without your configuration by default. Its by default for production.
*/