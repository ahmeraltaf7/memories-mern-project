import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import { createPost, updatePost } from "../../Redux/actions/posts";
import FileBase from "react-file-base64";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const userName = JSON.parse(localStorage.getItem("profile"));

  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  //return a single post of currentId
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // if post contain data then it will populate form fields
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: userName?.result?.name })
      );
    } else {
      dispatch(createPost({ ...postData, name: userName?.result?.name }));
    }
    clear();
  };

  const clear = () => {
    //as soon as cuurentId will be null the useEffect in App.js run to get all the post
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  if (!userName?.result?.name) {
    return(
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign in to create your memories and like other's memories.
        </Typography>
      </Paper>
    )
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Memory
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (Comma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
