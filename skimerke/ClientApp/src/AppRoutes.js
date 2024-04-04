import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import Requirements  from "./components/Requirements/Requirements";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/Requirements',
    element: <Requirements />
  },
  {
    path: '/fetch-data',
    // requireAuth: true,
    element: <FetchData />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
