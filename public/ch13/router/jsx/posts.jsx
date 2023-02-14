const {Link} = require('react-router')
const React = require('react')
const post = require('./post')

module.exports = function Posts(props) {
  return <div> Posts
    <ol>
      {props.route.posts.map((post, index)=><li key={post.slug}><Link to={`/posts/${post.slug}`} >{post.title}</Link></li>)}
    </ol>
  </div>
}