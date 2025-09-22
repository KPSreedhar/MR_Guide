import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../Firebase/auth";
import { useAuth } from '../Firebase/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import '../styles/LoginPage.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSigningIn) return;
    
    setError(null);
    setIsSigningIn(true);
    
    try {
      await doSignInWithEmailAndPassword(email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (isSigningIn) return;
    
    setError(null);
    setIsSigningIn(true);
    
    try {
      await doSignInWithGoogle();
    } catch (err) {
      setError(err.message);
      setIsSigningIn(false);
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={onSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSigningIn}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isSigningIn}
          />
        </div>
        <button type="submit" disabled={isSigningIn}>
          {isSigningIn ? "Logging in..." : "Login"}
        </button>
      </form>
      <button 
        onClick={handleGoogleSignIn} 
        disabled={isSigningIn}
        className="google-btn"
      >
        <FcGoogle style={{ marginRight: '8px' }} />
        {isSigningIn ? "Signing in..." : "Sign in with Google"}
      </button>
    </div>
  );
};

export default Login;