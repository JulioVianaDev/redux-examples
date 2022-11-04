import { useSelector,useDispatch } from "react-redux";
import { selectAllPost,getPostStatus,getPostErrors,fetchPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import { useEffect } from "react";

import ReactionButtons from "./ReactionButtons";
import PostExecerp from "./PostExecerp";

function PostList() {
  const dispatch = useDispatch();


  const posts = useSelector(selectAllPost)
  const error = useSelector(getPostErrors)
  const postStatus = useSelector(getPostStatus)
  const ordenedPost = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))
  
  useEffect(()=>{
    if(postStatus === 'idle'){
      dispatch(fetchPosts())
    }
  },[postStatus,dispatch])
  const RenderedPosts = ordenedPost.map(post =>
    <PostExecerp post={post}/>
  )

  let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostExecerp key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return(
      <>
      <section>
        <h2>Posts</h2>
        {content}
      </section>
      </>
    )
}

export default PostList
