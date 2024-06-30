const postURl = import.meta.env.VITE_POSTS_URI;
async function GETPosts(signal) {
  try {
    const response = await fetch(postURl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      signal: signal,
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch post:${error.message}`);
  }
}

export default GETPosts;
