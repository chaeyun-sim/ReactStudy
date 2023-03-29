import useFullscreen from './useFullScreen'

function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small")
  }
  const {element, triggerFull, exitFull} = useFullscreen(onFullS);


  return (
    <div className="App" style={{ height: '1000vh'}}>
      <div ref={element}>
        <img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80" alt="cat" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

export default App;
