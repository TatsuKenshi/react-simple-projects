import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
const [users, setUsers] = useState(data)
console.log(users);

const clearList = () => {
  setUsers([])
}

  return <main>
  <section className='container'>
    <h3>{users.length} Birthdays Today</h3>
    <List users={users}/>
  <button className='btn' onClick={clearList}>Clear List</button>
  </section>;
  </main>
}

export default App;
