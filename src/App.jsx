import React, {
  useEffect, useState,
} from 'react';
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
import CreateProductPage from './pages/CreateProductPage';
import ProfilePage from './pages/ProfilePage';
import EditProductPage from './pages/EditProductPage';

import { getUser } from './services/auth';
import useAuth from './hooks/useAuth';
import Navbar from './components/Global/Navbar';
import Footer from './components/Global/Footer';
import Loading from './components/Global/Loading';
import AdminSettings from './components/Global/AdminSettings';
import AdminRoute from './routes/AdminRoute';
import UserRoute from './routes/UserRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const renderUser = async () => {
      if (!user && window.localStorage.getItem('login-auth')) {
        const token = window.localStorage.getItem('login-auth');
        const userResponse = await getUser(JSON.parse(token));
        setUser(userResponse.data);
        setLoading(false);
      }
      setLoading(false);
    };
    renderUser();
  }, [user, setUser]);
  return (
    <div className="App">
      {loading ? <Loading /> : (
        <Router>
          <Navbar />
          <AdminSettings />
          <Switch>
            <AdminRoute path="/products/create" component={CreateProductPage} />
            <AdminRoute path="/products/edit/:id" component={EditProductPage} />
            <UserRoute path="/user/profile" component={ProfilePage} />
            <Route path="/products/:id" component={ProductDetailPage} />
            <Route exact path="/" component={HomePage} />
            <PublicRoute path="/login" component={LogInPage} />
            <PublicRoute path="/register" component={RegisterPage} />
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
