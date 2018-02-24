import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import './index.css';
// import Player from './containers/Player';
// import Episodes from './containers/Episodes';
import Library from './containers/Library';

const initialState = {
  audioSource: "http://traffic.libsyn.com/joeroganexp/p1079.mp3",
  episodes_url: "http://joeroganexp.joerogan.libsynpro.com/rss",
  itunes_url: "https://itunes.apple.com/us/podcast/the-joe-rogan-experience/id360084272?mt=2",
  itunes_rss: "https://rss.itunes.apple.com/api/v1/us/podcasts/top-podcasts/all/100/explicit.json"
}

const store = createStore<StoreState>(
  enthusiasm, initialState,
  window['devToolsExtension'] ? window['devToolsExtension']() : createStore);

ReactDOM.render(
  <Provider store={store}>
    <Library />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
