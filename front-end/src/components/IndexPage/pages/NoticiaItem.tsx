import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Collapse,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Props } from "../../../models";

export const NoticiaItem = ({
  notice,
  isExpanded,
  onToggle,
  onSave,
  onDelete,
  btn_text,
}: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ListItem
      divider
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "stretch" : "flex-start",
        width: "100%",
        gap: 2,
        px: 2,
        py: 4,
        transition: "background-color 0.3s, box-shadow 0.3s",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#f0f0f0",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          cursor: "pointer",
        }}
        onClick={onToggle}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: isMobile ? "1.1rem" : "1.25rem",
            mb: isExpanded ? 1 : 0,
            wordBreak: "break-word",
          }}
        >
          {notice.title}
        </Typography>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <Typography
            variant="body2"
            sx={{
              fontSize: "1rem",
              color: "text.secondary",
              whiteSpace: "pre-wrap",
            }}
          >
            {notice.description?.trim() || "No hay descripción disponible."}
          </Typography>
        </Collapse>
      </Box>

      {(onSave || onDelete) && (
        <Box
          sx={{
            alignSelf: isMobile ? "flex-end" : "center",
            mt: isMobile ? 1 : 0,
          }}
        >
          <Button
            variant="outlined"
            size="small"
            onClick={onSave || onDelete}
            sx={{
              whiteSpace: "nowrap",
              fontSize: "0.85rem",
            }}
          >
            {btn_text}
          </Button>
        </Box>
      )}
    </ListItem>
  );
};
