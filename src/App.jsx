import React, { useState, useMemo } from 'react';
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
import LogInPage from './pages/LogInPage';
import RegisterPage from './pages/RegisterPage';

import Navbar from './components/Global/Navbar';
import Footer from './components/Global/Footer';

import UserContext from './helpers/UserContext';

function App() {
  const [user, setUser] = useState(null);
  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={providerUser}>
          <Navbar />
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
            <Route path="/login">
              <LogInPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
          <Footer />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
