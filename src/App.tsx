import "./App.css";
import FetchApi from "./Components/api/FetchApi";
import FetchTimeLine from "./Components/api/FetchTimeLine";

function App() {
  return (
    <>
      <section className="flex">
        <main className="flex">
          <h1>Fun facts about Miku:</h1>
          <FetchApi />
        </main>
        <section>
          <FetchTimeLine />
        </section>
      </section>
    </>
  );
}

export default App;
