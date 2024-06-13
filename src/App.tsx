import "./App.css";
import FetchApi from "./Components/api/FetchApi";

function App() {
  return (
    <>
      <section className="flex">
        <main className="flex">
          <h1>Fun facts about Miku:</h1>
          <FetchApi />
        </main>
      </section>
    </>
  );
}

export default App;
