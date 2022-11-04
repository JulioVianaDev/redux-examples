import { useSelector } from "react-redux";
import { selectAllPost } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
function PostList() {
  const posts = useSelector(selectAllPost)
  const ordenedPost = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))
  const RenderedPosts = ordenedPost.map(post =>
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0,100)}</p>
      <p>
        <PostAuthor userId={post.userId}/>
        <TimeAgo timestamp={post.date}/>

      </p>
      <ReactionButtons post={post}/>
    </article>
  )
    return(
      <>
      <section>
        <h2>Posts</h2>
        {RenderedPosts}
      </section>
      </>
    )
}

export default PostList
