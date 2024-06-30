import { createContext, useMemo } from "react";
import propTypes from "prop-types";
import useGETPosts from "../api/hooks/useGetPosts";
import { DateTime } from "luxon";
export const PostsContext = createContext({
  Posts: [],
  loading: true,
  error: null,
});

const PostsProvider = ({ children }) => {
  const { posts, loading, error } = useGETPosts();
  const formattedPost = posts.map((post) => ({
    ...post,
    createdAt: DateTime.fromISO(post.createdAt).toFormat("MM/dd/yyyy"),
  }));
  const value = useMemo(
    () => ({
      posts: formattedPost,
      loading,
      error,
    }),
    [error, loading, formattedPost],
  );
  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};
export default PostsProvider;
