import { createBrowserRouter } from "react-router-dom";
import Onboarding from "../pages/onboarding";
import CreateAccountPage from "../pages/onboarding/createAccount";
import SetUpPage from "../pages/onboarding/Setup";
import { ErrorComponent } from "../Components/errorComponent";
import PaymentPage from "../pages/onboarding/payment";
// import { GoogleSignin } from "../pages/onboarding/googleSignin";

export const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorComponent />,
    children: [
      { element: <Onboarding />, index: true },
      {
        path: "account/create",
        element: <CreateAccountPage />,
      },
      {
        path: "setup",
        element: <SetUpPage />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
      // { path: "auth/google", element: <GoogleSignin /> },
    ],
  },
]);
