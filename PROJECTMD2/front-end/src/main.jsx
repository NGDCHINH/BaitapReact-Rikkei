import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Auth from "./Pages/Authen.jsx";
import AnimeDetail from "./components/AnimeDetail.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AnimeList from "./components/ListAnime.jsx";
import FavoritesAnime from "./components/FavoritesAnime.jsx";
import Admin from "./Pages/AdminPage.jsx";
import { Provider } from "react-redux";
import store from "../src/Store";

const router = createBrowserRouter([
  {
    path: "/anime",
    element: <App />,
    children: [
      {
        path: "",
        element: <AnimeList />,
      },
      {
        path: ":id",
        element: <AnimeDetail />,
      },
      {
        path: "fav",
        element: <FavoritesAnime />,
      },
    ],
  },
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </Provider>
);
