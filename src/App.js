import logo from './logo.svg';
import './App.css';
import BoxList from './BoxList.js';

/**
 *  Renders the NewBoxForm with BoxList with Boxes
 *
 *
 *  App --> BoxList --> NewBoxFrom, and Boxes...
 *
 */

function App() {
  return (
    <div className="App">
      <BoxList />
    </div>
  );
}

export default App;
