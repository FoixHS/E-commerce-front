import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  return <UserContext.Provider value={providerUser}>{children}</UserContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;
