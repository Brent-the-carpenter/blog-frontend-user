const baseURL = import.meta.env.VITE_BASE_URL;

async function GetUserLikedPosts(token, signal) {
  const usersLikedPostsURL = `${baseURL}/users/user/likedposts`;
  let response;
  try {
    response = await fetch(usersLikedPostsURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      signal: signal,
    });
  } catch (error) {
    throw new Error("Network error or request aborted");
  }

  const responseContentType = response.headers.get("content-type");
  let data;
  if (responseContentType && responseContentType.includes("application/json")) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    const error = new Error(
      "An error occurred while fetching user's liked posts",
    );
    error.status = response.status;
    error.message = data.message || data;
    throw error;
  }

  return data;
}

export default GetUserLikedPosts;
