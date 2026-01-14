import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AddItems from "../pages/AddItems";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AllProducts from "../components/AllProducts/AllProducts";
import AllItems from "../pages/AllItems";
import Details from "../pages/Details";
import FootballBoots from "../components/FootballBoots/FootballBoots";
import Football from "../components/Football/Football";
import Jersey from "../components/Jersey/Jersey";
import MyItems from "../pages/MyItems";
import UpdateForm from "../pages/UpdateForm";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <AllProducts></AllProducts>,
        loader: () =>
          fetch(
            `https://flexsports-hub-server-site.vercel.app/products?limit=${6}`
          ),
      },
      {
        path: "/category/:category",
        element: <FootballBoots></FootballBoots>,
        loader: ({ params }) =>
          fetch(
            `https://flexsports-hub-server-site.vercel.app/products/category/${params.category}`
          ),
      },
      {
        path: "/category/:category",
        element: <Football></Football>,
        loader: ({ params }) =>
          fetch(
            `https://flexsports-hub-server-site.vercel.app/products/category/${params.category}`
          ),
      },
      {
        path: "/category/:category",
        element: <Jersey></Jersey>,
        loader: ({ params }) =>
          fetch(
            `https://flexsports-hub-server-site.vercel.app/products/category/${params.category}`
          ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      { path: "/auth", element: <Navigate to={"/auth/login"}></Navigate> },
      {
        path: "/auth/add-items",
        element: (
          <PrivateRoute>
            <AddItems></AddItems>
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/all-items",
        element: <AllItems></AllItems>,
        loader: () =>
          fetch(
            "https://flexsports-hub-server-site.vercel.app/products/allItems"
          ),
      },
      {
        path: "/auth/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://flexsports-hub-server-site.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/auth/my-items/:email",
        element: (
          <PrivateRoute>
            <MyItems></MyItems>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://flexsports-hub-server-site.vercel.app/products/email/${params.email}`
          ),
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/update/:id",
        element: (
          <PrivateRoute>
            <UpdateForm></UpdateForm>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://flexsports-hub-server-site.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
