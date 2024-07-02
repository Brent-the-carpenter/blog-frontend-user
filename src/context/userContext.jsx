import { createContext, useMemo } from "react";
import propTypes from "prop-types";
export const UserContext = createContext({
  user_name: null,

  token: null,
});

const UserProvider = ({ children }) => {
  const {
    user_name,

    token,
  } = async () => await localStorage.getItem("user").json();
  const value = useMemo(() => ({ user_name, token }), [user_name, token]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
UserProvider.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};

export default UserProvider;
