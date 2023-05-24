import React from "react";
import { Avatar, Button, Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
const SingleWork = ({ singleWork }) => {
  console.log(singleWork);
  return (
    <Stack width={900} height={500} p={1} alignItems="center" gap={1}>
      <Stack width="90%" direction="row" justifyContent="space-between" gap={1}>
        <Stack width="80%" direction="row" alignItems="center" gap={1}>
          <Avatar>
            <img
              src={singleWork?.company?.logo}
              alt=""
              width={"100%"}
              height="100%"
            />
          </Avatar>
          <Stack>
            <Typography variant="h5" color="#7090e8">
              {singleWork?.company?.name}
            </Typography>
            <Typography variant="h6" color="gray">
              {singleWork?.role?.name}
            </Typography>
            <Typography
              variant="h6"
              color="gray"
              fontSize={13}
              sx={{
                color: "teal",
              }}
            >
              {singleWork?.company?.oneLiner && singleWork?.company?.oneLiner}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          gap={1}
          alignItems="center"
          sx={{
            transform: "scale(0.8)",
          }}
        >
          {singleWork.applyUrl && (
            <Box width="80%">
              <Link to={singleWork?.applyUrl}>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                  }}
                >
                  Apply Here
                </Button>
              </Link>
            </Box>
          )}
          <Box width="80%">
            <Link to="/work/chat">
              <Button sx={{ fontSize: 12 }} variant="contained" width="60%">
                Chat with Recruiter
              </Button>
            </Link>
          </Box>
        </Stack>
      </Stack>
      {singleWork?.stacks && (
        <Typography width="90%" textAlign="start" color="blue">
          Tech Stack
        </Typography>
      )}
      <Stack width="90%" direction="row" justifyContent="center" gap={1}>
        {singleWork.stacks &&
          singleWork.stacks.map((language, idx) => (
            <Stack key={idx} direction="row" alignItems="center" gap={1}>
              <Avatar>
                <img src={language.iconUrl} width="100%" height="100%" />
              </Avatar>
              <Typography color="grey">{language.name}</Typography>
            </Stack>
          ))}
      </Stack>
      <Typography width="90%" variant="h6">
        Description
      </Typography>
      <Stack width="90%">
        {singleWork?.company?.description && singleWork.company.description}
      </Stack>
    </Stack>
  );
};

export default SingleWork;
