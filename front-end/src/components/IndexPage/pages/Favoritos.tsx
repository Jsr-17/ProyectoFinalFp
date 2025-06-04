import { Box, Typography, List } from "@mui/material";
import { noticeService } from "../../../api/services/noticeService";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Notice } from "../../../models";
import { NoticiaItem } from "./NoticiaItem";

export const Favoritos = () => {
  const { getNoticesFav, deleteNoticeFav } = noticeService();
  const user = useSelector((state) => state.user.user);
  const [noticesArr, setNoticesArr] = useState<Notice[]>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { id } = user;

  const handleGetNotices = async (user_id: string) => {
    try {
      const response = await getNoticesFav(user_id);
      const { notices } = response.data;
      setNoticesArr(notices);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteNotice = async (notice_id: number) => {
    try {
      await deleteNoticeFav(id, notice_id);
      setNoticesArr((prev) => prev.filter((n) => n.id !== notice_id));
    } catch (error) {
      console.log("Error al eliminar la noticia:", error);
    }
  };

  const handleToggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    if (id) handleGetNotices(id);
  }, [id]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Tus noticias favoritas
      </Typography>

      {noticesArr.length === 0 ? (
        <Typography sx={{ textAlign: "center" }}>
          No tienes noticias guardadas aún.
        </Typography>
      ) : (
        <List>
          {noticesArr.map((news, index) => (
            <NoticiaItem
              key={news.title + index}
              notice={news}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
              onDelete={() => handleDeleteNotice(news.id)}
              btn_text="Eliminar"
            />
          ))}
        </List>
      )}
    </Box>
  );
};
