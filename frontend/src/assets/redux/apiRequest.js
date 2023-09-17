import { updateError, updateStart, updateSuccess } from "./useSlice";
import axios from "axios";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post("http://localhost:8000/api/v1/update", user);
    dispatch(updateSuccess(res.data));
  } catch (e) {
    dispatch(updateError());
  }
};
