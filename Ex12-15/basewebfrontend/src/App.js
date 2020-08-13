import React, { Component, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import SignIn from "./components/SignIn";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {!state.isAuthenticated ? (
        <SignIn />
      ) : (
        <Router>
          <Home />
        </Router>
      )}
    </AuthContext.Provider>
  );
}

export default App;
