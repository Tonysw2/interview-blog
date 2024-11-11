import { createBrowserRouter, Navigate } from "react-router-dom";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { Home } from "./pages/home";
import { Post } from "./pages/post";
import { AppLayout } from "./layouts/app-layout";
import { CreatePost } from "./pages/create-post";

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
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/post/create",
        element: <CreatePost />,
      },
    ],
  },
]);
