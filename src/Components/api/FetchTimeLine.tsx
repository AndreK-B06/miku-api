import { useEffect, useState } from "react";

export default function FetchTimeLine() {
  const MikuTimeLine = useState<String>("");

  useEffect(() => {
    const FetchTimeLine = async () => {
      try {
        const response = await fetch(
          "https://leahjkh.github.io/MikuApiGithub/json/mikuTimeLine.json"
        );
        const timeLineData = await response.json();
        console.log(timeLineData);
        return;
      } catch (error) {
        console.error("Error fetching timeline data", error);
        return;
      }
    };
    FetchTimeLine();
  });

  return (
    <div className="flex">
      <p></p>
    </div>
  );
}
