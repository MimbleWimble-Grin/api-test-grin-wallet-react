import "./css/index.css";
import React, { useState } from "react";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";
import {Link} from "react-router-dom";
import {APP_PREFIX_PATH} from 'configs/AppConfigs'

const VersusView = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  return (
    <>
      <div id="versus-view" className="w-full">
        <div className="flex flex-row justify-content-center align-items-center caption-text">
          Versus
        </div>
        <div className="flex flex-column justify-content-center align-items-center" id="versus-content">
          <div className="titan-bg-6 versus-card w-full">
            <div className="flex flex-row justify-content-center align-items-center caption pb-3">
              <p>Duration</p>
              <span className="Split" />
              <p>{value1}</p>
              <span className="Split" />
              <p>Hours</p>
            </div>
            <Slider value={value1} onChange={(e) => setValue1(e.value)} />
          </div>
          <div className="titan-bg-6 versus-card w-full">
            <div className="flex flex-row justify-content-center align-items-center caption pb-3">
              <p>Quota</p>
              <span className="Split" />
              <p>{value2}</p>
              <span className="Split" />
              <p>Followers</p>
            </div>
            <Slider value={value2} onChange={(e) => setValue2(e.value)} />
          </div>
          <div className="titan-bg-6 versus-card w-full">
            <div className="flex flex-row justify-content-center align-items-center caption pb-3    ">
              <p>Wager</p>
              <span className="Split" />
              <p>{value3}</p>
              <span className="Split" />
              <p>Grin</p>
            </div>
            <Slider value={value3} onChange={(e) => setValue3(e.value)} />
          </div>
          <div className="titan-bg-6 versus-card w-full">
            <span className="p-input-icon-left w-full">
              <i className="pi pi-search" />
              <InputText
                value={value4}
                onChange={(e) => setValue4(e.target.value)}
                placeholder="Search"
                className="w-full"
              />
            </span>
          </div>
          <div className="pt-4">
              <Link to={`/${APP_PREFIX_PATH}/versus/game/:id`}>
                <button className="ShadowBtn">Set</button>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VersusView;
