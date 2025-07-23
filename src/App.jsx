import React, { useState } from 'react';
import Navbar from './components/home/Navbar';
import LoginPage from './pages/LoginPage/LoginPage';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Footer from './components/home/Footer';
import './App.css';

 function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [savedUser, setSavedUser] = useState({});

  const handleCreateAccount = (userData) => {
    setSavedUser(userData);
    setCurrentPage('login');
  };

  return (
    <div className="App">
      <Navbar/>
      {currentPage === 'login' ? (
        <LoginPage
          switchToCreate={() => setCurrentPage('create')}
          prefillData={savedUser}
        />
      ) : (
        <CreateAccount onAccountCreated={handleCreateAccount} />
      )}
      
      <Footer/>
    </div>
  );
}

export default App