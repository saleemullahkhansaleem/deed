import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import "@fontsource/poppins"; 
import {
  AboutUs,
  CareerApplyPage,
  CareerPage,
  ContactUs,
  Home,
  NewsPage,
  OurGoals,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "our-goals",
        element: <OurGoals />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "career",
        element: <CareerPage />,
      },
      {
        path: "career-apply",
        element: <CareerApplyPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
