import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import failed_icon from "../../assets/failed-icon.svg";
import { useNavigate } from "react-router-dom";

function Cancel() {
  const navigate = useNavigate();
  return (
    <>
      <Stack
        alignItems="Center"
        justifyContent="center"
        spacing={1}
        sx={{ minHeight: "60vh" }}
      >
        <img
          src={failed_icon}
          alt="icon"
          width="100"
          height="100"
          style={{ width: "4rem" }}
        />
        <Typography
          variant="h3"
          color="initial"
          sx={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          Uhh..oh
        </Typography>
        <Typography
          variant="body1"
          color="gray"
          sx={{ fontSize: "1.2rem", marginBottom: "1rem" }}
        >
          Pyment Interrupted or Failed 😞 Please Try again..
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "teal",
            ":hover": { bgcolor: "teal" },
          }}
          onClick={() => navigate("/courses")}
        >
          back to courses
        </Button>
      </Stack>
    </>
  );
}

export default Cancel;
