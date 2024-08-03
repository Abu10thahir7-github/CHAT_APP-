// src/App.jsx
import React, { useState } from 'react';
import Chat from './Commponets/Chat';
import Login from './Commponets/login';
import { UserProvider } from './Commponets/UserContext';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
  };

  return (
    <UserProvider>
      <div>
        {isLoggedIn ? <Chat /> : <Login onLogin={handleLogin} />}
      </div>
    </UserProvider>
  );
};

export default App;
