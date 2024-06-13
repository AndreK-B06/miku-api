export const fetchTimeLine = async (): Promise<void> => {
  try {
    const response = await fetch(
      "https://leahjkh.github.io/MikuApiGithub/json/mikuTimeLine.json"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching timeline data", error);
  }
};

fetchTimeLine();
