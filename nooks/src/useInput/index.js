function App() {
  const maxLength = (value) => value.length < 10;
  // const maxLength = (value) => !value.includes('@')  // @가 아예 입력되지 않음
  const name = useInput("Mr", maxLength)
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      {/* value={name.value} === {...name} */}
    </div>
  );
}

export default App;
