import { Avatar } from "@mui/material";
import React from "react";
import "./sidebar.css";
import banner from "./banner.jpg";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={banner} alt="" />
        <Avatar className="sidebar_avatar" />
        <h2>Kihara Njoroge</h2>
        <h4>kiharajoseph72@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">10</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">254</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("ReactJS")}
        {recentItem("softwareengineering")}
        {recentItem("Django")}
        {recentItem("Python")}
        {recentItem("Design")}
        {recentItem("JavaScript")}
      </div>
    </div>
  );
}

export default Sidebar;
