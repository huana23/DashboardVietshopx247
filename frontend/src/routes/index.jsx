import Dashboard from "../pages/Dashboard";
import AccessControl from "../pages/AccessControl";
import Health from "../pages/Health";
import HealthDataRescue from "../pages/Health/DataRescue";
import HealthReduceSystemLoad from "../pages/Health/ReduceSystemLoad";
import HealthReduceUserLoad from "../pages/Health/ReduceUserLoad";
import Marketing from "../pages/Marketing";
import Partners from "../pages/Partners";
import Support from "../pages/Support";
import Finance from "../pages/Finance";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

const publicRoutes = [
  { path: "/login", component: Login, layout: null },
  { path: "*", component: NotFound, layout: null },
];

const privateRoutes = [
  { path: "/", component: Dashboard },
  { path: "/dashboard", component: Dashboard },
  { path: "/health", component: Health },
  { path: "/health/data-rescue", component: HealthDataRescue },
  { path: "/health/reduce-system-load", component: HealthReduceSystemLoad },
  { path: "/health/reduce-user-load", component: HealthReduceUserLoad },
  { path: "/finance", component: Finance },
  { path: "/partners", component: Partners },
  { path: "/support", component: Support },
  { path: "/marketing", component: Marketing },
  { path: "/access-control", component: AccessControl },
];

export { publicRoutes, privateRoutes };
