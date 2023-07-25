import logo from "./logo.svg";
import "./App.css";
import ModalWrapper from "./components/modalWrapper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React App to show autopopulate when typing using tailwind css</p>
        <ModalWrapper />
      </header>
    </div>
  );
}

export default App;
