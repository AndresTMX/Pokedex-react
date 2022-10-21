import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'normalize.css'

//redux toolkit
import thunk from 'redux-thunk'
import rootReducer  from './reducers/rootReducer' 
// import { logger } from './middlewares'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeAlt( 
  applyMiddleware( thunk)
)

const store = createStore(
  rootReducer,
  composeEnhancers
  );

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
)
