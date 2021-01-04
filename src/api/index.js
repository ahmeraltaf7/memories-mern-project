import axios from "axios";

const url = "https://memories-project-2.herokuapp.com/posts";

//To get all the posts 
export const fetchPosts = () => axios.get(url);

//To Post a post
export const createPost =(newPost) => axios.post(url, newPost)

//To Update a post
export const updatePost =(id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)

//To Delete a post
export const deletePost =(id) => axios.delete(`${url}/${id}`)

//To Like a post
export const likePost =(id) => axios.patch(`${url}/${id}/likePost`)
