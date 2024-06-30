import propTypes from "prop-types";
import GetPost from "../api/fetch/GETPost";
import usePostsContext from "../context/contextHooks/postsHook";
function Posts() {
  const { posts, loading, error } = usePostsContext();

  if (loading) return <div>Loading....</div>;
  if (error) {
    return <div>Error fetching post {error.message}</div>;
  }
  console.log(posts);
  return (
    <div className="mt-2 flex flex-col items-center justify-center gap-2">
      <h1 className="h1">Posts</h1>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <>
            <div className="postCard" key={post._id}>
              <h2 className="col-start-1 col-end-4 self-center text-xl font-bold">
                {post.title}
              </h2>

              <h3 className="row-start-2 row-end-3 self-start">
                Written by : {post.author.first_name}
              </h3>
              <p className="row-start-3">Created on : {post.createdAt}</p>
              <button
                className="btn col-start-3 row-start-3 row-end-4 justify-self-center"
                onClick={GetPost}
              >
                View post
              </button>
            </div>
            <hr className="border-t-2 border-gray-400" />
          </>
        ))
      ) : (
        <h2>There are no post!</h2>
      )}
    </div>
  );
}

export default Posts;
Posts.propTypes = {
  posts: propTypes.arrayOf(
    propTypes.shape({
      _id: propTypes.string,
      title: propTypes.string,
      createdAt: propTypes.string,
    }),
  ),
};
