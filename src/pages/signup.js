import { Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";

function Signup() {
  return (
    <form>
      <Typography
        color="primary"
        variant="h1"
        sx={{ fontWeight: "bold", textAlign: "center", m: 5 }}
      >
        SIGNUP
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
          <TextField
            fullWidth
            variant="outlined"
            type="text"
            label="Full Name"
            placeholder="Please enter your full name"
          />
        </Grid>

        <Grid item sx={{ width: 400 }}>
          <TextField
            fullWidth
            variant="outlined"
            type="email"
            label="Email"
            placeholder="Please enter your email"
          />
        </Grid>

        <Grid item sx={{ width: 400 }}>
          <TextField
            fullWidth
            variant="outlined"
            type="password"
            label="Password"
            placeholder="Please enter your password"
          />
        </Grid>

        <Grid item sx={{ width: 400 }}>
          <TextField
            fullWidth
            variant="outlined"
            type="number"
            label="Age"
            placeholder="Please enter your age"
          />
        </Grid>

        <Grid item sx={{ width: 400 }}>
          <Button fullWidth variant="contained" sx={{ color: "#f8f8f8", p: 2 }} type="submit">
            Signup
          </Button>
          <Typography sx={{ mt: 1.5, textAlign: "center" }}>
            do you have an account?
            <Link href="/signup">
              <Button sx={{ p: 0, textTransform: "capitalize" }}>Login</Button>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
}

export default Signup;
