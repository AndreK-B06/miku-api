import { useEffect, useState } from "react";
import "../api Css/FetchVocaloids.css";

export default function FetchVocaloids() {
  const [vocaloids, setVocaloids] = useState<VocaloidsItem[]>([]);

  interface VocaloidsItem {
    name: string;
    codename: string;
    introduction: string;
    Version: string;
    image: string;
  }

  useEffect(() => {
    const fetchVocaloids = async () => {
      try {
        const response = await fetch(
          "https://leahjkh.github.io/MikuApiGithub/json/mikuVersions.json"
        );
        const vocaloidsData: VocaloidsItem[] = await response.json();
        setVocaloids(vocaloidsData);
        console.log(vocaloidsData);
      } catch (error) {
        console.error("Error fetching vocaloids data", error);
      }
    };

    fetchVocaloids();
  }, []);

  return (
    <div className="flex-row">
      {vocaloids.map((item, index) => (
        <div key={index} className="flex-column vocaloids-cont">
          <p>{item.name}</p>
          <img src={item.image} alt={item.name} />
          <p>Codename: {item.codename}</p>
          <p>Introduction: {item.introduction}</p>
          <p>{item.Version}</p>
        </div>
      ))}
    </div>
  );
}
