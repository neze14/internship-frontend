import './App.css';
import React from 'react';

import FetchUsers from './components/test-fetchAll/FetchUsers';

import FetchAllDisplay from './components/test-fetchAll/FetchAllDisplay';
// import FlatListDisplay from './FlatList

const App: React.FC = () => {
  return (
    <div>
      <FetchUsers/>
    </div>
  )
}

export default App;