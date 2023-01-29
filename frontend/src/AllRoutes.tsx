import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import UserProfile from "./dashboard/UserProfile";
import AddJob from "./dashboard/AddJob";
import Alljobs from "./dashboard/Alljobs";
const array = [
  { path: "/", component: <HomePage /> },
  { path: "/register", component: <Register /> },
  { path: "/LogIn", component: <LogIn /> },
  {path: "/userProfile", component: <UserProfile /> },
  {path:"/addJob", component:<AddJob/>},
  {path:"/allJobs", component:<Alljobs/>},
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
