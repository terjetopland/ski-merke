import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import Requirements  from "./components/Requirements/Requirements";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home/Home";
import {AddPersonForm} from "./components/AddPersonForm/AddPersonForm";
import {UserInformation} from "./components/UserInformation/UserInformation";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/krav-og-info',
    element: <Requirements />
  },
  {
    path: '/fetch-data',
    // requireAuth: true,
    element: <FetchData />
  },
  {
    path: '/person',
    element: ( <div> <UserInformation/></div>)
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
