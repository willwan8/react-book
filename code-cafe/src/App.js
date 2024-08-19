import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import { items } from './items';

function App() {
  return (
    <div>
      <Header />
      <Home items={items} />
    </div>
  );
}

export default App;
