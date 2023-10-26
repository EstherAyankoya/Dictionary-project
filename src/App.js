
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
    <header>Esther's Dictionary App</header>
        <main><Dictionary defaultKeyword="hello" /></main>
        <footer>coded by esther</footer>
    </div>
    </div>
  );
}

export default App;
