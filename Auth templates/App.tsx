import React, { useState } from 'react';
import SignIn from './sign-in/SignIn'; // Adjust the path based on where your SignIn component is located
import SignUp from './sign-up/SignUp'; // Adjust the path based on where your SignUp component is located
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Make sure Firebase is correctly initialized

const App: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);  // State to control whether we're showing SignIn or SignUp

  const handleSignInSuccess = () => {
    // Handle what happens after a successful sign-in here
    console.log('Sign-in successful!');
    // Redirect user or show logged-in state (e.g., navigate to dashboard)
  };

  const toggleForm = () => {
    setIsSignIn(!isSignIn);  // Toggle between SignIn and SignUp
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* Conditionally render either SignIn or SignUp based on the state */}
      {isSignIn ? (
        <SignIn onSignInSuccess={handleSignInSuccess} />
      ) : (
        <SignUp />
      )}

      {/* Button to toggle between SignIn and SignUp */}
      <button
        onClick={toggleForm}
        style={{
          padding: '10px 20px',
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
      </button>
    </div>
  );
};

export default App;
