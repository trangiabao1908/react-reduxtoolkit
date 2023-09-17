import React from "react";

const Footer = (props) => {
  const { onPost, isOpennedPost } = props;
  return (
    <React.Fragment>
      <div
        onClick={onPost}
        className=" cursor-pointer select-none h-[60px] bg-gray-200 text-black text-4xl items-center justify-center flex"
      >
        {isOpennedPost ? "x" : "+"}
      </div>
    </React.Fragment>
  );
};

export default Footer;
