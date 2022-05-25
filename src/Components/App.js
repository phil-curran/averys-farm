import "./App.css";
import Header from "./Header";
import PageControl from "./Controls/PageControl";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="App">
          <PageControl />
        </div>
      </div>
    </>
  );
}

export default App;
