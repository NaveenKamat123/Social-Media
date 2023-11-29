import { createContext, useCallback, useReducer, useState } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
    Fetching:false,

});



const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter((post) => {
            return post.id !== action.payload.postId;

        })


    }

    else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currPostList];

    }

    else if (action.type === 'ADD_INITIALS_POST') {
        newPostList = action.payload.posts;


    }

    return newPostList;
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, []);
    const [Fetching, setFetching] = useState(false);

    // useEffect(() => {
    //     setFetching(true);
    //     const Controller = new AbortController();
    //     const signal = Controller.signal;

    //     fetch('https://dummyjson.com/posts', { signal }).then((response) => response.json()).then((json) => {

    //         addInitalsPost(json.posts);
    //         setFetching(false);


    //     });

    //     return (() => {

    //         Controller.abort();
    //     })


    // }, []);





    const addPost = (post) => {

        dispatchPostList({
            type: 'ADD_POST',
            payload: post,
        })

    };
    const addInitalsPost = (posts) => {


        dispatchPostList({
            type: 'ADD_INITIALS_POST',
            payload: posts,


        }
        )

    };

    const deletePost = useCallback((postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,

            },
        })

    }, [dispatchPostList]);






    return (<PostList.Provider value={{ postList, addPost, deletePost, Fetching }}>

        {children}

    </PostList.Provider>)
}

// const DEFAULT_POST_LIST =;

export default PostListProvider




