import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Home";
import TransferenciasPage from "./Transferencias";
import LoginPage from "./LogIn";
import SignupPage from "./SignUp";
import MiCuentaPage from "./MiCuenta";
import DirectorioPage from "./Directorio";
import CambiarContraseñaPage from "./CambiarContraseña";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "/sign-up",
      element: <SignupPage />
    },
    {
      path: "/dashboard",
      element: <HomePage />,
    },
    {
      path: "/transferencias",
      element: <TransferenciasPage />,
    },
    {
      path: "/mi-cuenta",
      element: <MiCuentaPage />,
    },
    {
      path: "/directorio",
      element: <DirectorioPage />,
    },
    {
      path: "/cambiar-contraseña",
      element: <CambiarContraseñaPage />,
    },
  ]);
  
  export default router;