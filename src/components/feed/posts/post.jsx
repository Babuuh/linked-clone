import React from 'react';
import './post.css';
import { Avatar } from '@mui/material';
import InputOptions from '../inputOptions';
import {ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material';


function Post({name, description, message, photoURL}) {
  return (
   <div className="post">
       <div className="post_header">
           <Avatar />
        <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
       </div>
       <div className="post_body">
           <p>{message}</p>
       </div>

       <div className="post_buttons">
           <InputOptions Icon={ThumbUpAltOutlined} title="like"/>
           <InputOptions Icon={ChatOutlined} title="Comment" />
           <InputOptions Icon={ShareOutlined} title="Share" />
           <InputOptions Icon={SendOutlined} title="send" />
       </div>
   </div>
  )
}

export default Post