import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./STORE";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import UpdatePage from "./pages/Update.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home></Home> },
  {
    path: "/create",
    element: <CreatePage></CreatePage>,
  },
  {
    path: "/:id",
    element: <UpdatePage></UpdatePage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      <App />
    </Provider>
  </React.StrictMode>
);
