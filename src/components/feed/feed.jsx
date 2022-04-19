import React, { useState } from "react";
import "./feed.css";
import InputOptions from "./inputOptions";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventIcon from "@mui/icons-material/Event";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import avatar from "./avatar.png";
import Avatar from "@mui/material/Avatar";
import Post from "./posts/post";

function Feed() {
  const [posts, setPosts] = useState([]);

const sendPost = e => {
  
}

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Avatar className="search-avatar" src={avatar} />
          <div className="search_input">
            <input type="text" placeholder="Start a post" />
            <button onClick={sendPost} type="submit">Send</button>
          </div>
        </div>
        <div className="feed_inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5f9" />
          <InputOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#5f9b41"
          />
          <InputOptions Icon={EventIcon} title="Event" color="#e7a33e" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#fcb9f9"
          />
        </div>
      </div>

      {/* Posts */}

      {posts.map((post) =>(
        <Post />
      ))}
      <Post
        name="Kihara Njoroge"
        description="Test Post"
        message="This actually works"
      />
    </div>
  );
}

export default Feed;
