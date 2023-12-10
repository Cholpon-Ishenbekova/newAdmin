import React from "react";
import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
// import Chart from '../../components/chart/Chart'

const Single = () => {
  return (
    <div className="single">
      <div className="singleContainer">
        <Navbar />
        <h1 className="title">Information</h1>
        <div className="left">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Profile"
              className="itemImg"
            />
            <div className="details">
              <h1 className="itemTitle">Parnell Swaden</h1>
              <div className="detailItem">
                <span className="itemKey">Email: </span>
                <span className="itemValue">pswaden0@hubpages.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Department: </span>
                <span className="itemValue">Kitchen</span>
              </div>
              <div className="detailItem">
                <span className="itemKey"> Address: </span>
                <span className="itemValue">Kyrgyzstan, Naryn, Lenin 10</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Pnone: </span>
                <span className="itemValue">+52(239)323-3560</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <div className="details">
              <h1 className="itemTitle">Statitics</h1>
              <ul>
                <li>Day</li>
                <li>Week</li>
                <li>Month</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
