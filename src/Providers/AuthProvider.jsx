import { GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const setNamePhoto = (name, photoUrl) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl 
        });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        logIn,
        googleLogin,
        githubLogin,
        logOut,
        loading,
        setNamePhoto
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;