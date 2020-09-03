import React, { useReducer, useContext } from "react";
import axios from "axios";
import PostsContext from "./postsContext";
import PostsReducer from "./postsReducer";
import alertContext from "../alert/alertContext";
import { GET_POSTS, GET_POST, POST_ERROR, SET_LOADING } from "../types";

const PostsState = (props) => {
  const { setAlert } = useContext(alertContext);

  const initialState = {
    posts: [],
    post: null,
    loading: false,
    error: {},
  };

  const [state, dispatch] = useReducer(PostsReducer, initialState);

  //   Get Top Posts
  const getTopPosts = async () => {
    try {
      dispatch({ type: SET_LOADING });

      const res = await axios.get("http://localhost:8000/api/questions");
      console.log("getTopPosts: ", res.data);

      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      // setAlert((err.response.data.message = "error message "), "danger");

      // dispatch({
      //   type: POST_ERROR,
      //   payload: { msg: err.response.statusText, status: err.response.status },
      // });
    }
  };

  //   Get All Posts
  const getPosts = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const res = await axios.get("http://localhost:8000/api/questions");
      console.log("getPosts: ", res.data);

      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    } catch (err) {
      // setAlert((err.response.data.message = "error message "), "danger");

      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  // Get post
  const getPost = async (slug) => {
    dispatch({ type: SET_LOADING });

    try {
      const res = await axios.get(
        `http://localhost:8000/api/questions/${slug}`
      );
      console.log("getPost: ", res.data);

      dispatch({
        type: GET_POST,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      // setAlert((err.response.data.message = "error message "), "danger");

      // dispatch({
      //   type: POST_ERROR,
      //   payload: { msg: err.response.statusText, status: err.response.status },
      // });
    }
  };

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        post: state.post,
        loading: state.loading,
        getTopPosts,
        getPosts,
        getPost,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsState;
