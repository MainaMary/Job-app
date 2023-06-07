import { Route, Routes } from "react-router-dom";
import React from "react";
import NotFound from "../pages/NotFound";
import AddJob from "../dashboard/AddJob";
import Alljobs from "../dashboard/Alljobs";
import Chat from "../pages/chat/Chat";
const HomePage = React.lazy(() => import("../pages/HomePage"));
const Register = React.lazy(() => import("../pages/Register"));
const UserProfile = React.lazy(() => import("../dashboard/UserProfile"));
const LogIn = React.lazy(() => import("../pages/LogIn"));
const Home = React.lazy(() => import("../pages/Dashboard"));
const ProtectedRoute = React.lazy(() => import("../routes/ProtectedRoute"));
const array = [
  { path: "/", component: <HomePage />, isProtected: false },
  { path: "/register", component: <Register />, isProtected: false },
  { path: "/LogIn", component: <LogIn />, isProtected: false },
  { path: "/userProfile", component: <UserProfile />, isProtected: false },
  { path: "/addJob", component: <AddJob />, isProtected: false },
  { path: "/allJobs", component: <Alljobs />, isProtected: false },
  { path: "/home", component: <Home />, isProtected: false },
  { path: "/chat", component: <Chat />, isProtected: false },
  { path: "*", component: <NotFound />, isProtected: false },
];
const AllRoutes = () => {
  return (
    <Routes>
      {array.map(({ path, component, isProtected }, index) =>
        isProtected ? (
          <Route
            path={path}
            element={<ProtectedRoute>{component}</ProtectedRoute>}
            key={index}
          />
        ) : (
          <Route key={index} path={path} element={component} />
        )
      )}
    </Routes>
  );
};
export default AllRoutes;
