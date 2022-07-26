import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Start from './components/Start';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Home
          setIsLoggedIn={setIsLoggedIn}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      ) : (
        <Start setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
