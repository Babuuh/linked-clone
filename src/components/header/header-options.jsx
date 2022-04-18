import React from "react";
import Avatar from '@mui/material/Avatar'
import "./header-options.css";


function HeaderOptions({avatar, Icon, title }) {
  return (
    <div className="header-options">
      {Icon && <Icon className="header-options_icon" />}
      {avatar && <Avatar className="header-options_icon" src={avatar} />}
      <h3 className="header-options_title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
