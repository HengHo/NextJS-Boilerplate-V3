import { Box, Typography } from "@mui/material";

export default function Home() {
    return (
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Typography variant="h3">Welcome to the Home Page</Typography>
        <Typography variant="body1">This is a simple MUI-based home page.</Typography>
      </Box>
    );
  }