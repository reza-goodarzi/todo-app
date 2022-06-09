/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Typography, AppBar, Button, Backdrop, CircularProgress } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/user/user-actions";
import { useEffect, useState } from "react";

function Layout({ children, title, desc }) {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.user);

  const logoutHandler = () => {
    dispatch(logoutUser());
    setLoading(true);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {token && user && (
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
            <Typography>{user.name}</Typography>
          </Box>

          <Button sx={{ color: "inherit" }} onClick={logoutHandler}>
            Logout
          </Button>
        </AppBar>
      )}
      <main>{children}</main>

      <Backdrop open={loading}>
        <CircularProgress size="32px" />
      </Backdrop>
    </>
  );
}

export default Layout;
