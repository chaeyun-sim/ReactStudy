import './App.css';
import useClick from './useClick';

function App() {
  const clickHandler = () => console.log('say hello')
  const title = useClick(clickHandler);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
      <input placeholder="1a" />
    </div>
  );
}

export default App;
