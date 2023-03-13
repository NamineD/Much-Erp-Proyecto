import {
  Container,
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
  TextField,
  Divider,
  Alert,
} from "@mui/material";
import styled from "styled-components";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/features/authSlice";

const LoginButton = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.75;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  width: 80%;
  margin: 15px 25px;
  border-radius: 0.6rem;
  height: 30px;
  background-color: rgb(38, 171, 226);
  color: rgb(245, 245, 245);
`;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");

  const LoginHandler = (e) => {
    e.preventDefault();
    dispatch(login({ username: userName, password: pwd }));
    navigate("/");
  };

  const handleUserInput = (e) => setUserName(e.target.value);
  const handlePwdInput = (e) => setPwd(e.target.value);

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 600,
          maxWidth: 500,
          borderRadius: "16px",
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "50%",
            height: "100%",
          }}
        >
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" sx={{ color: "info.main", padding: 1 }}>
              Login
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{ color: "info.main", padding: 1 }}
            >
              If you already a member, easily log in
            </Typography>
            { error && <Alert severity="error">Username or Password is incorrect</Alert> }
            <Box sx={{ padding: 2 }}>
              <TextField
                id="outlined-basic"
                label="User Name"
                variant="outlined"
                value={userName}
                onChange={handleUserInput}
                required
                sx={{ paddingBottom: 2 }}
              />
              <TextField
                id="outlined-basic"
                type="password"
                label="Password"
                variant="outlined"
                value={pwd}
                onChange={handlePwdInput}
                required
              />
            </Box>
            <LoginButton type="submit" onClick={LoginHandler}>Log In</LoginButton>
            <Divider>OR</Divider>
            <LoginButton>Log In With Google</LoginButton>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{ padding: 2 }}
            >
              Forgot your password?
            </Typography>
            <Divider variant="middle" />
          </CardContent>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "50%",
            background: "linear-gradient(to bottom, #93d5f1, #68c5eb, #26abe2)",
            height: "100%",
          }}
        >
          <CardMedia
            component="img"
            image="https://app.muchflowers.com/7054180.png"
            alt="Live from space album cover"
          />
        </Box>
      </Card>
    </Container>
  );
};

export default Login;
