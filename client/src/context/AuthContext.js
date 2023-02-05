import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import authReducer from "../reducer/auhReducer";
import setAuthToken from "../utils/setAuthToken";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  // Authenticate user
  const loadUser = async () => {
    if (localStorage["token"]) {
      setAuthToken(localStorage["token"]);
    }
    try {
      const response = await axios.get("http://localhost:4000/api/users/auth");
      if (response.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: {
            isAuthenticated: true,
            user: response.data.user,
          },
        });
      }
    } catch (error) {
      localStorage.removeItem("token");
      setAuthToken(null);
      dispatch({
        type: "SET_AUTH",
        payload: { isAuthenticated: false, user: null },
      });
    }
  };
  useEffect(() => {
    loadUser();
  }, []);

  //login
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
        userForm
      );

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
      }
      await loadUser();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // Logout
  const logoutUser = () => {
    localStorage.removeItem("token");
    setAuthToken(null);
    dispatch({
      type: "SET_AUTH",
      payload: { isAuthenticated: false, user: null },
    });
  };

  //register
  const registerUser = async (userForm) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/register",
        userForm
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
      }
      await loadUser();

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const authContextData = { loginUser, registerUser, authState, logoutUser };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
