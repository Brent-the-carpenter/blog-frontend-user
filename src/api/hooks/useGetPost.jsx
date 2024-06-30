import GETPost from "../fetch/GETPost";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
const useGetPost = (postId) => {
  console.log("Post id in hook ", postId);
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchPost = async () => {
      try {
        const post = await GETPost(postId, signal);
        if (post) {
          post.createdAt = DateTime.fromISO(post.createdAt).toFormat(
            "MM/dd/yyyy",
          );
          setPost(post);
          setError(null);
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        console.log(error);
        setLoading(false);
        return error;
      }
    };
    fetchPost();

    return () => {
      console.log("Abort Controller fired to clean up");
      abortController.abort();
    };
  }, [postId]);
  return { post, error, loading };
};

export default useGetPost;
