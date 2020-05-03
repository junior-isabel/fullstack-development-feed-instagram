import React, { useState, useEffect } from 'react'
import './feed.css'
import Feed from '../../components/feed/feed'
import { listPost } from '../../api/services/postService'
export default (props) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchData () {
      const list = await listPost()
      console.log(list)
      setPosts(list)
    }

    fetchData()
  }, [])
  return (
    <section className="feed-page">
      {
        posts.map(post => <Feed key={post.id} post={post}/>)
      }
    </section>
  )
}