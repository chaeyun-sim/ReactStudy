import useBeforeLeave from './useBeforeLeave'

function App() {
  const begForLife = () => console.log('PLZ dont leave!')
  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;