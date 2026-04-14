import Dashboard from "../pages/Dashboard";
import AccessControl from "../pages/AccessControl";
import Health from "../pages/Health";
import Marketing from "../pages/Marketing";
import Partners from "../pages/Partners";
import Support from "../pages/Support";
import NotFound from "../pages/NotFound";

const publicRoutes = [
  { path: "/", component: Dashboard },
  { path: "/dashboard", component: Dashboard },
  { path: "/health", component: Health },
  { path: "/partners", component: Partners },
  { path: "/support", component: Support },
  { path: "/marketing", component: Marketing },
  { path: "/access-control", component: AccessControl },
  { path: "*", component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
