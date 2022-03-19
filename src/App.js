import Viewport from "./viewport/Viewport";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>disastcast</h2>
        </div>
      </div>
      <div className="row">
        <Viewport />
      </div>
    </div>
  );
}

export default App;
