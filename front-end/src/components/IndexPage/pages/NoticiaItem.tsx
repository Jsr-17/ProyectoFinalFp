import { Box, Button, Collapse, ListItem, Typography } from "@mui/material";

type Props = {
  notice: {
    title: string;
    description?: string;
  };
  isExpanded: boolean;
  onToggle: () => void;
  onSave: () => void;
};

export const NoticiaItem = ({
  notice,
  isExpanded,
  onToggle,
  onSave,
}: Props) => {
  return (
    <ListItem
      divider
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ flex: 1, minWidth: 0, cursor: "pointer" }} onClick={onToggle}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: isExpanded ? 1 : 0 }}
        >
          {notice.title}
        </Typography>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              color: "text.secondary",
              whiteSpace: "normal",
            }}
          >
            {notice.description?.trim() || "No hay descripción disponible."}
          </Typography>
        </Collapse>
      </Box>
      <Button
        variant="outlined"
        size="small"
        sx={{
          alignSelf: "center",
          whiteSpace: "nowrap",
          height: "fit-content",
          ml: "auto",
        }}
        onClick={onSave}
      >
        Guardar noticia
      </Button>
    </ListItem>
  );
};
