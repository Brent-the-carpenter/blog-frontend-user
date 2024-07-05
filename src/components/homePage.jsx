import useUserContext from "../context/contextHooks/userHook";
function Home() {
  const { userName } = useUserContext();
  return (
    <div className="h-full">
      <h1>Welcome {userName ? userName : ""}</h1>
    </div>
  );
}
export default Home;
