import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import MainLayout from "../layouts/MainLayout/MainLayout";
import CategoriesGrid from "../components/CategoriesGrid/CategoriesGrid";
import MedicineDetails from "../pages/MedicineDetails/MedicineDetails";
import Cart from "../pages/Cart/Cart";
import Profile from "../pages/Profile/Profile";
const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: MainLayout,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "category/:slug",
          Component: Categories,
        },
        {
          path: "contact",
          Component: Contact,
        },
        {
          path: "medicine/:id",
          Component: MedicineDetails,
        },
        {
          path: "cart",
          Component: Cart,
        },
        {
          path: "profile",
          Component: Profile,
        },
      ],
    },
    {
      path: "/auth",
      Component: AuthLayout,
      children: [
        {
          path: "login",
          Component: Login,
        },
        {
          path: "signup",
          Component: SignUp,
        },
      ],
    },
  ],
  {
    basename: "/medicine-alternatives",
  }
);
export default router;
