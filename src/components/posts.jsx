import PropTypes from "prop-types";
import usePostsContext from "../context/contextHooks/postsHook";
import { Link } from "react-router-dom";

function Posts() {
  const { posts, loading, error } = usePostsContext();

  if (loading) return <div>Loading....</div>;
  if (error)
    return <h1 className="text-3xl">Error fetching posts: {error.message}</h1>;

  console.log("error in post.jsx", error);

  return (
    <div className="mt-2 flex flex-1 flex-col items-center gap-2">
      <h1 className="text-xl font-extrabold">Posts</h1>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <div className="postCard" key={post._id}>
            <h2 className="col-start-1 col-end-4 self-center text-xl font-bold">
              {post.title}
            </h2>
            <h3 className="row-start-2 row-end-3 self-start">
              Written by: {post.author.first_name}
            </h3>
            <p className="row-start-3">Created on: {post.createdAt}</p>
            <Link
              to={`/posts/${post._id}`}
              className="btn col-start-3 row-start-3 row-end-4 justify-self-center"
            >
              View post
            </Link>
          </div>
        ))
      ) : (
        <h2>There are no posts!</h2>
      )}
    </div>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      author: PropTypes.shape({
        first_name: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ),
};

export default Posts;
