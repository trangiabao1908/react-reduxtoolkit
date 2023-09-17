import React, { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header/Header";
import Edit from "./assets/components/Edit/Edit";
import { useSelector } from "react-redux";
import Footer from "./assets/components/Footer/Footer";
import PostStatus from "./assets/components/PostStatus/PostStatus";
import Post from "./assets/components/PostStatus/Post";

function App() {
  const [isEdited, setEdit] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  const [isOpennedPost, setOpenPost] = useState(false);

  const handleOpenPost = () => {
    setOpenPost(!isOpennedPost);
  };
  return (
    <React.Fragment>
      <div className="App relative">
        {isEdited ? (
          <Edit setEdit={setEdit}></Edit>
        ) : !isEdited && !isOpennedPost ? (
          <React.Fragment>
            <Header isEdited={isEdited} setEdit={setEdit}></Header>
            {pending && (
              <p className="text-white text-center text-2xl">Loading....</p>
            )}
            {!isEdited && error && (
              <p className="text-red-500 text-center text-2xl">
                Error when fetching API
              </p>
            )}
            <div>
              <Post></Post>
            </div>
            <Footer
              onPost={handleOpenPost}
              isOpennedPost={isOpennedPost}
              setOpenPost={setOpenPost}
            ></Footer>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Header isEdited={isEdited} setEdit={setEdit}></Header>
            <PostStatus setOpenPost={setOpenPost}></PostStatus>
            <Footer
              onPost={handleOpenPost}
              isOpennedPost={isOpennedPost}
              setOpenPost={setOpenPost}
            ></Footer>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
