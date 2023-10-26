
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
    <header>Esther's Dictionary App</header>
        <main><Dictionary defaultKeyword="hello" /></main>
        <footer>
          This project was coded by Esther Ayankoya

          and is{" "}
          <a
            href="https://github.com/EstherAyankoya/Dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/celebrated-kashata-43cd94/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
    
    </div>
    </div>
  );
}

export default App;
