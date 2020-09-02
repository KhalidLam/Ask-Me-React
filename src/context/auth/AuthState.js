import React, { useReducer, useContext } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import alertContext from "../alert/alertContext";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_LOADING,
} from "../types";

const PostsState = (props) => {
  const { setAlert } = useContext(alertContext);

  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: false,
    user: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Login User
  const login = async ({ email, password }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    dispatch({ type: SET_LOADING });

    try {
      //   const res = await axios.post("/api/auth", body, config);
      const res = await axios.post(
        "http://localhost:8000/api/auth",
        body,
        config
      );

      console.log(res);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.result,
      });

      setAlert((res.data.message = "success message"), "success");

      //   dispatch(loadUser());
    } catch (err) {
      console.log(err);
      setAlert((err.response.data.message = "danger message"), "danger");

      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

  // Register User
  const register = async ({ email, password }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    dispatch({ type: SET_LOADING });

    try {
      const res = await axios.post(
        "http://localhost:8000/api/authRegister",
        body,
        config
      );

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.result,
      });

      setAlert((res.response.data.message = "success message"), "success");

      //   dispatch(loadUser());
    } catch (err) {
      setAlert((err.response.data.message = "danger message"), "danger");

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

  //LOGOUT
  const logout = () => {
    setAlert("User has logged out", "success");

    // dispatch({ type: SET_LOADING });
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        login,
        register,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default PostsState;