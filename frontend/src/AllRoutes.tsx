import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
const array = [
  { path: "/", component: <HomePage /> },
  { path: "/register", component: <Register /> },
  { path: "/LogIn", component: <LogIn /> },
  { path: "*", component: <NotFound /> },
];
const AllRoutes = () => {
  return (
    <Routes>
      {array.map(({ path, component }, index) => (
        <Route key={index} path={path} element={component} />
      ))}
    </Routes>
  );
};
export default AllRoutes;
