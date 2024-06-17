import "./App.css";
import FetchApi from "./Components/api/FetchApi";
// import FetchTimeLine from "./Components/api/FetchTimeLine";
import FetchVocaloids from "./Components/api/FetchVocaloids";

function App() {
  return (
    <>
      <section className="flex-column">
        <main className="flex-column">
          <h1>Fun facts about Miku:</h1>
          <FetchApi />
        </main>
        <section className="flex-colum">
          <FetchVocaloids />
        </section>
        {/* Tamproary coment out code for esier work */}
        {/* <section className="flex-column">
          <FetchTimeLine />
        </section> */}
      </section>
    </>
  );
}

export default App;
