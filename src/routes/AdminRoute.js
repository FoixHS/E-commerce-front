import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

function AdminRoute({ component: Component, ...rest }) {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => (user && user.role === 'admin'
        ? <Component {...props} />
        : (<Redirect to={{ path: '/', state: { from: props.location } }} />))}
    />
  );
}
AdminRoute.defaultProps = {
  location: {
    pathname: '',
  },
};

AdminRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default AdminRoute;
