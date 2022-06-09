import { Backdrop, Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignup } from "../store/user/user-actions";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const { isToggle, error, token } = useSelector((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    setLoading(false);

    if (error) {
      setErrorMessage(error);
    }
  }, [isToggle, error]);

  useEffect(() => {
    if (token) {
      router.push("/");
      setLoading(true);
    }
  }, [token, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login");

    if (password !== confirmPassword) {
      setErrorMessage("Password do not match!");
      return;
    }

    if (age > 99 || age < 1) {
      setErrorMessage("Age is not valid!");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    dispatch(fetchSignup({ name, email, password, age }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>

          <Grid item sx={{ width: 400 }}>
            <TextField
              fullWidth
              variant="outlined"
              type="email"
              label="Email"
              placeholder="Please enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>

          <Grid item sx={{ width: 400 }}>
            <TextField
              fullWidth
              variant="outlined"
              type="password"
              label="Password"
              placeholder="Please enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>

          <Grid item sx={{ width: 400 }}>
            <TextField
              fullWidth
              variant="outlined"
              type="password"
              label="Confirm Password"
              placeholder="Please confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Grid>

          <Grid item sx={{ width: 400 }}>
            <TextField
              fullWidth
              variant="outlined"
              type="number"
              label="Age"
              placeholder="Please enter your age"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              required
            />
          </Grid>

          <Grid item sx={{ width: 400 }}>
            {errorMessage && (
              <Typography color="error" sx={{ mb: 1, fontSize: 14 }}>
                {errorMessage}
              </Typography>
            )}
            <Button fullWidth variant="contained" sx={{ color: "#f8f8f8", p: 2 }} type="submit">
              Signup
            </Button>
            <Typography sx={{ mt: 1.5, textAlign: "center" }}>
              do you have an account?
              <Link href="/login">
                <Button sx={{ p: 0, textTransform: "capitalize" }}>Login</Button>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>

      <Backdrop open={loading}>
        <CircularProgress size="32px" />
      </Backdrop>
    </>
  );
}

export default Signup;
