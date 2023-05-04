import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import NotFound from "./components/404/404";
import { DarkModeContext } from "./context/darkModeContext";
import Orders from "./pages/orders/Orders";
import Delivery from "./pages/delivery/Delivery";
import Stats from "./pages/stats/Stats";
import Notifications from "./pages/notifications/Notifications";
import Products from "./pages/products/Products";
import { AuthContext } from "./context/AuthContext";
import Update from "./pages/update/Update";

function App() {
  const { darkMode } = useContext(DarkModeContext);


  const { currentUser } = useContext(AuthContext)


  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />
               <Route
                path="update/:id"
                element={
                  <RequireAuth>
                    <Update inputs={userInputs} title="Add New Product" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <Products />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title="Add New Product" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="orders">
              <Route
                index
                element={
                  <RequireAuth>
                    <Orders />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="delivery">
              <Route
                index
                element={
                  <RequireAuth>
                    <Delivery />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="stats">
              <Route
                index
                element={
                  <RequireAuth>
                    <Stats />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="notifications">
              <Route
                index
                element={
                  <RequireAuth>
                    <Notifications />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
