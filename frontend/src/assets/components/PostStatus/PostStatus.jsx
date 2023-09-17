import React from "react";
import InputValue from "../InputValue/InputValue";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";
const PostStatus = (props) => {
  const { setOpenPost } = props;
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const [title, setTitle] = useState("Add a title");
  const [des, setDes] = useState("This is a description");
  const [selectedId, setSelectId] = useState(0);
  const dispatch = useDispatch();
  const handlePost = () => {
    setOpenPost(false);
    const newPost = {
      title: title,
      description: des,
      tag: selectedId,
    };
    console.log(newPost);
    dispatch(createPost(newPost));
  };
  return (
    <React.Fragment>
      <section className="flex flex-col rounded-xl border-1 bg-slate-300 text-black mb-2 flex-1">
        <div className="text-semibold text-xl self-end mr-3 mt-2 mb-1">
          <p onClick={handlePost} className="select-none cursor-pointer">
            Post
          </p>
        </div>
        <InputValue
          classValue="ml-3 mr-3 mb-2 mt-2 h-[80px]"
          data={title}
          type="textarea"
          lableName="Title"
          setData={setTitle}
        ></InputValue>
        <InputValue
          classValue="ml-3 mr-3 mb-2 mt-2 h-[80px]"
          data={des}
          type="textarea"
          lableName="Description"
          setData={setDes}
        ></InputValue>
        <label className="font-semibold mt-3 mb-1">Tags</label>
        <div className="flex flex-row justify-around">
          {tags.map((tag, index) => {
            return (
              <button
                onClick={() => setSelectId(index)}
                key={index}
                className={`${
                  selectedId === index ? "bg-black" : "bg-slate-400"
                } cursor-pointer text-white rounded-lg w-[90px] hover:bg-black border-none outline-none `}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default PostStatus;
