import "./css/LeaderBoards.css";
import LeaderBoardsImg from "constants/image/app/LeaderBoards";
import { TopUserList } from "datas/app/LeaderBoards";
import { APP_PREFIX_PATH } from "configs/AppConfigs";
import { Link } from "react-router-dom";

const LeaderBoards = () => {
  return (
    <div
      id="leader-boards"
      className="flex flex-column align-items-center pt-5 pb-5"
    >
      <div id="timer" className="flex flex-column">
        72h 60m 60s - 100,000 GRIN
      </div>
      <ul className="flex flex-row pt-5">
        {TopUserList.map((item, index) => {
          return (
            <li>
              <div className="rank-row flex flex-row w-full gap-5">
                <Link to={`/${APP_PREFIX_PATH}/detailboards`}>
                  <div className="flex flex-row user-rank-row">
                    <div className="user-rank black-text-box">{item.rank}</div>
                    <div className="black-text-box flex flex-row justify-content-center align-items-center username-box">
                      <img
                        src={LeaderBoardsImg.mw}
                        alt="grin"
                        className="mr-2"
                      />
                      <span className="user-name">{item.name}</span>
                    </div>
                  </div>
                </Link>
                <Link to={`/${APP_PREFIX_PATH}/detailboards`} className="score-link">
                <div className="user-score black-text-box flex-1 flex justify-content-center">
                  {item.score}
                </div>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeaderBoards;
