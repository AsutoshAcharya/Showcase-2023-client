import {
  Box,
  Button,
  Modal,
  Typography,
  FormControl,
  FormLabel,
  FormHelperText,
  InputLabel,
  TextField,
  Divider,
  List,
  ListItem,
  Stack,
  Tooltip,
  IconButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HistoryIcon from "@mui/icons-material/History";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import { Construction } from "@mui/icons-material";
// import { MdOutlineSearch as SearchIcon } from "react-icons/md";

function SearchModal({ open, handleClose }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40rem",
    maxHeight: "50rem",
    bgcolor: "background.paper",
    // bgcolor: "black",
    // color:'white',
    border: "1px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  const [isBookmarked, setisBookmarked] = useState(false);

  //   const handleBookmark = (e) => {
  //     console.log(e);
  //   };

  return (
    <>
      <Box>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box
            sx={style}
            style={{
              display: "flex",
              flexFlow: "column",
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <SearchIcon />
              <TextField
                id="input-with-sx"
                variant="standard"
                placeholder="Search..."
                sx={{
                  width: "100%",
                  // background: "red",
                  border: "none !important",
                }}
              />
            </Stack>
            <Divider sx={{ marginTop: "1rem" }} />
            <List sx={{ overflowY: "scroll", marginTop: ".5rem" }}>
              {[1, 2, 3, 4, 5, 6].map((el, index) => (
                <Box key={index}>
                  <ListItem
                    key={index}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <IconButton>
                      <HistoryIcon />
                    </IconButton>
                    <ListItemText sx={{ marginLeft: "5px" }}>
                      fsdkfnsljdfn
                    </ListItemText>
                    <IconButton onClick={() => setisBookmarked(!isBookmarked)}>
                      {isBookmarked ? (
                        <StarIcon sx={{ color: "teal" }} />
                      ) : (
                        <StarBorderIcon sx={{ color: "teal" }} />
                      )}
                    </IconButton>
                    <IconButton>
                      <CloseIcon sx={{ color: "teal" }} />
                    </IconButton>
                  </ListItem>
                  <Divider sx={{ margin: " 0 1rem" }} />
                </Box>
              ))}
            </List>
          </Box>
        </Modal>
      </Box>
    </>
  );
}

export default SearchModal;
