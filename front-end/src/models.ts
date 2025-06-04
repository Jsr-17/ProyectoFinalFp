export interface Notice {
    title: string;
    description: string;
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export interface SavedNoticeUser {
    notice: Notice;
    user_id: string;
  }
  
  export type NoticesResponse = {
    [category: string]: Notice[];
  };