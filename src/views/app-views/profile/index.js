  import { useContext, useEffect, useState } from "react";
  import { useHistory } from "react-router-dom";
  import { UserContext } from "lib/UserContext";
  import "./css/Profile.css";
  import { PUBLIC_PREFIX_PATH } from "configs/AppConfigs";
  import Loader from "components/Loader";
  import { InputSwitch } from "primereact/inputswitch";
  import { Avatar } from "primereact/avatar";
  import { InputText } from "primereact/inputtext";
  // import AvatarUploader from "react-avatar-uploader";
  import LetteredAvatar from "react-lettered-avatar";
  import { BadgeImage, WithDraw, Financial } from "datas/app/Profile";
  import axios from "axios";
  import * as EmailValidator from "email-validator";
  import { CheckUser, UpdateUser } from "auth/Auth";
  import { magic } from "lib/magic";

  const ProfileView = () => {
    const history = useHistory();
    const [checked2, setChecked2] = useState(false);
    const [username, setName] = useState("");
    const [useremail, setEmail] = useState("");
    const [user] = useContext(UserContext);
    const [image, setImage] = useState("");

    const UpdateProfile = () => {
      if (EmailValidator.validate(useremail)) {
        if (checked2) {
          magic.user
            .showSettings()
            .then((res) => setChecked2(res.isMfaEnabled))
            .catch((err) => console.log(err));
        }
        const temp = checked2 ? 1 : 0;
        UpdateUser(user.email, useremail, username, temp, image)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    const UpdateAvatar = () => {
      let obj = document.querySelector(".AvatarPicker");
      obj.addEventListener("change", function (e) {
        if (this.files[0]) {
          var picture = new FileReader();
          picture.readAsDataURL(this.files[0]);
          picture.addEventListener("load", function (event) {
            setImage(event.target.result);
          });
        }
      });
      obj.click();
    };
    useEffect(() => {
      const GetData = async () => {
        CheckUser(user.email)
          .then((res) => {
            setName(res.data[0].userName);
            setChecked2(res.data[0].auth === 1 ? true : false);
            setEmail(res.data[0].userAuth);
            setImage(res.data[0].image);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      // user &&
      //   !user.loading &&
      //   !user.issuer &&
      //   history.push("/" + PUBLIC_PREFIX_PATH + "/signin");
      user && user.email && GetData();
    }, [user, history]);

    return (
      <>
        {user?.loading ? (
          <Loader />
        ) : (
          user?.issuer && (
            <>
              <div id="ProfileView" className="w-full p-6">
                <div className="flex flex-row" id="user-info-box">
                  <div className="flex flex-column" id="user-form">
                    <div className="flex flex-row w-full align-items-center">
                      <div className="flex flex-row justify-content-center align-items-center textBox">
                        <span className="mr-2">シ 1.000000</span>
                        <span onClick={UpdateAvatar} id='user-avatar'>
                          {image.length === 1 ? (
                            <LetteredAvatar name={image} />
                          ) : (
                            <Avatar
                              image={image}
                              className="p-mr-2"
                              size="xlarge"
                              shape="circle"
                            />
                          )}
                        </span>
                        <input type="file" className="hidden AvatarPicker" />
                      </div>
                      <button
                        className="mr-2 ml-5 ShadowBtn"
                        onClick={() => UpdateProfile()}
                      >
                        Save
                      </button>
                    </div>
                    <InputText
                      className="mt-2 incus w-full"
                      value={useremail}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputText
                      className="mt-2 incus w-full"
                      value={username}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div className="textBox mt-2 flex flex-row justify-content-center align-items-center">
                      <span className="mr-2">2 Factor Authenication</span>
                      <InputSwitch
                        checked={checked2}
                        onChange={(e) => setChecked2(e.value)}
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-column textBox ml-3 flex-1 justify-content-center align-items-center"
                    id="badge-box"
                  >
                    <div className="flex flex-row justify-content-center align-items-center">
                      BADGES
                    </div>
                    <ul className="flex flex-row h-full BadgeRow p-2">
                      <li className="GoldBadge flex flex-column justify-content-center align-items-center">
                        <img alt="Gold" src={BadgeImage.TopBadge} />
                        <div className="ScoreBoard">0</div>
                      </li>
                      <li className="SilverBadge flex flex-column justify-content-center align-items-center">
                        <img alt="Silver" src={BadgeImage.SilverBadge} />
                        <div className="ScoreBoard">0</div>
                      </li>
                      <li className="CopperBadge flex flex-column justify-content-center align-items-center">
                        <img alt="Copper" src={BadgeImage.CopperBadge} />
                        <div className="ScoreBoard">0</div>
                      </li>
                      <li className="ParticBadge flex flex-column justify-content-center align-items-center">
                        <img alt="Participate" src={BadgeImage.ParticBadge} />
                        <div className="ScoreBoard">0</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row mt-5" id="user-tool-box">
                  <div
                    className="flex flex-column mr-3 align-items-center"
                    id="slate-pack"
                  >
                    <div className="textBox flex flex-column w-full justify-content-center align-items-center DepositBoard">
                      PASTE SLATEPACK...
                    </div>
                    <div className="flex flex-column align-items-center justify-content-center" id="button-row">
                      <button className="mt-3 flex flex-row justify-content-center align-items-center">
                        Deposit
                        <Financial />
                      </button>
                      <button className="mt-3 flex flex-row justify-content-center align-items-center">
                        WithDraw
                        <WithDraw />
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex flex-column flex-1 textBox THBoard p-3 justify-content-center align-items-center"
                    id="transaction-list"
                  >
                    <div className="flex flex-row mb-3">Transaction History</div>
                    <div className="flex flex-row BGRow">
                      <span>シ 1.0000 12/25/2021 9:44PM EST</span>
                      <span className="Split"></span>
                      <span>Deposit</span>
                    </div>
                    <div className="flex flex-row RGRow mt-2">
                      <span>シ 1.0000 12/25/2021 9:44PM EST</span>
                      <span className="Split"></span>
                      <span>WithDraw</span>
                    </div>
                    <div className="flex flex-row BGRow mt-2">
                      <span>シ 1.0000 12/25/2021 9:44PM EST</span>
                      <span className="Split"></span>
                      <span>Deposit</span>
                    </div>
                    <div className="flex flex-row BGRow mt-2">
                      <span>シ 1.0000 12/25/2021 9:44PM EST</span>
                      <span className="Split"></span>
                      <span>Deposit</span>
                    </div>
                    <div className="flex flex-row BGRow mt-2">
                      <span>シ 1.0000 12/25/2021 9:44PM EST</span>
                      <span className="Split"></span>
                      <span>Deposit</span>
                    </div>
                    <div className="flex flex-row RGRow mt-2">
                      <span>シ 1.0000 12/25/2021 9:44PM EST</span>
                      <span className="Split"></span>
                      <span>WithDraw</span>
                    </div>
                    <div className="flex flex-row BGRow mt-2">
                      <span>シ 1.0000 12/25/2021 9:44PM EST</span>
                      <span className="Split"></span>
                      <span>Deposit</span>
                    </div>
                    <div className="flex flex-row RGRow mt-2">
                      <span>シ 1.0000 12/25/2021 9:44PM EST</span>
                      <span className="Split"></span>
                      <span>WithDraw</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        )}
      </>
    );
  };

  export default ProfileView;
