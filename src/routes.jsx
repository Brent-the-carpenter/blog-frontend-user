import App from "./App";
import ErrorPage from "./components/error";
import Posts from "./components/PostsPage/posts";
import PostPage from "./components/BlogPage/postPage";
import NotFound from "./components/NotFound/404NotFound";
import SignUpForm from "./components/SignUpPage/signUpForm";
import Home from "./components/HomePage/homePage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        element: <Posts />,
        path: "posts",
      },
      {
        path: "posts/:postId",
        element: <PostPage />,
      },
      { path: "/signup", element: <SignUpForm /> },
      { path: "/*", element: <NotFound /> },
    ],
  },
];

export default routes;
