import React, { createContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";

export const AuthContext = createContext();

export const ThemeProvider = ({ children }) => {
  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ register, login }}>
      {children}
    </AuthContext.Provider>
  );
};
