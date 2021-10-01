import Home from "components/pages/Home";
import Signup from "components/auth/Signup";
import AccountCreated from "components/pages/AccountCreated";
import HomeWithoutCoop from "components/pages/HomeWithoutCoop"
import SearchCoop from "components/pages/SearchCoop"
import Root from "components/pages/Root"

const publicRoutes = [
  {
    name: "root",
    route: "/gobernanzza-app",
    component: Root,
  },
  {
    name: "home",
    route: "/gobernanzza-app/pantalla-principal",
    component: Home,
  },
  {
    name: "signup",
    route: "/gobernanzza-app/crear-cuenta",
    component: Signup,
  },
  {
    name: "accountcreated",
    route: "/gobernanzza-app/cuenta-creada-con-exito",
    component: AccountCreated,
  },
  {
    name: "homewithoutcoop",
    route: "/gobernanzza-app/inicio-usuario-sin-coop",
    component: HomeWithoutCoop,
  },
  {
    name: "searchcoop",
    route: "/gobernanzza-app/buscador-de-coop",
    component: SearchCoop,
  },
 
];

export default publicRoutes;
