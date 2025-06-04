import { SavedNoticeUser } from "../../models";
import { api } from "../api";

export const noticeService = () => {
  const saveNotice = async (data: SavedNoticeUser) =>
    api.post("/saveNotice.php", data);
  const getNoticesFav = async (user_id: string) =>
    api.post("/getNoticesFav.php", { user_id });
  const deleteNoticeFav = (user_id: string, notice_id: number) => {
    return api.post("/deleteNotices.php", {
      user_id,
      notice_id,
    });
  };

  return {
    saveNotice,
    getNoticesFav,
    deleteNoticeFav,
  };
};
