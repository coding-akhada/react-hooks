import UseEffect from "./hooks/UseEffect_Hook";
import UseCallback from "./hooks/UseCallback/UseCallback_Hook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="center-text">React Hooks</h1>
        <hr />
      </header>
      <main style={{ padding: "0 50px" }}>
        {/* <UseEffect /> */}
        <UseCallback />
      </main>
    </div>
  );
}

export default App;
