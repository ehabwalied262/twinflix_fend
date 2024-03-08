import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Post } from './interfaces';

// Types
type User = {
    id: number;
    createdAt: string;
    updatedAt: string;
    email: string;
    username: string;
    profile_picture_url: string;
    token: string;
};

type UserStoreState = {
    sidebarSelectedKey: string;
    setSidebarSelectedKey: (key: string) => void;
    navbarSelectedKey: string;
    setNavbarSelectedKey: (key: string) => void;
    user: User;
    setUser: (userData: User) => void;
};

// User Store Persistence
const useStore = create(persist<UserStoreState>((set) => ({
  sidebarSelectedKey: 'feed',
  setSidebarSelectedKey: (key) => set({ sidebarSelectedKey: key }),
  navbarSelectedKey: 'movies',
  setNavbarSelectedKey: (key) => set({ navbarSelectedKey: key }),
  user: {
      id: 0,
      createdAt: '',
      updatedAt: '',
      email: '',
      username: '',
      profile_picture_url: '',
      token: '',
  },
  setUser: (userData) => set({ user: userData }),
}), { name: 'user_info' }));





type UserPostsStore = {
    posts: Post[];
    addPost: (type: PostType, content: string, image: string, tags: string[]) => void;
};

// Post Store
const usePostStore = create(persist<UserPostsStore>((set) => ({
  posts: [],
  addPost: (type, content, image, tags) => set((state) => {
    // Create a new post object
    const newPost = { id: state.posts.length + 1, type, content, image, tags };
    // Convert the new post object to a string before storing
    const newPostString = JSON.stringify(newPost);
    // Parse the existing posts into an array of strings
    const postsString = state.posts.map(post => JSON.stringify(post));
    // Add the new post string to the array
    postsString.push(newPostString);
    // Update the state with the new array of post strings
    return {
      posts: postsString.map(postStr => JSON.parse(postStr))
    };
  })
}), { name: 'post_info' }));


export { useStore, usePostStore };