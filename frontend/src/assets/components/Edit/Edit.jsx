import React, { useState } from "react";
import "./edit.css";
import InputValue from "../InputValue/InputValue";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

import { updateUser } from "../../redux/apiRequest";
function Edit(props) {
  const { setEdit } = props;
  const images = [
    "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    "https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
    "https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
    "  https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
    " https://i.redd.it/7ipyf6pvqac61.png",
    " https://i.redd.it/ksmb0m02ppy51.png",
    "  https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
    "https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990",
  ];
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [name, setName] = useState("Gia Bao");
  const [age, setAge] = useState("21");
  const [about, setAbout] = useState("Hok co gi");
  const [img, setImg] = useState(
    "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a"
  );
  const [colorTheme, setColorTheme] = useState("#ff9051");
  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const UpdateInfo = {
      name: name,
      age: age,
      about: about,
      imgUrl: img,
      theme: colorTheme,
    };
    updateUser(UpdateInfo, dispatch);
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <section className="flex flex-col items-center bg-red-200">
          <button className="text-gray-500 font-bold border-none cursor-pointer self-end mr-3 mt-2">
            SAVE
          </button>
          <div className="mt-4 font-bold text-2xl">Edit Profile</div>
          <div className="flex flex-col w-[50%] mt-2">
            <InputValue
              lableName="Display name"
              data={user.name}
              setData={setName}
            ></InputValue>
            <InputValue
              lableName="Age"
              data={user.age}
              setData={setAge}
            ></InputValue>
            <InputValue
              lableName="About"
              data={user.about}
              type="textarea"
              setData={setAbout}
            ></InputValue>
            <label className="font-semibold mt-3 mb-1">Profile Picture</label>
            <div className="flex-wrap flex">
              {images.map((image, index) => {
                return (
                  <React.Fragment key={index}>
                    <img
                      onClick={(e) => setImg(e.target.src)}
                      src={image}
                      alt=""
                      className="hover:bg-black h-[130px] w-[90px] bg-slate-100 mb-3 mr-3 cursor-pointer rounded-2xl p-[2px] object-cover overflow-hidden border"
                    ></img>
                  </React.Fragment>
                );
              })}
            </div>
            <div className="flex flex-row items-center">
              <label className="font-semibold mt-3 mb-1">Theme</label>
              <input
                type="color"
                className="ml-[4rem] border-none "
                onChange={(e) => setColorTheme(e.target.value)}
              ></input>
            </div>
          </div>
        </section>
      </form>
    </React.Fragment>
  );
}

export default Edit;
