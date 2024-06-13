import { useEffect, useState } from "react";

export default function FetchApi() {
  const [mikuFactsApi, setMikuFactsApi] = useState<string[]>([]);
  const [randomFact, setRandomFact] = useState<string>("");

  function getRandomIndex(length: number): number {
    return Math.floor(Math.random() * length);
  }
  console.log(mikuFactsApi);
  useEffect(() => {
    const fetchMikuFacts = async () => {
      try {
        const response = await fetch(
          "https://leahjkh.github.io/MikuApiGithub/json/mikuFacts.json"
        );
        const data = await response.json();
        setMikuFactsApi(data);
        setRandomFact(data[getRandomIndex(data.length)]);
        console.log(data);
      } catch (error) {
        console.error("error not able to fetch data", error);
      }
    };

    fetchMikuFacts();
  }, []);

  return (
    <div>
      <p>{randomFact || "Loading..."}</p>
    </div>
  );
}
