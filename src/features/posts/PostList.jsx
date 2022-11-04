import { useSelector } from "react-redux";
import { selectAllPost } from "./postSlice";

function PostList() {
  const posts = useSelector(selectAllPost)
  const RenderedPosts = posts.map(post =>
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0,100)}</p>
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
