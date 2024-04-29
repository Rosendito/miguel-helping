import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Home";
import TransferenciasPage from "./Transferencias";
import LoginPage from "./LogIn";
import SignupPage from "./SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "/SignUp",
      element: <SignupPage />
    },
    {
      path: "/dashboard",
      element: <HomePage />
    },
    {
      path: "/transferencias",
      element: <TransferenciasPage />
    },
  ]);
  
  export default router;