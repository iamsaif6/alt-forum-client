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
      setUser(currnetUser);
      setLoading(false);
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
