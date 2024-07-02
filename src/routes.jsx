import App from "./App";
import ErrorPage from "./components/error";
import Posts from "./components/posts";
import PostPage from "./components/postPage";
import NotFound from "./components/404NotFound";
import SignUpForm from "./components/signUpForm";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Posts />,
        path: "posts",
      },
      {
        path: "posts/:postId",
        element: <PostPage />,
      },
      { path: "/signup", element: <SignUpForm /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
