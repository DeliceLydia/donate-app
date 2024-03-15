import { signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState} from "react";
import { FIREBASE_AUTH } from "../FirebaseConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const  [message,setMessage] = useState('')
  return (
    <AuthContext.Provider
      value={{
        message,
        login: async (email, password) => {
          try {
            const response = await signInWithEmailAndPassword(
              FIREBASE_AUTH,
              email,
              password,
            );
            console.log(response);
            
          } catch (error) {
            console.log(error);
            setMessage('invalid credential')
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
