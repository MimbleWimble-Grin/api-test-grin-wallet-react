import "./css/DetailBoards.css";
import LeaderBoardsImg from "constants/image/app/LeaderBoards";
import {DetailFollowers} from "datas/app/DetailBoards";

const DetailBoards = () => {
  return (
    <>
      <div
        id="detail-boards"
        className="w-full flex flex-column align-items-center"
      >
        <ul
          id="user-info-box"
          className="w-full flex flex-row justify-content-center align-items-center"
        >
          <li>
            <div className="flex flex-row user-rank-box">
            <div className="black-text-box">1st</div>
            <div className="black-text-box flex flex-row justify-content-center align-items-center">
              <img src={LeaderBoardsImg.mw} alt="grin" className="mr-2" />
              <span className="user-name">Tadashi</span>
            </div>
            </div>
          </li>
          <li className="user-score">
            <div className="black-text-box user-score">187,392,939</div>
          </li>
        </ul>
        <ul
          className="flex flex-row justify-content-center align-items-center"
          id="followers-user"
        >
          {DetailFollowers.map((item, index) => {
            return (
              <li className="black-text-box flex flex-row ">
                <div className="flex flex-column justify-content-center align-items-center user-avatar">
                  <img src={item.img} id="user-avatar" />
                </div>
                <div className="flex flex-column justify-content-center pl-3 post-row">
                  <p className="comment-box mb-2">{item.name}</p>
                  <p className="comment-box">{item.posts} Post</p>
                </div>
                <div className="flex flex-column justify-content-center pl-3 post-row">
                  <p className="comment-box mb-2">{item.comments} Comments</p>
                  <p className="comment-box w-full">{item.likes} Likes</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default DetailBoards;
