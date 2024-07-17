import { useState, useEffect } from "react";
import getUserLikedPosts from "../fetch/GetUserLikedPosts";
import useUserContext from "../../context/UserContext/userHook";
import { DateTime } from "luxon";

function useGetUserLikedPost() {
  const [userLikedPosts, setUserLikedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useUserContext();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        const posts = await getUserLikedPosts(token, signal);
        if (posts.likedPosts) {
          const formattedPosts = posts.likedPosts.map((post) => ({
            ...post,
            createdAt: DateTime.fromISO(post.createdAt).toFormat("MM/dd/yyyy"),
          }));
          setUserLikedPosts(formattedPosts);
          setError(null);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    return () => {
      abortController.abort();
    };
  }, [token]);

  return { userLikedPosts, loading, error };
}

export default useGetUserLikedPost;
