import React from "react";
import { createBrowserRouter } from "react-router-dom";
import FormBuilder from "@/pages/FormBuilder";
import FormPreview from "@/pages/FormPreview";

const routes = [
  {
    path: "/",
    element: <FormBuilder />,
  },
  {
    path: "/form-preview",
    element: <FormPreview />,
  },
  {
    path: "*",
    element: <div> not found </div>,
  },
];

const router = createBrowserRouter(routes);

export default router;
