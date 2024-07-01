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
    const error = new Error(response.statusText);
    error.status = response.status;
    error.message = response.statusText;
    throw error;
  }
  const data = await response.json();
  return data;
};

export default likePost;
