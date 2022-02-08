import { useContext, useState } from "react";
import "../css/SignUpForm.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { APP_PREFIX_PATH, PUBLIC_PREFIX_PATH } from "configs/AppConfigs";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { phone } from "phone";
import {magic} from 'lib/magic';
import { UserContext } from "lib/UserContext";

const SignUpForm = () => {
  const [userAuth, setEmail] = useState("");
  const [loading,setLoading] = useState(false);
  const [user,setUser] = useContext(UserContext);
  let history = useHistory();
  const loginNow = async () => {
    try {
      setLoading(true);
      if (phone(userAuth).isValid) {
        await magic.auth.loginWithSMS({
          phoneNumber: userAuth,
        });
      } else {
        await magic.auth.loginWithMagicLink({
          email: userAuth,
        });
      }
      checkState();
    } catch (err) {
      setLoading(false);
    }
  };
  const preLogin = (e) => {
    setEmail(e.target.value);

    if (e.keyCode === 13) {
      loginNow();
    }
  };
  const checkState =async () => {
    const isLoggedIn = magic.user.isLoggedIn();
    if(isLoggedIn)
    {
      let userMetadata = await magic.user.getMetadata();
      await setUser(userMetadata);
      history.push(`/`+APP_PREFIX_PATH+'/profile')
    }
  };
  return (
    <form className="LoginForm">
      <div className="flex flex-row">
        <div className="flex flex-column">
          <h3>
            Welcome to <span className="BlueText">TITAN</span>
          </h3>
          <h1>Sign Up</h1>
        </div>
        <span className="Split"></span>
        <div className="flex flex-column">
          <p>No Account?</p>
          <Link to={`/${PUBLIC_PREFIX_PATH}/signin`} className="BlueText">
            Sign in
          </Link>
        </div>
      </div>
      <div className="flex flex-column h-full justify-content-center FormControl">
        <p>Email address</p>
        <InputText
          placeholder="Email address"
          className="mt-3"
          onChange={preLogin}
        />
        <p className="mt-3">Phone number</p>
        <InputText placeholder="Phone number" className="mt-3" />
        <p className="mt-3">Username</p>
        <InputText placeholder="Username" className="mt-3" />
        <Button
          label="Sign up"
          className="mt-3 SignUpButton"
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
export default SignUpForm;
