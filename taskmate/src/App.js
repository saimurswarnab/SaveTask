import { useState } from 'react';
import { Header } from './componets/Header';
import { AddTask } from './componets/AddTask';
import { ShowTask } from './componets/ShowTask';
import './App.css';

function App() {
  const[tasklist,setTasklist] = useState([]);

  return (
    <div className="App">
      <Header/>
      <AddTask taskList={tasklist} setTaskList ={setTasklist}/>
      <ShowTask taskList={tasklist} setTaskList ={setTasklist}/>
      
    </div>
  );
}

export default App;
