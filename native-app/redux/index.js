// index.js or wherever you use the store
import {createStore} from './store';
import {persistStore} from 'redux-persist';

const store = createStore();
const persistor = persistStore(store);

// Purge the store when needed
// persistor.purge();

export {store, persistor};