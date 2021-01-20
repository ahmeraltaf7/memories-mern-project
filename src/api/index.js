import axios from "axios";

const API = axios.create({baseURL: 'https://memories-mernn.herokuapp.com'})

//This will run before every api request
API.interceptors.request.use((req) =>{
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

//To get all the posts 
export const fetchPosts = () => API.get('/posts');

//To Post a post
export const createPost =(newPost) => API.post('/posts', newPost)

//To Update a post
export const updatePost =(id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)

//To Delete a post
export const deletePost =(id) => API.delete(`/posts/${id}`)

//To Like a post
export const likePost =(id) => API.patch(`/posts/${id}/likePost`)

//To Sign In
export const signIn =(formData) => API.post(`/user/signin`, formData)

//To Sign Up
export const signUp =(formData) => API.post(`/user/signup`, formData)
