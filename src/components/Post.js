import React from 'react'

import Avatar from '@material-ui/core/Avatar';

import './Post.css';
const Post = ({ imageURL, username, caption }) => {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avater"
                    alt={username}
                    src="/static/images/avatar/1.jpg"
                />
                <h3>{username}</h3>
            </div>

            <img className="post__img"
                src={imageURL}
                alt="userId-image" />
            <h4 className="post__text"><strong>{username}</strong> :{caption}</h4>
        </div>
    )
}

export default Post
