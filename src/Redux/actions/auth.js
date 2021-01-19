import * as api from "../../api";
import { AUTH } from "../constants/postContansts";

//Action Creators

//SIGN IN
export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({
      type: AUTH,
      data,
    });
    history.push("/");
  } catch (error) {
    console.error(error);
  }
};

//SIGN UP
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({
      type: AUTH,
      data,
    });
    history.push("/");
  } catch (error) {
    console.error(error);
  }
};
