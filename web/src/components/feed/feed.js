import React from 'react'
import './feed.css'
import more from '../../assets/more.svg'
import like from '../../assets/like.svg'
import comment from '../../assets/comment.svg'
import send from '../../assets/send.svg'

export default ({ post }) => {
  return (
    <div className="feed-item">
      <article>
        <header className="feed-header">
          <div className="user-info">
            <span className="author">{post.author}</span>
            <span className="place">{post.place}</span>
          </div>
          <img src={more} alt="" />
        </header>
        <img src={`http://localhost:3333/files/${post.urlImageBig}`} height="300" alt="" />
        <footer>
          <div className="actions">
            <img src={like} alt="icon-like" />
            <img src={comment} alt="icon-comment" />
            <img src={send} alt="icon-send" />
          </div>
          <strong>{post.like} curtidas</strong>
          <p>{post.description}
            <strong className="hashtag">{post.hashtags}</strong>
          </p>
        </footer>
      </article>
    </div>
  )
}