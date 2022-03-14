import './App.css';
import Wishlist from './component/Wishlist';
import Vegetables from './component/Vegetables';

function App() {
  return (
    <div className="App">
        <Wishlist />
        <hr />
        <Vegetables veg='potato' quant={10} />
    </div>
  );
}

export default App;
