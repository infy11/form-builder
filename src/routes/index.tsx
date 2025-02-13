import React from "react";
import { createBrowserRouter } from "react-router-dom";
//import FormBuilder from "@/pages/FormBuilder";
//import FormPreview from "@/pages/FormPreview";
import Layout from "@/pages/Layout";

const FormBuilder = React.lazy(() => import("@/pages/FormBuilder"));
const FormPreview = React.lazy(() => import("@/pages/FormPreview"));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/form-builder",
        element: <FormBuilder />,
      },
      {
        path: "/form-preview",
        element: <FormPreview />,
      },
    ],
  },

  {
    path: "*",
    element: <div> not found </div>,
  },
];

const router = createBrowserRouter(routes);

export default router;
