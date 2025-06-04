import { Box, Button, Collapse, ListItem, Typography, useMediaQuery, useTheme } from "@mui/material";

type Props = {
  notice: {
    title: string;
    description?: string;
  };
  isExpanded: boolean;
  onToggle: () => void;
  onSave: () => void;
  btn: boolean;
};

export const NoticiaItem = ({
  notice,
  isExpanded,
  onToggle,
  onSave,
  btn,
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
        gap: 2,
        px: 2,
        py: 2,
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

      {btn && (
        <Box
          sx={{
            alignSelf: isMobile ? "flex-end" : "center",
            mt: isMobile ? 1 : 0,
          }}
        >
          <Button
            variant="outlined"
            size="small"
            onClick={onSave}
            sx={{
              whiteSpace: "nowrap",
              fontSize: "0.85rem",
            }}
          >
            Guardar noticia
          </Button>
        </Box>
      )}
    </ListItem>
  );
};
