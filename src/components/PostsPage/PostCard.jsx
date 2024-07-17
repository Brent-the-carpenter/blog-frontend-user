import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <>
      <div
        className="postCard w-3/4 gap-4 max-sm:w-10/12 max-sm:flex-col-reverse"
        key={post._id}
      >
        <div className="flex flex-col justify-center gap-2"></div>
        <div className="flex flex-grow flex-col items-center justify-center gap-2 p-2">
          <h2 className="text-xl">{post.title}</h2>
          <div>
            <h3>Written by: {post.author.first_name}</h3>
            <p>Created on: {post.createdAt}</p>
            <p>❤️{post.likes}</p>
          </div>
          <Link
            to={`/posts/${post._id}`}
            className="btn col-start-5 row-start-3 row-end-4 justify-self-center"
          >
            View post
          </Link>
        </div>
        <div className="flex justify-center align-middle">
          <img src={post?.thumbNail} alt="Thumbnail" />
        </div>
      </div>

      <hr className="w-3/4 max-sm:w-full" />
    </>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    thumbNail: PropTypes.string,
    likes: PropTypes.number.isRequired,
    author: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
    }).isRequired,
  }),
};
