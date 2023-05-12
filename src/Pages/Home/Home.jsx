import {
  Button,
  IconButton,
  Snackbar,
  Container,
  Typography,
  Box,
  Stack,
  Tooltip,
  Skeleton,
  Grid,
  Divider,
  Avatar,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import CloseIcon from "@mui/icons-material/Close";
import userImg from "../../assets/licensed-image.jpg";
import { BsDot as DotIcon } from "react-icons/bs";
import { BsThreeDots as ThreeDotIcon } from "react-icons/bs";
import { BsFillHeartFill as LikeIcon } from "react-icons/bs";
import { BsFillArrowUpCircleFill as BoostIcon } from "react-icons/bs";
import { FaComment as CommentIcon } from "react-icons/fa";
import { BsBookmark as BookmarkIcon } from "react-icons/bs";
import { BsBookmarkFill as BookmarkFillIcon } from "react-icons/bs";
import { PuffLoader } from "react-spinners";
import { motion } from "framer-motion";
import Moment from "react-moment";
import AvatarGenerator from "../../utils/AvatarGenerator";

// import Moment from "moment";
function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  const dateToFormat = "1976-04-19T12:59-0500";

  const url = "https://cache.showwcase.com/feeds/discover";

  const getFeeds = async () => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: import.meta.env.SHOWWCASE_API_KEY,
        },
      });
      // console.log(data);
      return data;
    } catch (error) {
      throw Error("Unable to fetch Feeds");
      // throw Error(error);
    }
  };

  const {
    data: Feeds,
    isLoading,
    isError,
  } = useQuery("feeds", getFeeds, {
    keepPreviousData: true,
    onError: () => {
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />;
    },
  });

  //| Animations

  const btnVariant = {
    initial: { y: "0" },
    animate: {
      y: "-20",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };
  const iconVariant = {
    initial: { fill: "gray", y: "0" },
    animate: {
      fill: "red",
      y: "-20",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Box
        sx={{ background: "#171718", minHeight: "100vh", padding: "2rem 0" }}
      >
        {isLoading ? (
          <Stack justifyContent="center" alignItems="center" minHeight="100vh">
            <PuffLoader color="#36d7b7" />
          </Stack>
        ) : (
          // Skeleton
          // <Box>
          //   <Skeleton variant="circle" height={50} />
          //   <Box sx={{ width: "50rem", maxWidth: "50rem" }}>
          //     <Skeleton variant="text" sx={{ bgcolor: "gray" }} />
          //     <Skeleton variant="text" sx={{ bgcolor: "gray" }} />
          //     <Skeleton
          //       variant="rounded"
          //       height={40}
          //       sx={{ bgcolor: "gray" }}
          //     />
          //     <Skeleton
          //       variant="rectangle"
          //       height={40}
          //       sx={{ bgcolor: "gray" }}
          //     />
          //   </Box>
          // </Box>
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              gap: "1rem",
              // margin: "2rem auto",
              // background: "",
            }}
          >
            {Feeds &&
              Feeds.map((post) => (
                <Box
                  key={post.id}
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    gap: "1rem",
                    background: "black",
                    width: "50rem",
                    maxWidth: "50rem",
                    height: "max-Content",
                    // marginTop: "5rem",
                    margin: "auto",
                    padding: "2rem",
                    borderRadius: "10px",
                    // overflow: "hidden",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#1f53e0",
                    }}
                  >
                    {AvatarGenerator(post.user.displayName)}
                  </Avatar>

                  <Box sx={{ flex: "1", width: "100%" }}>
                    {/* top section of the post  */}
                    <Box sx={{ width: "100%" }}>
                      <Stack direction="row" justifyContent="space-between">
                        <Box>
                          {/* heading  */}
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                            // sx={{ height: "fit-content" }}
                          >
                            <Typography variant="body1" color="white">
                              {post.user && post.user.displayName}
                            </Typography>
                            <Typography
                              component="a"
                              variant="caption"
                              color="gray"
                            >
                              @{post.user && post.user.username}
                            </Typography>
                            <Stack direction="row" alignItems="start">
                              <DotIcon color="gray" size="1.2rem" />
                              <Typography variant="caption" color="gray">
                                {/* 51 mins ago */}
                                <Moment fromNow>{post.createdAt}</Moment>
                              </Typography>
                            </Stack>
                          </Stack>
                          {/* user caption  */}
                          <Stack
                            direction="row"
                            spacing={1}
                            // alignItems="center"
                          >
                            <Typography variant="caption" color="gray">
                              {post.user && post.user.headline}
                            </Typography>
                            {/* <Divider
                              orientation="vertical"
                              variant="middle"
                              color="gray"
                              // sx={{ height: ".7rem"}}
                              flexItem
                            />
                            <Typography variant="caption" color="gray">
                              Cybersecurity, ML, and OSS Enthusiast
                            </Typography> */}
                          </Stack>
                        </Box>
                        {/* ThreeDot Icon  */}
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <IconButton>
                            <BookmarkIcon color="gray" size="1.2rem" />
                          </IconButton>
                          <IconButton sx={{ alignItems: "start" }}>
                            <ThreeDotIcon color="gray" />
                          </IconButton>
                        </Stack>
                      </Stack>
                    </Box>
                    {/* mid / post content section of the post  */}
                    <Box py={2}>
                      <Typography
                        variant="h2"
                        color="#C2CBC2"
                        sx={{ fontSize: "1rem", wordWrap: "break-word" }}
                      >
                        {/* Hello Showwcase! Check out my Show on Why is it so hard to
                      create PWA with Next.js?. Follow me to get all my latest
                      content. */}
                        {post.message && post.message}
                      </Typography>
                    </Box>
                    {/* bottom section of the post  */}
                    <Box>
                      <Stack direction="row" spacing={3}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Tooltip title="Like">
                            <IconButton
                              component={motion.button}
                              variants={btnVariant}
                              initial="initial"
                              whileHover="animate"
                              // animate="animate"
                              // whileTap={{ scale: 0.8 }}
                            >
                              <LikeIcon
                                component={motion.svg}
                                color="gray"
                                size="1rem"
                                variants={iconVariant}
                                // whileHover={{ fill: "red" }}
                              />
                            </IconButton>
                          </Tooltip>
                          <Typography variant="caption" color="gray">
                            21
                          </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Tooltip title="Boost">
                            <IconButton>
                              <BoostIcon color="gray" size="1rem" />
                            </IconButton>
                          </Tooltip>
                          <Typography variant="caption" color="gray">
                            15
                          </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Tooltip title="Reply">
                            <IconButton>
                              <CommentIcon color="gray" size="1rem" />
                            </IconButton>
                          </Tooltip>
                          <Typography variant="caption" color="gray">
                            34
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
              ))}
          </Container>
        )}
      </Box>
    </>
  );
}

export default Home;
