import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

function PublicRoute({ component: Component, ...rest }) {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => (!user
        ? <Component {...props} />
        : (<Redirect to={{ path: '/', state: { from: props.location } }} />))}
    />
  );
}
PublicRoute.defaultProps = {
  location: {
    pathname: '',
  },
};

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default PublicRoute;
