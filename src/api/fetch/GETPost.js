const GETPost = async (postId) => {
  const postURl = import.meta.env.VITE_POSTS_URI;
  const fetchUrl = postURl + "/" + postId;
  const response = await fetch(fetchUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};
export default GETPost;
