import { useState } from "react";
import likePost from "../fetch/POSTLikePost";

const useLikePost = (postId, initialLikes) => {
  const [likes, setLikes] = useState(initialLikes);
  const [error, setError] = useState(null);

  const handleLikePost = async () => {
    try {
      const post = await likePost(postId);
      if (post) {
        setLikes(post.likes);
      }
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  return { likes, handleLikePost, error };
};

export default useLikePost;
