import { Backdrop, Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { fetchLogin } from "../store/user/user-actions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { isToggle, error, token } = useSelector((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    setLoading(false);
  }, [isToggle]);

  useEffect(() => {
    if (token) {
      router.push("/");
      setLoading(true);
    }
  }, [token, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    dispatch(fetchLogin({ email, password }));
  };

  return (
    <Layout title="Login" desc="Enter you account and manage your task">
      <form onSubmit={handleSubmit}>
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
            pb: 4,
          }}
        >
          <Grid item sx={{ width: { xs: "90%", sm: 420 } }}>
            <TextField
              fullWidth
              variant="outlined"
              type="email"
              label="Email"
              placeholder="Please enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid item sx={{ width: { xs: "90%", sm: 420 } }}>
            <TextField
              fullWidth
              variant="outlined"
              type="password"
              label="Password"
              placeholder="Please enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>

          <Grid item sx={{ width: { xs: "90%", sm: 420 } }}>
            {error && (
              <Typography color="error" sx={{ mb: 1, fontSize: 14 }}>
                {error}
              </Typography>
            )}
            <Button fullWidth variant="contained" sx={{ color: "#f8f8f8", p: 2 }} type="submit">
              LOGIN
            </Button>
            <Typography sx={{ mt: 1.5, textAlign: "center" }}>
              Already have an account?
              <Link href="/signup">
                <Button sx={{ p: 0, textTransform: "capitalize" }}>Signup</Button>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>

      <Backdrop open={loading}>
        <CircularProgress size="32px" />
      </Backdrop>
    </Layout>
  );
}

export default Login;
