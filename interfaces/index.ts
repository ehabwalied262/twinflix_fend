export interface Movie {
    id: number;
    title: string;
    poster: string;
    year: string;
    genre: string;
    description: string;
  }
  
  export interface Show {
    id: number;
    title: string;
    poster: string;
    year: string;
    genre: string;
    description: string;
  }
  
  export interface User {
    email: string,
    username: string,
    profile_picture_url : string,
  }

  export interface Post {
    id: number,
    content: string,
  
  }