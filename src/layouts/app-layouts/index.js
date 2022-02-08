import { useContext } from "react";
import { UserContext } from "lib/UserContext";
import AppViews from "views/app-views";
import { Link } from "react-router-dom";
import { APP_PREFIX_PATH, PUBLIC_PREFIX_PATH } from "configs/AppConfigs";
import { useHistory } from "react-router-dom";
import { magic } from "lib/magic";

import "./app-layout.css";

const AppLayout = () => {
  const history = useHistory();
  const [user, setUser] = useContext(UserContext);

  const logout = () => {
    magic.user.logout().then(() => {
      setUser({ user: null });
      history.push("/" + PUBLIC_PREFIX_PATH + "/signin");
    });
  };
  const showMenu = () => {
    document.querySelector("#header-list").classList.toggle("menu-show");
  };
  return (
    <>
      <div className="BlueCover"></div>
      <div
        id="AppLayout"
        className="flex flex-column align-items-center justify-content-center pl-3 pr-3"
      >
        <header className="flex flex-row align-items-center justify-content-center p-3 pl-5">
          <i className="pi pi-bars mobile" onClick={showMenu}></i>
          <span className="Split mobile"></span>
          <section className="HeaderLogo">TITAN</section>
          <ul
            className="flex justify-content-center align-items-center"
            id="header-list"
          >
            <Link to={`/${APP_PREFIX_PATH}/profile`}>
              <li className="w-full flex justify-content-center align-items-center">
                Profile
              </li>
            </Link>
            <Link to={`/${APP_PREFIX_PATH}/roster`}>
              <li className="w-full flex justify-content-center align-items-center">
                Roster
              </li>
            </Link>
            <Link to={`/${APP_PREFIX_PATH}/leaderboards`}>
              <li className="w-full flex justify-content-center align-items-center">
                Leaderboards
              </li>
            </Link>
            <Link to={`/${APP_PREFIX_PATH}/versus`}>
            <li className="w-full flex justify-content-center align-items-center">
              Versus
            </li>
            </Link>
          </ul>
          <span className="Split" />
          <div onClick={logout} id="logout-btn">
            Logout
          </div>
          <i onClick={logout} className="pi pi-sign-out mobile"></i>
        </header>
        <main className="flex flex-row justify-content-center align-items-center">
          <AppViews />
        </main>
      </div>
    </>
  );
};

export default AppLayout;
