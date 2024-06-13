import React, { useEffect, useState } from "react";

export default function FetchApi() {
  const [mikuFactsApi, setMikuFactsApi] = useState<string[]>([]);
  const [randomFact, setRandomFact] = useState<string>("");

  useEffect(() => {
    const fetchMikuFacts = async () => {
      try {
        const response = await fetch(
          "https://leahjkh.github.io/MikuApiGithub/json/mikuFacts.json"
        );
        const data = await response.json();
        setMikuFactsApi(data);
        setRandomFact(data[getRandomIndex(data.length)]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMikuFacts();
  }, []);

  function getRandomIndex(length: number): number {
    return Math.floor(Math.random() * length);
  }

  const handleRandomQuoteClick = () => {
    setRandomFact(mikuFactsApi[getRandomIndex(mikuFactsApi.length)]);
  };

  return (
    <div className="flex">
      <p id="p-fonts">{randomFact || "Loading..."}</p>
      <button id="btn-facts" onClick={handleRandomQuoteClick}>
        Random fun fact
      </button>
    </div>
  );
}
