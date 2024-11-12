import { createBrowserRouter, Navigate } from "react-router-dom";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import Home from "./pages/home";
import { AppLayout } from "./layouts/app-layout";
import { MyPosts } from "./pages/my-posts";
import { Post } from "./pages/post";
import { CreatePost } from "./pages/create-post";
import { checkSecureRoute } from "./utils/check-secure-route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/sign-in" />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <AppLayout />,
    loader: checkSecureRoute,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/my-posts",
        element: <MyPosts />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
    ],
  },
]);
