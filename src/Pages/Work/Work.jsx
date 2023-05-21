import {
  Avatar,
  Box,
  Container,
  Stack,
  Tooltip,
  Typography,
  IconButton,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { PuffLoader } from "react-spinners";
import { BsDot as DotIcon } from "react-icons/bs";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import { BsBookmark as BookmarkIcon } from "react-icons/bs";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { useNavigate } from "react-router-dom";

const Work = () => {
  const [singleWork, setSingleWork] = useState({});
  const navigate = useNavigate();
  const getReccomendedJobs = async () => {
    // const url = "https://cache.showwcase.com/jobs/recommended";
    try {
      const { data } = await axios.get(
        "https://cache.showwcase.com/jobs/recommended",
        {
          // headers: {
          //   Authorization: import.meta.env.SHOWWCASE_API_KEY,
          // },
        }
      );
      // console.log(data);
      return data;
    } catch (error) {
      throw Error("Unable to fetch reccomended");
      // throw Error(error);
    }
  };

  const {
    data: reccomended,
    isLoading,
    isError,
  } = useQuery("reccomended-jobs", getReccomendedJobs, {
    onError: () => {},
    refetchOnWindowFocus: false,
  });

  return (
    <Box sx={{ background: "#171718", minHeight: "100vh", padding: "2rem 0" }}>
      <Stack width="40%" height={30} mx="auto">
        Search
      </Stack>
      {isLoading ? (
        <Stack justifyContent="center" alignItems="center" minHeight="100vh">
          <PuffLoader color="#36d7b7" />
        </Stack>
      ) : (
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {reccomended?.map((rec, idx) => (
            <Stack
              key={idx}
              direction="row"
              width="60%"
              alignItems="center"
              gap={1}
              sx={{
                borderRadius: "12px",
                p: 1,
                backgroundColor: "black",
              }}
            >
              <Avatar width="20%">{rec?.company?.logo}</Avatar>
              <Stack width="80%">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    color="#FFF"
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      console.log(rec);
                      navigate(`/work?${rec.id}`);
                      setSingleWork(rec);
                    }}
                  >
                    {rec?.title}
                  </Typography>
                  <Tooltip placement="bottom" title="Save Job">
                    <IconButton>
                      <BookmarkIcon color="gray" size="1.2rem" />
                    </IconButton>
                  </Tooltip>
                </Stack>
                <Typography color="#268bff" fontSize={20}>
                  {rec?.role?.name}
                </Typography>
                <Stack direction="row" width="100%" gap={1}>
                  <Stack direction="row" gap={1}>
                    <LocationOnIcon
                      fontSize="small"
                      sx={{
                        color: "gray",
                      }}
                    />
                    <Typography color="#8fb097">{rec?.location}</Typography>
                  </Stack>
                  <Stack direction="row" gap={1}>
                    <WorkIcon
                      sx={{
                        color: "gray",
                      }}
                    />
                    <Typography color="#8fb097">{rec?.type}</Typography>
                  </Stack>
                  <Stack direction="row" gap={1}>
                    <LocalAtmIcon
                      sx={{
                        color: "gray",
                      }}
                    />
                    <Typography color="#8fb097">
                      from ${rec?.salary.from} to ${rec?.salary.to}
                      {rec?.salary.currency}
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center">
                    <DotIcon color="gray" size="1.2rem" />
                    <Typography color="#8fb097">{rec?.createdAt}</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Container>
      )}
    </Box>
  );
};

export default Work;
