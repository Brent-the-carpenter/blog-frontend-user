import { useEffect, useState } from "react";
import GETPosts from "../fetch/GETPosts";
const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchPosts = async () => {
      try {
        const posts = await GETPosts(signal);
        if (posts) {
          setPosts(posts);
          setLoading(false);
          setError(null);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchPosts();
    return () => {
      console.log("abort controller fired for cleanup");
      abortController.abort();
    };
  }, []);
  return { error, loading, posts };
};
export default useGetPosts;
