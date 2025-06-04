import {
  Box,
  Typography,
  CircularProgress,
  List,
  Skeleton,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { fetchNoticesFromGemini } from "../../../api/ia";
import { NoticiaItem } from "./NoticiaItem";
import { useSelector } from "react-redux";
import { arrayToPhrase } from "../../../functions";
import { Notice, NoticesResponse, SavedNoticeUser } from "../../../models";
import { noticeService } from "../../../api/services/noticeService";

export const Noticias = () => {
  const { saveNotice } = noticeService();
  const user = useSelector((state) => state.user.user);
  const { preferences } = user;

  const phrase = arrayToPhrase(preferences);
  const [btnTexts, setBtnTexts] = useState<{ [key: string]: string }>({});

  const [dataPromps, setDataPromps] = useState<NoticesResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<{
    [key: string]: number | null;
  }>({});

  const loadNotices = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchNoticesFromGemini(
        "Noticias sobre " +
          phrase +
          " hoy dame 2 noticias  de cada ambito y que no sean excesivamente largo"
      );
      setDataPromps(data);
    } catch (err) {
      setError("No se pudieron cargar las noticias.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotices();
  }, []);

  const handleToggle = (category: string, index: number) => {
    setExpandedIndex((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  const handleSave = async (notice: Notice, user_id: string) => {
    const data: SavedNoticeUser = { notice, user_id };
    await saveNotice(data);
    setBtnTexts((prev) => ({
      ...prev,
      [notice.title]: "Noticia guardada",
    }));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ textAlign: "right", mb: 2 }}>
        <Button variant="contained" onClick={loadNotices} disabled={loading}>
          Recargar noticias
        </Button>
      </Box>

      {loading ? (
        <>
          <Skeleton variant="text" width={200} height={40} />
          <Skeleton variant="rectangular" height={80} sx={{ mb: 1 }} />
          <Skeleton variant="rectangular" height={80} sx={{ mb: 1 }} />
        </>
      ) : error ? (
        <Typography sx={{ mt: 5, textAlign: "center", color: "error.main" }}>
          {error}
        </Typography>
      ) : !dataPromps ? (
        <Typography sx={{ mt: 5, textAlign: "center" }}>
          No hay noticias disponibles
        </Typography>
      ) : (
        Object.entries(dataPromps).map(([category, newsArray]) => (
          <Box key={category} sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", textTransform: "capitalize", mb: 1 }}
            >
              {category}
            </Typography>
            <List>
              {newsArray.map((news, index) => (
                <NoticiaItem
                  key={news.title + index}
                  notice={news}
                  isExpanded={expandedIndex[category] === index}
                  onToggle={() => handleToggle(category, index)}
                  onSave={() => handleSave(news, user.id)}
                  btn_text={btnTexts[news.title] || "Guardar noticia"}
                />
              ))}
            </List>
          </Box>
        ))
      )}
    </Box>
  );
};
