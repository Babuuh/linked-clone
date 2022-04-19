import React, { useEffect, useState } from "react";
import "./feed.css";
import InputOptions from "./inputOptions";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventIcon from "@mui/icons-material/Event";
import CreateIcon from "@mui/icons-material/Create";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./posts/post";
import { db } from "../../firebase/firebase.utils";
import firebase from "firebase/compat/app";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Kihara Njoroge",
      description: "this is a test",
      message: input,
      photoURL: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <form>
            <CreateIcon />
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
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

      {posts.map(({ id, data: { name, description, message, photoURL } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoURL={photoURL}
        />
      ))}
    </div>
  );
}

export default Feed;
