import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import configStore from './store/configStore';
import MyNavbar from './components/ui/MyNavbar'
import MyFoorter from './components/ui/MyFooter';

// Main pages
import Home from './components/main-pages/home/Home';
import ReactPage from './components/main-pages/react';
import ReduxPage from './components/main-pages/redux';

const store = configStore();
const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <MyNavbar />
          <Route exact path="/" component={Home} />
          <ReactPage />
          <ReduxPage />
          <MyFoorter />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
