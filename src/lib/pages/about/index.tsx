import { Box, Typography } from "@mui/material";

export default function About() {
    return (
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Typography variant="h3">About Us</Typography>
        <Typography variant="body1">This is a simple MUI-based About Us page.</Typography>
      </Box>
    );
  }