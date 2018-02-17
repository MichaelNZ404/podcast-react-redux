import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import './index.css';
import Player from './containers/Player';

const initialState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
}

const store = createStore<StoreState>(
  enthusiasm, initialState,
  window['devToolsExtension'] ? window['devToolsExtension']() : createStore);

ReactDOM.render(
  <Provider store={store}>
    <Player />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
