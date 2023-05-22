import * as React from "react";
import {
  Avatar,
  Box,
  Container,
  Stack,
  Tooltip,
  Typography,
  IconButton,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { PuffLoader } from "react-spinners";
import { BsDot as DotIcon } from "react-icons/bs";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import { BsBookmark as BookmarkIcon } from "react-icons/bs";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { useNavigate } from "react-router-dom";
import SingleWork from "./SingleWork";
import SearchField from "../../Components/SearchField";
import moment from "moment";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Work = () => {
  const [singleWork, setSingleWork] = useState({});
  // const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
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
    <Stack
      sx={{
        background: "#171718",
        height: "93%",
        padding: "2rem 0",
        overflowY: "auto",
        alignItems: "center",
        gap: 1,
        width: "100%",
      }}
    >
      <SearchField
        iconOnRight={true}
        sx={{
          border: "2px solid #FFF",
          color: "grey",
          width: "300px",
        }}
      />
      {isLoading ? (
        <Stack justifyContent="center" alignItems="center" minHeight="100vh">
          <PuffLoader color="#36d7b7" />
        </Stack>
      ) : (
        <Stack
          sx={{
            alignItems: "center",
            gap: "1rem",
            width: "100%",
            overflowY: "scroll",
            height: "80vh",
          }}
        >
          {reccomended?.map((rec, idx) => (
            <Stack
              key={idx}
              direction="row"
              width="40%"
              alignItems="center"
              gap={1}
              sx={{
                borderRadius: "12px",
                p: 1,
                backgroundColor: "black",
              }}
            >
              <Avatar>
                <img src={rec?.company?.logo} width={"100%"} height="100%" />
              </Avatar>
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
                      setOpen(true);
                      // navigate(`/work?${rec.id}`);
                      // setVisible(true);
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
                  <Stack direction="row" gap={1} flex={1} alignItems="center">
                    <LocationOnIcon
                      fontSize="small"
                      sx={{
                        color: "gray",
                      }}
                    />
                    <Typography color="#8fb097" fontSize={12}>
                      {rec?.location}
                    </Typography>
                  </Stack>
                  <Stack direction="row" gap={1} flex={1} alignItems="center">
                    <WorkIcon
                      sx={{
                        color: "gray",
                      }}
                    />
                    <Typography color="#8fb097" fontSize={12}>
                      {rec?.type}
                    </Typography>
                  </Stack>
                  <Stack direction="row" gap={1} flex={1} alignItems="center">
                    <LocalAtmIcon
                      sx={{
                        color: "gray",
                      }}
                    />
                    <Typography color="#8fb097" fontSize={12}>
                      from ${rec?.salary.from} to ${rec?.salary.to}
                      {rec?.salary.currency}
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" flex={1}>
                    <DotIcon color="gray" size="1.2rem" />
                    <Typography color="#8fb097" fontSize={12}>
                      {moment(rec.created_at).format("DD MMM")}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      )}

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <SingleWork singleWork={singleWork} />
      </Dialog>
    </Stack>
  );
};

export default Work;
