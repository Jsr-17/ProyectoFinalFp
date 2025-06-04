import { SavedNoticeUser } from "../../models";
import { api } from "../api";

export const noticeService = () => {


  const saveNotice = async (data: SavedNoticeUser) => api.post("/saveNotice.php", data);
  const getNoticesFav = async (user_id:string)=> api.post("/getNoticesFav.php",{user_id});
  
  return {
    saveNotice,
    getNoticesFav
  };
};
