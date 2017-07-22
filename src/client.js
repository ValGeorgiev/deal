import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './stores'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'

//Create the browser history
const history = createHistory()
//Build the history middleware
const middleware = routerMiddleware()
//Create the react store and add the middleware
const store = configureStore({}, [middleware])

// Import global styles
import 'styles/main.scss'

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default // eslint-disable-line global-require

    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <NextApp />
          </ConnectedRouter>
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
