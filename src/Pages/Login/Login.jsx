import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import loginlogo from "../Assets/super-bike-like-kawasaki.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation } from "react-query";

const Login = () => {
  const nav = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegsiter] = useState(false);
  const [signin, setSignin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwords, setPasswords] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    const payload = {
      username,
      password,
    };

    try {
      await axios
        .post("/auth/login", payload, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          nav("/dashboard");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const { data: loginData } = useMutation("signin", handleSignIn);

  if (data) {
    console.log(data);
  }

  const handleRegistration = () => {
    setRegsiter(true);
    setSignin(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      username: name,
      email: email,
      password: password,
    };

    try {
      await axios
        .post("/auth/register", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      nav("/");
    } catch (error) {
      console.log(error);
    }
  };
  const { data, isLoading, onSuccess, status } = useMutation(
    "register",
    handleRegister
  );

  if (onSuccess) {
  }
  const handlesign = () => {
    setSignin(true);
    setRegsiter(false);
  };

  return (
    <>
      {signin ? (
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "#f7d7f7",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              border: "1px solid peach",
              width: "60rem",
              height: "30rem",
              boxShadow: 3,
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                width: "50%",
                height: "100%",
                backgroundColor: "white",
                padding: "5px",
              }}
            >
              <Typography
                fontSize="1.8rem"
                textAlign="center"
                color="#0000FF"
                fontWeight="bold"
                fontFamily="Poppins"
              >
                LOGIN
              </Typography>

              <form action="">
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography fontSize="1.2rem" color="gray">
                    UserName
                  </Typography>
                  <TextField
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    size="small"
                    sx={{ width: "24rem", marginTop: ".6rem" }}
                  />
                  <Typography
                    fontSize="1.2rem"
                    color="gray"
                    sx={{ marginTop: ".6rem" }}
                  >
                    Password
                  </Typography>
                  <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    size="small"
                    type="password"
                    sx={{ width: "24rem", marginTop: ".6rem" }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "2rem",
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={handleSignIn}
                      sx={{
                        backgroundColor: "#ad23db",

                        width: "12rem",

                        "&:hover": {
                          backgroundColor: "#4f0269",
                          boxShadow: "none",
                          color: "white",
                        },
                      }}
                    >
                      Login
                    </Button>
                  </Box>
                  <Typography
                    sx={{
                      marginTop: "1rem",
                      alignContent: "center",
                      marginLeft: "8rem",
                    }}
                  >
                    Didn't Registered yet?
                    <span
                      onClick={handleRegistration}
                      style={{
                        color: "blue",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      SignUp
                    </span>
                  </Typography>
                </Box>
              </form>
            </Box>
            <Box sx={{ width: "50%", height: "100%" }}>
              <img
                src={loginlogo}
                width="480"
                height="490"
                objectFit="cover"
                alt="jj"
              />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#7492fc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "60rem",
              height: "30rem",
              border: "1px solid white",
              borderRadius: "10px",
              display: "flex",
              boxShadow: 3,
            }}
          >
            <Box
              sx={{ width: "50%", height: "100%", backgroundColor: "#3e18ba" }}
            >
              <Typography
                fontSize="2rem"
                fontWeight="bold"
                color="white"
                textAlign="center"
                sx={{ marginTop: "1rem" }}
              >
                INFORMATION
              </Typography>
              <Typography
                sx={{ padding: "10px", color: "white", fontSize: "1.2rem" }}
              >
                This website contains information about different Bikes, Cars
                and Evs of multiple brands in India. You will have a brief idea
                about the vehicles out there. Here you can register yourself and
                login to see the contents.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1.2rem",
                    color: "white",
                  }}
                >
                  Already Registered?
                </span>{" "}
                <Button
                  variant="outlined"
                  sx={{
                    marginLeft: "10px",
                    backgroundColor: "white",
                    textAlign: "center",
                    padding: "6px 25px",
                    color: "black",
                    boxShadow: 2,
                  }}
                  onClick={handlesign}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
            <Box
              sx={{ width: "50%", height: "100%", backgroundColor: "white" }}
            >
              <form action="POST">
                <Box
                  sx={{
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#0528f2",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      padding: "10px",
                    }}
                  >
                    REGISTRATION
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: ".6rem",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    Your Name
                  </Typography>
                  <TextField
                    size="small"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ width: "25rem" }}
                  />
                  <Typography
                    sx={{
                      marginTop: ".6rem",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    Email
                  </Typography>
                  <TextField
                    size="small"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ width: "25rem" }}
                  />
                  <Typography
                    sx={{
                      marginTop: ".6rem",
                      color: "black",
                      fontSize: "1rem",
                    }}
                  >
                    Password
                  </Typography>
                  <TextField
                    size="small"
                    type="passwords"
                    value={passwords}
                    onChange={(e) => setPasswords(e.target.value)}
                    sx={{ width: "25rem" }}
                  />

                  <Button
                    variant="contained"
                    sx={{
                      marginTop: "2rem",
                      width: "10rem",
                      marginLeft: "8rem",
                    }}
                    onClick={handleRegister}
                  >
                    Register
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Login;
