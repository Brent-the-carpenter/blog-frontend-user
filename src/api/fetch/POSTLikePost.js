const postURL = import.meta.env.VITE_POSTS_URI;
const likePost = async (postID) => {
  const response = await fetch(postURL + "/" + postID + "/like", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });
  if (!response.ok) {
    throw new Error("Error liking post");
  }
  const data = await response.json();
  return data;
};

export default likePost;
