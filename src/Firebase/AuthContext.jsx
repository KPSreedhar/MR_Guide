// Firebase/AuthContext.js
import React from "react";

// Create and export the context
export const AuthContext = React.createContext();

// Export the hook
export const useAuth = () => {
    return React.useContext(AuthContext);
};