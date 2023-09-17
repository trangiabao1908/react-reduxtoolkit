import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
const Post = () => {
  const posts = useSelector((state) => state.post.posts);
  return (
    <React.Fragment>
      <section className="flex-1 flex flex-col min-h-[500px] max-h-[1000px]">
        {posts.slice(1).map((post, index) => {
          return (
            <div
              key={index}
              className="bg-gray-600 mt-1 mb-2 pl-[2rem] flex flex-col "
            >
              <p className="mt-2 text-xl">{post.title}</p>
              <p className="text-sm mt-2">{post.description}</p>
              <p className="bg-cyan-400  text-sm rounded-xl text-center w-[70px] mt-2 mb-2">
                {tags[post.tag]}
              </p>
            </div>
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default Post;
