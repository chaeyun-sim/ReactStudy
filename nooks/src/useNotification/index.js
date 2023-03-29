import useNotification from './useNotification'

function App() {
  const triggerNotif = useNotification('Can I steel your kimchi?', {body: 'I love kimchi dont you?'});

  return (
    <div className="App" style={{ height: '1000vh'}}>
      <button onClick={triggerNotif}>Hello!!!!!!!</button>
    </div>
  );
}

export default App;