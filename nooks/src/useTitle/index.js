import useTitle from './useTitle'
import './App.css';

function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater('Home'), 5000)

  return (
    <div className="App">
      <div>{titleUpdater}</div>
    </div>
  );
}

export default App;
