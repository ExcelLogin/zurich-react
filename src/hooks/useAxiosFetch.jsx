import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useNavigate, useLocation } from "react-router-dom";



const useAxiosFetch = (dataUrl) => {
     const [data, setData] = useState('');
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
     const setUser = useStoreActions((actions) => actions.setUser);

    useEffect(() => {
        let isMounted = true; 
        const controller = new AbortController();

        const getUser = async (url) => {
            setIsLoading(true);
            try {
                const response = await axiosPrivate.get(url, {
                    signal: controller.signal
                });
                console.log(response.data.data);
                 const data = response.data.data
                setData(data)
                // setUser(data)
               
                
            } catch (err) {
                console.error(err);
                  if (isMounted) {
                    setFetchError(err.message);
                    setData([]);
                }
                navigate('/Userdashboard', { state: { from: location }, replace: true });
            }finally {
                isMounted && setIsLoading(false);
            }
        }

        getUser(dataUrl);

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [dataUrl])

       return { data, fetchError, isLoading };
}

export default useAxiosFetch;
























//  import { createStore, action, thunk, computed } from "easy-peasy";
// import api from './api/posts';

// export default createStore({
//     posts: [],
//     setPosts: action((state, payload) => {
//         state.posts = payload;
//     }),
//     postTitle: '',
//     setPostTitle: action((state, payload) => {
//         state.postTitle = payload;
//     }),
//     postBody: '',
//     setPostBody: action((state, payload) => {
//         state.postBody = payload;
//     }),
//     editTitle: '',
//     setEditTitle: action((state, payload) => {
//         state.editTitle = payload;
//     }),
//     editBody: '',
//     setEditBody: action((state, payload) => {
//         state.editBody = payload;
//     }),
//     search: '',
//     setSearch: action((state, payload) => {
//         state.search = payload;
//     }),
//     searchResults: [],
//     setSearchResults: action((state, payload) => {
//         state.searchResults = payload;
//     }),
//     postCount: computed((state) => state.posts.length),
//     getPostById: computed((state) => {
//         return (id) => state.posts.find(post => (post.id).toString() === id);
//     }),
//     savePost: thunk(async (actions, newPost, helpers) => {
//         const { posts } = helpers.getState();
//         try {
//             const response = await api.post('/posts', newPost);
//             actions.setPosts([...posts, response.data]);
//             actions.setPostTitle('');
//             actions.setPostBody('');
//         } catch (err) {
//             console.log(`Error: ${err.message}`);
//         }
//     }),
//     deletePost: thunk(async (actions, id, helpers) => {
//         const { posts } = helpers.getState();
//         try {
//             await api.delete(`/posts/${id}`);
//             actions.setPosts(posts.filter(post => post.id !== id));
//         } catch (err) {
//             console.log(`Error: ${err.message}`);
//         }
//     }),
//     editPost: thunk(async (actions, updatedPost, helpers) => {
//         const { posts } = helpers.getState();
//         const { id } = updatedPost;
//         try {
//             const response = await api.put(`/posts/${id}`, updatedPost);
//             actions.setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
//             actions.setEditTitle('');
//             actions.setEditBody('');
//         } catch (err) {
//             console.log(`Error: ${err.message}`);
//         }
//     })
// });