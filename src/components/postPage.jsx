import PropTypes from "prop-types";
import useGetPost from "../api/hooks/useGetPost";
import likePost from "../api/fetch/POSTLikePost";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PostPage() {
  const { postId } = useParams();
  const { error, loading, post } = useGetPost(postId);
  const [likes, setLikes] = useState(0);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    if (post) {
      setLikes(post.likes);
    }
  }, [post, errors]);

  const handleLikePost = async () => {
    try {
      await likePost(postId);
      setLikes(likes + 1);
    } catch (err) {
      console.error("Error liking post:", err);
      if (err.status === 401) setErrors({ msg: "Please login to like post!" });
      if (err.status === 429) setErrors({ status: 429, msg: err.message });
    }
  };

  if (error) {
    <h1>Error fetching post.</h1>;
  }
  if (errors && errors.status !== 401) return <h1>{errors.msg}</h1>;
  if (loading || !post) return <h1>Loading ....</h1>;
  console.log(post);
  const { createdAt, author, images, content } = post;
  return (
    <div className="postPage m-20 p-4 text-xl shadow-md dark:text-stone-800">
      {images && images.length > 0 && <img src={images[0]}></img>}
      <h1 className="text-4xl">{post.title}</h1>
      <div>
        <div>{author.user_name}</div>
        <div>{createdAt}</div>
      </div>
      <div>{content}</div>
      <div>
        <button onClick={handleLikePost}>❤️</button>
        {likes}
        {errors && <p>{errors.msg}</p>}
      </div>
    </div>
  );
}

PostPage.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default PostPage;
