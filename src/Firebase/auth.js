import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup, 
  sendPasswordResetEmail, 
  updatePassword, 
  sendEmailVerification,
  signOut
} from "firebase/auth"
import { auth } from "./firebase"

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
}

export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
}

export const doSignInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    // Add scopes if needed
    provider.addScope('profile');
    provider.addScope('email');
    
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error) {
    console.error("Google sign-in error:", error);
    throw error;
  }
}

export const doSignOut = () => {
  return signOut(auth);
}

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
}

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
}

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
}