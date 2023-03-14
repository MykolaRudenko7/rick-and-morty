import { getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { app, googleAuthProvider } from './firebase';
//
import { Loader } from '.';

//
//
//
//
//
export const AuthProvider = () => {
  const auth = getAuth(app);
  const [user, setUser] = React.useState(auth.currentUser);

  React.useEffect(() => {
    // повертає відписку
    const unsub = auth.onAuthStateChanged((ifUser) => {
      if (ifUser != null) {
        return setUser(ifUser);
      }
    // аудентифікація
      signInWithPopup(auth, googleAuthProvider)
        .then((credentials) => setUser(credentials.user))
        .catch((e) => console.error(error));
    });

    return unsub;
  }, [auth]);

  return user != null ? <>{user.displayName}</> : <Loader />;
};
