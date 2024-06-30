import PropTypes from "prop-types";
import useGetPost from "../api/hooks/useGetPost";
import useLikePost from "../api/hooks/useLikePost";
import { useParams } from "react-router-dom";

function PostPage() {
  const { postId } = useParams();
  const { error, loading, post } = useGetPost(postId);
  const { createdAt, author, images, content } = post || {};
  const {
    likes,
    handleLikePost,
    error: likeError,
  } = useLikePost(postId, post.likes || 0);

  if (error) return <h1>Error fetching post.</h1>;
  if (loading) return <h1>Loading ....</h1>;
  if (likeError) return <h1>Error liking post.</h1>;

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
        {likes > 0 ? likes : post.likes}
      </div>
    </div>
  );
}

PostPage.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default PostPage;
