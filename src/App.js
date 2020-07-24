import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './components/Post';
import Header from './components/Header';

import userFetchData from './Hook/useFetchData'

function App() {
  const { posts, loading } = userFetchData();

  // no need for a state here as the state is already in the reducer,
  // you can move the sample data to the initial state in reducer

  // const [Posts, setPosts] = useState([
  //   { id: "1", username: "Mohammed Mamdouh", caption: "This is react Native", imageURL: "https://img-a.udemycdn.com/course/750x422/2833120_374b_6.jpg" },
  //   { id: "2", username: "Omar Mamdouh", caption: "the is strips API", imageURL: "https://api-prod.strapi.io/uploads/cover-react-cms_09dce2416d.jpeg" },
  //   { id: "3", username: "Amr Mamdouh", caption: "This is React", imageURL: "https://hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg" },

  // ]);

  // useEffect(() => {
  //   console.log('posts >', posts);
  //   setPosts(posts)
  // }, [posts])

  console.log(loading)

  return (
    <div className="app">
      <Header />
      {loading && <div>loading...</div>}
      {posts.map(post => {
        return <Post key={post.id}
          username={post.username}
          caption={post.caption}
          imageURL={post.imageURL}
        />
      })}
    </div>
  );
}

export default App;
