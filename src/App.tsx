import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Item from "./components/Post/index";
import { Post } from "./components/Post/Post.props";
import PostFormLayout from "./layouts/PostFormLayout/index";
import PostLayout from "./layouts/PostLayout";

function App() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [newPosts, setNewPosts] = React.useState<Post[]>([]);
  const [body, setBody] = React.useState<Post>();

  const addToPost = (obj: Post) => {
    setPosts([...posts, obj]);

    const array = [obj, ...newPosts];

    if (newPosts.length == 5) {
      setNewPosts(array.slice(0, 5));
    } else {
      setNewPosts(array);
    }
  };

  React.useEffect(() => {
    if (body) {
      addToPost(body);
    }
  }, [body]);

  return (
    <div className="container">
      <div className="App">
        <Header count={posts.length} />
        <div className="wrapper">
          <div className="left">
            <div className="form">
              <PostFormLayout handlerSubmit={setBody} title="Add Post" />
            </div>
            {posts.length > 0 && (
              <div>
                <PostLayout>
                  {posts.map((post: Post): any => (
                    <Item key={post._id} author={post.author} avatar={post.avatar} content={post.content} />
                  ))}
                </PostLayout>
              </div>
            )}
          </div>
          <div className="right">
            {newPosts.length > 0 && (
              <div>
                <PostLayout>
                  {newPosts.map((post: Post) => (
                    <Item key={post._id} author={post.author} avatar={post.avatar} content={post.content} />
                  ))}
                </PostLayout>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
