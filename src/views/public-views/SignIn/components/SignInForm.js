import "../css/SignInForm.css";
import { useContext, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { APP_PREFIX_PATH } from "configs/AppConfigs";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { phone } from "phone";
import axios from "axios";
import { magic } from "lib/magic";
import { UserContext } from "lib/UserContext";
import { CheckUser, NewUser } from "auth/Auth";

const SignInForm = (props) => {
  const [userAuth, setEmail] = useState("");
  const [userName, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useContext(UserContext);
  let history = useHistory();
  const GetData = async (userAuth) => {
    CheckUser(userAuth)
      .then((res) => {
          AuthLog();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loginNow =async () => {
    setName(userAuth.split("@")[0]);
    setLoading(true);
    await CheckUser(userAuth)
      .then((res) => {
        if (res.data.length > 0) {
          console.log("Duplicate User");
          GetData(userAuth);
        } else {
          NewUser(userAuth, userName, 0, userName.charAt(0))
            .then((res) => {
              GetData(userAuth);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const AuthLog = async () => {
    try {
      if (phone(userAuth).isValid) {
        await magic.auth.loginWithSMS({
          phoneNumber: userAuth,
        });
      } else {
        await magic.auth.loginWithMagicLink({
          email: userAuth,
        });
      }
    } catch (err) {
      setLoading(false);
    }
    checkState();
  };
  const preLogin = (e) => {
    setEmail(e.target.value);
    setName(userAuth.split("@")[0]);

    if (e.keyCode === 13) {
      loginNow();
    }
  };
  const checkState = async () => {
    const isLoggedIn = magic.user.isLoggedIn();
    if (isLoggedIn) {
        let userMetadata = await magic.user.getMetadata();
        await setUser(userMetadata);
        history.push(`/` + APP_PREFIX_PATH + "/profile");
    }
  };

  return (
    <form className="LoginForm">
      <div className="flex flex-row">
        <div className="flex flex-column">
          <h3>
            Welcome to <span className="BlueText">TITAN</span>
          </h3>
          <h1>Sign in</h1>
        </div>
        <span className="Split"></span>
        {/* <div className="flex flex-column">
          <p>No Account?</p>
          <Link to={`/${PUBLIC_PREFIX_PATH}/signup`} className="BlueText">
            Sign up
          </Link>
        </div> */}
      </div>
      <div className="flex flex-column h-full justify-content-center FormControl">
        <p>Enter your phone number or email address</p>
        <InputText
          placeholder="Phone number or Email address"
          className="mt-3"
          onChange={preLogin}
        />
        <Button
          label="Sign in"
          className="mt-3 w-full SignInButton"
          onClick={(e) => {
            e.preventDefault();
            loginNow();
          }}
          loading={loading}
        />
      </div>
    </form>
  );
};
export default SignInForm;
