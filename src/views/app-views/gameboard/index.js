import "./css/index.css";
import { InputText } from "primereact/inputtext";
import React,{useState} from "react";

const GameBoardView = () => {
    const [value4,setValue4] = useState('');
  return (
    <>
      <div
        id="game-board-view"
        className="w-full flex flex-column justify-content-center align-items-center"
      >
        <div className="titan-bg-6 flex flex-column justify-content-center align-items-center w-full memo-view">
          <div className="flex flex-row">
            <p>Duration: 44 hours</p>
            <p>Wager: 10,000 Grin</p>
          </div>
          <p>Quota: 40,000,000 Followers</p>
          <p>@RainMaker Vs Tadashi</p>
        </div>
        <span className="p-input-icon-left w-full mt-5">
          <i className="pi pi-search" />
          <InputText
            value={value4}
            onChange={(e) => setValue4(e.target.value)}
            placeholder="Search"
            className="w-full"
          />
        </span>
        <div className="titan-bg-6 w-full mt-5" id="search-result">

        </div>
        <div className="pt-5">
            <button className="ShadowBtn">Send</button>
        </div>
      </div>
    </>
  );
};

export default GameBoardView;
