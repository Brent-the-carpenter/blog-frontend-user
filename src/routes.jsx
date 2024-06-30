import App from "./App";
import ErrorPage from "./components/error";
import Posts from "./components/posts";
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
    ],
  },
];

export default routes;
