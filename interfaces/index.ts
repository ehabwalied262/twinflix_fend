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

  
  type PostType = 'Review' | 'Meme' | 'Recommendation' | 'Suggestion' | 'Other';

  export type Post = {
    id: number;
    type: PostType;
    content: string;
    image: string;
    tags: string[]
};