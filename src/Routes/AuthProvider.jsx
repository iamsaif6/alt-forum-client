import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // Email Password Register
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login with google

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   Update User Profile
  const updateUserProfile = (name, photourl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photourl,
    });
  };

  //Login with email and password
  const loginWithMail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Observe Current User
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currnetUser => {
      const currnetEmail = currnetUser?.email || user?.email;
      const loggedUser = currnetEmail;
      setUser(currnetUser);
      setLoading(false);
      //If user exicts
      if (currnetUser) {
        //Get Access Toekn
        axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, { withCredentials: true }).then(res => {
          console.log(res.data);
        });
      } else {
        axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser).then(res => {
          console.log(res.data);
        });
      }

      //   console.log(currnetUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const AuthValue = {
    register,
    user,
    updateUserProfile,
    logout,
    loginWithMail,
    loginWithGoogle,
    loading,
  };

  return <AuthContext.Provider value={AuthValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
