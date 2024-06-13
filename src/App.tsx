import "./App.css";
import FetchApi from "./Components/api/FetchApi";

function App() {
  return (
    <>
      <section className="flex">
        <h1>Miku Fetch api</h1>
        <main className="flex">
          <h2>Fun facts about Miku:</h2>
          <FetchApi />
        </main>
      </section>
    </>
  );
}

export default App;
