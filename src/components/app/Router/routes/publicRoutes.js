import Home from "components/pages/Home";
import Signup from "components/auth/Signup";
import AccountCreated from "components/pages/AccountCreated";
import HomeWithoutCoop from "components/pages/HomeWithoutCoop"
import SearchCoop from "components/pages/SearchCoop"
import SearchCoop3 from "components/pages/SearchCoop3"
import JoinToCoop from "components/pages/JoinToCoop"
import Cooperative from "components/pages/Cooperative"
import Root from "components/pages/Root"

const publicRoutes = [
  {
    name: "root",
    route: "/",
    component: Root,
  },
  {
    name: "home",
    route: "/pantalla-principal",
    component: Home,
  },
  {
    name: "signup",
    route: "/crear-cuenta",
    component: Signup,
  },
  {
    name: "accountcreated",
    route: "/cuenta-creada-con-exito",
    component: AccountCreated,
  },
  {
    name: "homewithoutcoop",
    route: "/inicio-usuario-sin-coop",
    component: HomeWithoutCoop,
  },
  {
    name: "searchcoop",
    route: "/buscador-de-coop",
    component: SearchCoop,
  },
  {
    name: "searchcoop3",
    route: "/buscador-de-coop3",
    component: SearchCoop3,
  },
  {
    name: "jointocoop",
    route: "/unirme-a-esta-cooperativa",
    component: JoinToCoop,
  },
  {
    name: "cooperative",
    route: "/pantalla-principal-miembro",
    component: Cooperative,
  },


];

export default publicRoutes;
