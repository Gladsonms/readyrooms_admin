import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { adminLogin } from "../../axios";
import { useDispatch } from "react-redux";
const Login = () => {
  //materil ui

  const paperStyle = {
    padding: 30,
    height: "40vh",
    width: 280,
    margin: "20px auto ",
  };
  const avatarStyle = {
    backgroundColor: "green",
  };
  const siginBtn = {
    margin: "15px 0",
  };
  const signup = {
    margin: "10px 0",
  };

  //state

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  //dispatch
  const dispatch = useDispatch();

  //navigate
  //const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await adminLogin({
        email,
        password,
      });
      console.log(res.data);
      if (res.data) {
        //loaclstorage
        window.localStorage.setItem("adminData", JSON.stringify(res.data));
      }
      dispatch({
        type: "LOGGED_IN_USER",
        payload: res.data,
      });
      // navigate("/");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Sigin</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            label="email"
            variant="standard"
            placeholder="Enter email"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            fullWidth
            required
          />
          <TextField
            id="password"
            label="password"
            variant="standard"
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            fullWidth
            required
          />
          <Button variant="contained" type="submit" style={siginBtn} fullWidth>
            Login
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
