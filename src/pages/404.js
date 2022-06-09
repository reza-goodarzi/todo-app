import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography color="error" variant="h1">
          404
        </Typography>
        <Typography color="error" variant="p">
          Page Not Found!
        </Typography>
      </Box>
      <Link href="/">
        <Button variant="text" color="primary">
          Back To Home
        </Button>
      </Link>
    </Box>
  );
}

export default NotFound;
