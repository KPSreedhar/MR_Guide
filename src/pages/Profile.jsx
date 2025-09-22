import React from 'react';
import { useAuth } from '../Firebase/AuthProvider';
import { doSignOut } from '../Firebase/auth';
import '../styles/Profile.css';

const Profile = () => {
    const { currentUser } = useAuth();

    const handleLogout = async () => {
        try {
            await doSignOut();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h2>User Profile</h2>

                <div className="profile-info">
                    <div className="profile-avatar">
                        <img
                            src={currentUser?.photoURL || '/default-avatar.png'}
                            alt="Profile"
                        />
                    </div>

                    <div className="profile-details">
                        <h3>{currentUser?.displayName || 'User'}</h3>
                        <p><strong>Email:</strong> {currentUser?.email}</p>
                        <p><strong>User ID:</strong> {currentUser?.uid}</p>
                        <p><strong>Email Verified:</strong> {currentUser?.emailVerified ? 'Yes' : 'No'}</p>
                    </div>
                </div>

                <button onClick={handleLogout} className="logout-btn">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;