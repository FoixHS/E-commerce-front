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
import Navbar from './components/Global/Navbar';
import Footer from './components/Global/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/products/:id">
            <ProductDetailPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/products?">
            <HomePage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
