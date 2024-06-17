import { useEffect, useState } from "react";

export default function FetchTimeLine() {
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);

  interface TimelineItem {
    time: string;
    event: string;
  }

  useEffect(() => {
    const fetchTimeline = async () => {
      try {
        const response = await fetch(
          "https://leahjkh.github.io/MikuApiGithub/json/mikuTimeLine.json"
        );
        const timelineData = await response.json();
        setTimeline(timelineData);
      } catch (error) {
        console.error("Error fetching timeline data", error);
      }
    };

    fetchTimeline();
  }, []);

  return (
    <div className="flex-column">
      {timeline.map((item, index) => (
        <div key={index}>
          <p>{item.time}</p>
          <p>{item.event}</p>
        </div>
      ))}
    </div>
  );
}
