import "./css/index.css";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import RosterImg from "constants/image/app/Roster";
import { InputSwitch } from "primereact/inputswitch";

const RosterSearch = () => {
  const [value3, setValue3] = useState("");
  const [checked2, setChecked2] = useState(true);
  return (
    <>
      <div id="roster-search-view" className="w-full">
        <div id="search-box" className="titan-bg-4">
          <div className="w-full">
            <span className="p-input-icon-left w-full">
              <i className="pi pi-search" />
              <InputText
                value={value3}
                onChange={(e) => setValue3(e.target.value)}
                placeholder="Search"
                className="w-full"
              />
            </span>
          </div>
          <div className="search-content">
            <div className="flex flex-row justify-content-center align-items-center titan-bg-6 useritem">
              <Avatar
                image={RosterImg.tadashi}
                className="mr-2"
                size="xlarge"
                shape="circle"
              />
              <p>KendallJenner</p>
              <div className="titan-text-2 pl-2 pr-2 flex flex-column justify-content-center align-items-center">
                <p>Engagement Rate (ER) : 13.4 %</p>
                <p>Followers 1,130,764 </p>
              </div>
              <InputSwitch
                checked={checked2}
                onChange={(e) => setChecked2(e.value)}
              />
            </div>
            <div className="flex flex-row justify-content-center align-items-center titan-bg-6 useritem">
              <Avatar
                image={RosterImg.tadashi}
                className="mr-2"
                size="xlarge"
                shape="circle"
              />
              <p>KendallJenner</p>
              <div className="titan-text-2 pl-2 pr-2 flex flex-column justify-content-center align-items-center">
                <p>Engagement Rate (ER) : 13.4 %</p>
                <p>Followers 1,130,764 </p>
              </div>
              <InputSwitch
                checked={checked2}
                onChange={(e) => setChecked2(e.value)}
              />
            </div>
            <div className="flex flex-row justify-content-center align-items-center titan-bg-6 useritem">
              <Avatar
                image={RosterImg.tadashi}
                className="mr-2"
                size="xlarge"
                shape="circle"
              />
              <p>KendallJenner</p>
              <div className="titan-text-2 pl-2 pr-2 flex flex-column justify-content-center align-items-center">
                <p>Engagement Rate (ER) : 13.4 %</p>
                <p>Followers 1,130,764 </p>
              </div>
              <InputSwitch
                checked={checked2}
                onChange={(e) => setChecked2(e.value)}
              />
            </div>
            <div className="flex flex-row justify-content-center align-items-center titan-bg-6 useritem">
              <Avatar
                image={RosterImg.tadashi}
                className="mr-2"
                size="xlarge"
                shape="circle"
              />
              <p>KendallJenner</p>
              <div className="titan-text-2 pl-2 pr-2 flex flex-column justify-content-center align-items-center">
                <p>Engagement Rate (ER) : 13.4 %</p>
                <p>Followers 1,130,764 </p>
              </div>
              <InputSwitch
                checked={checked2}
                onChange={(e) => setChecked2(e.value)}
              />
            </div>
          </div>
        </div>
        <div id="roster-user-list" className="titan-bg-4">
            <div className="flex flex-column justify-content-center align-items-center titan-bg-7" id="roster-caption">
                <p>Roster</p>
                <p>40,000,000</p>
            </div>
        <div className="search-content">
          <div className="flex flex-row justify-content-center align-items-center titan-bg-3 useritem">
            <Avatar
              image={RosterImg.tadashi}
              className="mr-2"
              size="xlarge"
              shape="circle"
            />
            <p>KendallJenner</p>
            <div className="titan-text-2 pl-2 pr-2 flex flex-column justify-content-center align-items-center">
              <p>Engagement Rate (ER) : 13.4 %</p>
              <p>Followers 1,130,764 </p>
            </div>
            <InputSwitch
              checked={checked2}
              onChange={(e) => setChecked2(e.value)}
            />
          </div>
          <div className="flex flex-row justify-content-center align-items-center titan-bg-3 useritem">
            <Avatar
              image={RosterImg.tadashi}
              className="mr-2"
              size="xlarge"
              shape="circle"
            />
            <p>KendallJenner</p>
            <div className="titan-text-2 pl-2 pr-2 flex flex-column justify-content-center align-items-center">
              <p>Engagement Rate (ER) : 13.4 %</p>
              <p>Followers 1,130,764 </p>
            </div>
            <InputSwitch
              checked={checked2}
              onChange={(e) => setChecked2(e.value)}
            />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default RosterSearch;
