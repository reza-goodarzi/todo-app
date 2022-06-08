import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";

function Login() {
  return (
    <form>
      <Typography
        color="primary"
        variant="h1"
        sx={{ fontWeight: "bold", textAlign: "center", m: 5 }}
      >
        LOGIN
      </Typography>
      <Grid
        container
        spacing={4}
        direction="column"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item sx={{ width: 400 }}>
          <TextField fullWidth variant="outlined" type="email" label="Email" />
        </Grid>

        <Grid item sx={{ width: 400 }}>
          <TextField
            fullWidth
            variant="outlined"
            type="password"
            label="Password"
            placeholder="Please Enter Your Password"
          />
        </Grid>

        <Grid item sx={{ width: 400 }}>
          <Button fullWidth variant="contained" sx={{ color: "#f8f8f8", p: 2 }} type="submit">
            LOGIN
          </Button>
          <Typography sx={{ mt: 1.5, textAlign: "center" }}>
            You don&apos;t have an account?
            <Link href="/signup">
              <Button sx={{ p: 0, textTransform: "capitalize" }}>Signup</Button>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
}

export default Login;
