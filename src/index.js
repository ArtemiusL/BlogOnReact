import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import blogApp from './reducers/index';
import * as Artem from './actions/index';
import App from './components/App';
import {updateLocalStorage} from './Util/updateLocalStorage';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(blogApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Подпишимся на обновления стора чтобы обновлять локал сторадж
store.subscribe(() => {
	updateLocalStorage(store.getState());
})
console.log(Artem);
console.log(Artem.addPost('artem'));
store.dispatch(Artem.addPost('artem'));
ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();