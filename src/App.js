import logo from './logo.svg';
import './App.css';
import PostList from './features/posts/PostList';
import AddPostForm from './features/posts/AddPostForm';
function App() {
  return (
   <>
   <AddPostForm />
   <PostList />
   </>
  );
}

export default App;
