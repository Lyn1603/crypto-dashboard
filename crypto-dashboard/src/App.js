import Header from './component/header';
import Totalbalance from './component/total_balance.js';
import Profile from './component/recent_transaction.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Totalbalance/>
      <Profile/>

    </div>
  );
}

export default App;
