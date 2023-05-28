import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import tick_Icon from "../../assets/tick-icon.svg";
import { useNavigate } from "react-router-dom";

function SucessPayment() {
  const navigate = useNavigate();
  return (
    <>
      <Stack
        alignItems="Center"
        justifyContent="center"
        spacing={1}
        sx={{ minHeight: "60vh" }}
      >
        <img src={tick_Icon} alt="icon" width="100" height="100" />
        <Typography
          variant="h3"
          color="initial"
          sx={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          Thank you
        </Typography>
        <Typography
          variant="body1"
          color="gray"
          sx={{ fontSize: "1.2rem", marginBottom: "1rem" }}
        >
          Payment Successfully Done ! 👍
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

export default SucessPayment;
