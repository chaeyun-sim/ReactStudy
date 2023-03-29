import useFadeIn from './useFadeIn'

function App() {
  const fadeInH1 = useFadeIn(2, 1);
  const fadeInP = useFadeIn(5, 2);

  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalalalalalalaalalalal</p>
    </div>
  );
}

export default App;
