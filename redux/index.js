import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


const enhancer = composeWithDevTools(
  applyMiddleware(thunk),
);

// const persistConfig = {
//   key: 'root',
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, reducer);

export const initStore = initialState => createStore(reducer, initialState, enhancer);



// export default function configureStore(initialState) {
//   const store = createStore(persistedReducer, initialState, enhancer);

//   // we won't need PersistGate since server rendered with nextJS:
//   // const persistor = persistStore(store);
//   // return { store, persistor };

//   return store;
// }
// export const initStore = (initialState = {}) => {
//   return createStore(reducer, initialState, applyMiddleware(thunk));
// };