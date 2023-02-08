import ReactDom from 'react-dom/client'
import React from 'react';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store'
import { Provider } from 'react-redux'
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>)