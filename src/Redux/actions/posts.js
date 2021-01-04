import * as api from "../../api";
import {
  CREATE,
  FETCH_ALL,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/postContansts";

//Action Creators

//Getting posts
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

//Creating posts
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

//Updating posts
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({
      type: UPDATE,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

//Deleting posts
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({
      type: DELETE,
      payload: id,
    });
  } catch (error) {
    console.error(error);
  }
};

//Liking posts
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({
      type: LIKE,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};
