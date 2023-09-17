import "./header.css";

import { useSelector } from "react-redux/es/hooks/useSelector";
import PropTypes from "prop-types";
const Header = (props) => {
  const { isEdited, setEdit } = props;
  const handleOpenEdit = () => {
    setEdit(!isEdited);
  };
  const user = useSelector((state) => {
    return state.user;
  });
  return (
    <header style={{ backgroundColor: `${user.theme}` }}>
      <div className="info-container">
        <div className="info-edit" onClick={handleOpenEdit}>
          Edit
        </div>
        <img src={user.imgUrl} alt="" className="info-ava"></img>
        <div className="info-username">Name: {user.name}</div>
        <div className="info-age">Age: {user.age}</div>
        <div className="info-about">About me: {user.about}</div>
      </div>
    </header>
  );
};
Header.propTypes = {
  isEdited: PropTypes.bool.isRequired,
  setEdit: PropTypes.func.isRequired,
};
export default Header;
