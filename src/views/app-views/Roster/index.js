import "./css/index.css";
import { Button } from "primereact/button";
import { APP_PREFIX_PATH } from "configs/AppConfigs";
import { Link } from "react-router-dom";

import walletService from '../../../shared/wallet'
// import WalletServiceV3 from '../../../shared/walletv3'
// import gnodeService from '../../../shared/gnode'
// import {RemoteGnodeService} from '../../../shared/gnode'
// import log from '../../../shared/logger'
// import {startTor, stopTor }from '../../../shared/tor'
// import {locale, gnodeOption} from '../../../shared/config'

const RosterView = () => {
  const getSlate = () => {
    walletService.getNodeHeight();
    // alert("sdlkf");
  }
  return (
    <>
      <div id="roster-view" className="w-full">
        <div id="message-box" className="w-full">
          <div className="flex flex-row justify-content-center align-items-center pb-3">
            <h1>Messages</h1>
          </div>
          <div className="flex flex-column justify-content-center align-items-center w-full message-box">
            <div className="black-text-box flex flex-row align-items-center w-full">
              <p>
                Tadashi Quota: 40,000,000 Followers Duration: 44 Hours Wager:
                10,000 GRIN
              </p>
              <span className="Split" />
              <div className="flex flex-row justify-content-center align-items-center button-row">
                <Button className="accept-button alert-button flex flex-row justify-content-center align-items-center"
                  onClick={getSlate}>
                  ACCEPT
                </Button>
                <Button className="decline-button alert-button flex flex-row justify-content-center align-items-center">
                  DECLINE
                </Button>
              </div>
            </div>
            <div className="black-text-box flex flex-row align-items-center w-full">
              <p>
                Tadashi Quota: 40,000,000 Followers Duration: 44 Hours Wager:
                10,000 GRIN
              </p>
              <span className="Split" />
              <div className="flex flex-row justify-content-center align-items-center button-row">
                <Button className="accept-button alert-button flex flex-row justify-content-center align-items-center">
                  ACCEPT
                </Button>
                <Button className="decline-button alert-button flex flex-row justify-content-center align-items-center">
                  DECLINE
                </Button>
              </div>
            </div>
            <div className="black-text-box flex flex-row align-items-center w-full">
              <p>
                Tadashi Quota: 40,000,000 Followers Duration: 44 Hours Wager:
                10,000 GRIN
              </p>
              <span className="Split" />
              <div className="flex flex-row justify-content-center align-items-center button-row">
                <Button className="accept-button alert-button flex flex-row justify-content-center align-items-center">
                  ACCEPT
                </Button>
                <Button className="decline-button alert-button flex flex-row justify-content-center align-items-center">
                  DECLINE
                </Button>
              </div>
            </div>
            <div className="black-text-box flex flex-row align-items-center w-full">
              <p>
                Tadashi Quota: 40,000,000 Followers Duration: 44 Hours Wager:
                10,000 GRIN
              </p>
              <span className="Split" />
              <div className="flex flex-row justify-content-center align-items-center button-row">
                <Button className="accept-button alert-button flex flex-row justify-content-center align-items-center">
                  ACCEPT
                </Button>
                <Button className="decline-button alert-button flex flex-row justify-content-center align-items-center">
                  DECLINE
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div id="plan-box" className="flex flex-row">
          <div id="monthly-plan" className="flex flex-column plan-card">
            <div className="flex flex-row justify-content-center align-items-center">
              <h1>Monthly</h1>
            </div>
            <div className="blue-text-box">100,000,000 FOLLOWERS</div>
            <div className="blue-text-box">1 month</div>
            <div className="blue-text-box">MONDAY START TIME 1AM EST</div>
            <div className="blue-text-box">FRIDAY END TIME 11:40PM EST</div>
            <div className="blue-text-box">WAGER 100 GRIN</div>
            <div className="flex flex-row justify-content-center align-items-center">
              <Link to={`/${APP_PREFIX_PATH}/roster/search`}>
                <button className="ShadowBtn w-full">72h 60m 60s Enter</button>
              </Link>
            </div>
          </div>
          <span className="Split" />
          <div id="weekly-plan" className="flex flex-column plan-card">
            <div className="flex flex-row justify-content-center align-items-center">
              <h1>Weekly</h1>
            </div>
            <div className="blue-text-box">100,000,000 FOLLOWERS</div>
            <div className="blue-text-box">1 month</div>
            <div className="blue-text-box">MONDAY START TIME 1AM EST</div>
            <div className="blue-text-box">FRIDAY END TIME 11:40PM EST</div>
            <div className="blue-text-box">WAGER 100 GRIN</div>
            <div className="flex flex-row justify-content-center align-items-center">
              <Link to={`/${APP_PREFIX_PATH}/roster/search`}>
                <button className="ShadowBtn w-full">24hrs 60m 60s Enter</button>
              </Link>
            </div>
          </div>
          <span className="Split" />
          <div id="daily-plan" className="flex flex-column plan-card">
            <div className="flex flex-row justify-content-center align-items-center">
              <h1>Daily</h1>
            </div>
            <div className="blue-text-box">100,000,000 FOLLOWERS</div>
            <div className="blue-text-box">1 month</div>
            <div className="blue-text-box">MONDAY START TIME 1AM EST</div>
            <div className="blue-text-box">FRIDAY END TIME 11:40PM EST</div>
            <div className="blue-text-box">WAGER 100 GRIN</div>
            <div className="flex flex-row justify-content-center align-items-center">
              <Link to={`/${APP_PREFIX_PATH}/roster/search`}>
                <button className="ShadowBtn w-full">60m 60s Enter</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="roster-history flex flex-row justify-content-center align-items-center titan-bg-5">
          <div className="roster-info flex flex-column">
            <div className="timer titan-bg-1">72h 60m 60s</div>
            <div className="black-text-box flex flex-row w-full">
              140th place
            </div>
            <div className="black-text-box flex flex-row  w-full">
              100,000 GRIN
            </div>
            <div className="black-text-box flex flex-row w-full">
              182,384,383
            </div>
          </div>
          <div className="flex flex-row w-full roster-history-content">
            <div className="flex flex-column w-full roster-history-like">
              <div className="black-text-box flex flex-row w-full">
                KendallJenner 189,394 Likes
              </div>
              <div className="black-text-box flex flex-row w-full">
                KendallJenner 189,394 Likes
              </div>
              <div className="black-text-box flex flex-row w-full">
                KendallJenner 189,394 Likes
              </div>
              <div className="black-text-box flex flex-row w-full">
                KendallJenner 189,394 Likes
              </div>
              <div className="black-text-box flex flex-row w-full">
                KendallJenner 189,394 Likes
              </div>
            </div>
            <div className="flex flex-column w-full roster-history-like">
              <div className="black-text-box flex flex-row w-full">
                KendallJenner 189,394 Likes
              </div>
              <div className="black-text-box flex flex-row w-full">
                KendallJenner 189,394 Likes
              </div>
              <div className="black-text-box flex flex-row w-full">
                KendallJenner 189,394 Likes
              </div>
              <div className="black-text-box flex flex-row w-full">
                KendallJenner 189,394 Likes
              </div>
              <div className="black-text-box flex flex-row w-full">
                KendallJenner 189,394 Likes
              </div>
            </div>
          </div>
        </div>
        <div className="roster-history flex flex-row titan-bg-2">
          <div className="roster-info flex flex-column">
            <div className="timer titan-bg-3">72h 60m 60s</div>
          </div>
        </div>
        <div className="roster-history flex flex-row titan-bg-4">
          <div className="roster-info flex flex-column">
            <div className="timer titan-bg-3">72h 60m 60s</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RosterView;
