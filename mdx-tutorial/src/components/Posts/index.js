import React from 'react'
import Post from './Post'
import Banner from '../Banner'
const Posts = ({ posts, title }) => {
  return (
    <section className="posts">
      <h3 className="posts-title">{title}</h3>
      <posts-center>
        {/* posts columns */}
        <article>
          {posts.map(post => {
            return <Post key={post.id} {...post} />
          })}
        </article>
        {/* banner column */}
        <article>
          <Banner />
        </article>
      </posts-center>
    </section>
  )
}

export default Posts
