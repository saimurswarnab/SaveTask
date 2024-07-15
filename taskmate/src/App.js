import { Header } from './componets/Header';
import { AddTask } from './componets/AddTask';
import { ShowTask } from './componets/ShowTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <AddTask/>
      <ShowTask/>
      
    </div>
  );
}

export default App;
