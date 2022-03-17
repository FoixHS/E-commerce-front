import React from 'react';
/* Router */
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
/* Pages */
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/products/:id">
            <ProductDetailPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
