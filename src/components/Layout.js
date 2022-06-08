import { Box, Typography, AppBar, Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          p: "20px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <AccountCircle sx={{ fontSize: 32 }} />
          <Typography>Reze Goodazi</Typography>
        </Box>

        <Button sx={{ color: "inherit" }}>Logout</Button>

        {/* <Box>
          <Button sx={{ color: "inherit" }}>Login</Button>
          <Button sx={{ color: "inherit" }}>Sign In</Button>
        </Box> */}
      </AppBar>
      <main>{children}</main>
    </>
  );
}

export default Layout;
