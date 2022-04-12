import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { saveState } from "./browser-storage";
import { debounce } from "debounce";

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
