import useUserContext from "../../context/UserContext/userHook";
import useGetUserLikedPost from "../../api/hooks/useGetUserLikedPost";
import PostCard from "../PostsPage/PostCard";
function Home() {
  const { userName, token } = useUserContext();
  const { userLikedPosts, loading, error } = useGetUserLikedPost(token);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  console.log(userLikedPosts);
  return (
    <div className="h-full">
      <h1>Welcome {userName ? userName : ""}</h1>
      <h2>Your liked posts</h2>
      <ul className="flex flex-col items-center justify-center gap-2">
        {userLikedPosts &&
          userLikedPosts.length > 0 &&
          userLikedPosts.map((post) => <PostCard post={post} key={post._id} />)}
      </ul>
    </div>
  );
}
export default Home;
