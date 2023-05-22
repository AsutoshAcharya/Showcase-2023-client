import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import {
  MdNotifications as NotificationIcon,
  MdChatBubble as ChatIcon,
  MdSearch as SearchIcon,
} from "react-icons/md";
import userImg from "../../assets/xavier.jpg";
import SearchModal from "./SearchModal";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  // const [isActive, setisActive] = useState(false);

  // Modal hooks
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const Navs = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Explore",
      route: "/explore",
    },
    {
      name: "Work",
      route: "/work",
    },
    {
      name: "Bookmarks",
      route: "/bookmarks",
    },
    {
      name: "Communities",
      route: "/communities",
    },
    {
      name: "Courses",
      route: "/courses",
    },
    {
      name: "Podcasts",
      route: "/podcasts",
    },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <header style={{ background: "Black", height: "7%" }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={1}
        px={5}
        sx={{ maxWidth: "70rem" }}
        mx="auto"
      >
        {/* Brand Logo  */}
        <Box>
          <svg
            width="25"
            height="100%"
            viewBox="0 0 100 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M35.64 7.241a67.234 67.234 0 0 1 7.064-.916c.536-.041.909-.13 1.14-.507.39-.634 1.084-.878 2.05-.95 2.6-.194 5.179-.208 7.785-.029 1.257.087 2.095.406 2.577 1.233.19.325.517.445 1.007.48 1.023.072 2.04.182 3.054.317 1.317.176 2.621.399 3.988.623-.236-.795-.603-1.468-1.016-2.129C61.711 2.84 59.18 1.121 55.415.424c-2.829-.523-5.692-.477-8.56-.311-1.795.104-3.508.46-5.107 1.076-3.332 1.28-4.971 3.466-6.109 6.052ZM1.981 9.547a12.25 12.25 0 0 1 3.153 1.76c2.095 1.603 3.537 3.515 4.873 5.472 1.485 2.174 2.654 4.445 3.756 6.746.219-.133.235-.292.282-.446.562-1.82 1.222-3.621 2.067-5.385 1.499-3.125 3.505-6.015 7.157-8.138.367-.213.337-.362.066-.613-1.157-1.072-2.406-2.08-3.863-2.94-1.152-.679-2.476-1.023-3.981-.998-3.304.054-6.31.833-9.16 1.977-1.642.659-3.17 1.43-4.35 2.565ZM45.45 7.29l-.342.05c-.051-.011-.104-.036-.153-.034-4.328.237-8.622.618-12.79 1.552-4.464 1-7.909 2.943-10.303 5.858-1.906 2.322-2.948 4.888-3.898 7.47-.993 2.698-1.683 5.448-2.296 8.204-.99 4.449-1.742 8.922-2.45 13.397a447.73 447.73 0 0 0-1.416 9.807c-.629 4.646-1.188 9.295-1.23 13.97-.039 4.101.087 8.19 1.83 12.149 1.143 2.596 3.11 4.73 6.42 6.152 3.43 1.474 7.184 2.27 11.028 2.869 5.693.887 11.478 1.179 17.284 1.246 6.24.072 12.475-.037 18.666-.692 4.539-.48 8.99-1.21 13.202-2.585 3.829-1.25 6.623-3.198 8.143-6.093 1.51-2.873 2.026-5.87 2.202-8.902.397-6.85-.515-13.656-1.473-20.456-.703-4.991-1.466-9.978-2.389-14.952-.565-3.042-1.164-6.078-1.951-9.093-.915-3.5-2-6.965-3.879-10.273-2.289-4.032-6.139-6.879-11.985-8.1-7.264-1.516-14.7-1.883-22.22-1.544Zm45.755 42.175c.003.397.02.794.16 1.181l.461 3.191c-.066.202-.033.392.1.65.108-.268.344-.42.27-.644l1.4-4.995c.097-.184.189-.368.138-.57.271-.456.333-.95.5-1.425 1.016-2.877 1.708-5.8 2.36-8.728.718-3.222 1.337-6.457 2.134-9.669.98-3.95 1.42-7.92 1.23-11.925-.071-1.482-.168-2.973-.716-4.513-.457.259-.857.453-1.206.688-1.61 1.087-2.752 2.428-3.775 3.816-2.914 3.953-4.805 8.195-6.571 12.47-.09.217-.038.424.013.639.914 3.878 1.578 7.78 2.206 11.686.437 2.716.864 5.432 1.296 8.148ZM.279 13.058c-.292.848-.277 1.715-.279 2.579-.01 3.925.578 7.814 1.284 11.7.613 3.377 1.465 6.721 2.295 10.069a465.6 465.6 0 0 0 2.498 9.73c.834 3.079 1.135 6.197 1.452 9.316.023.228-.03.473.188.7.042-.064.096-.11.102-.16a374.246 374.246 0 0 1 1.956-13.677c.718-4.433 1.403-8.868 2.415-13.272.133-.575.297-1.137-.002-1.74-.584-1.182-1.025-2.4-1.587-3.588-1.487-3.142-3.07-6.259-5.444-9.12-.961-1.16-1.956-2.314-3.495-3.14-.35-.218-.73-.605-1.147-.469-.347.114-.221.589-.288.906-.01.052.033.11.052.166Zm92.7-6.237a29.925 29.925 0 0 0-10.118-1.67 5.212 5.212 0 0 0-2.807.825c-1.426.913-2.417 2.057-3.266 3.277-.174.25.013.351.233.483a15.27 15.27 0 0 1 2.692 2.039c2.817 2.682 4.257 5.803 5.445 9.003.362.976.685 1.959 1.068 3.06 1.164-2.394 2.288-4.667 3.762-6.834 1.792-2.635 3.72-5.205 7.08-7.008l.436-.202.378-.152c.35-.092.138-.185 0-.278-.069-.2-.25-.34-.466-.463-.178-.247-.463-.413-.79-.548-.73-.497-1.58-.86-2.482-1.164-.373-.148-.714-.35-1.165-.368Z"
              fill="white"
            ></path>
          </svg>
        </Box>
        {/* Nav Links  */}
        <Stack direction="row" spacing={3} sx={{ height: "100%" }}>
          {Navs &&
            Navs.map((nav, index) => (
              <NavLink
                to={nav.route}
                key={index}
                // style={
                //   ({ textDecoration: "none" },
                //   ({ isActive }) => {
                //     return {
                //       fontWeight: isActive ? "bold" : "",
                //       color: isActive ? "white" : "gray",
                //     };
                //   })
                // }
                style={({ isActive, isPending }) => {
                  return {
                    textDecoration: "none",
                    color: isActive ? "white" : "gray",
                  };
                }}
              >
                {nav.name}
                {/* <Typography
                  color="gray"
                  sx={{ textDecoration: "none", fontSize: ".9rem" }}
                >
                  {nav.name}
                </Typography> */}
              </NavLink>
            ))}
        </Stack>
        {/* Right navigation icons  */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Tooltip title="Search">
            <IconButton onClick={handleOpen}>
              <SearchIcon color="gray" size={"1.5rem"} />
            </IconButton>
          </Tooltip>
          {/* Search Modal  */}
          <SearchModal open={open} handleClose={handleClose} />
          <Tooltip title="Notifications">
            <IconButton>
              <NotificationIcon color="gray" size={"1.5rem"} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Chats">
            <IconButton>
              <ChatIcon color="gray" size={"1.5rem"} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar
                alt="Remy Sharp"
                src={userImg}
                sx={{ height: "1.7rem", width: "1.7rem" }}
              />
            </IconButton>
          </Tooltip>

          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem>
              <Stack direction="row" alignItems="center" gap={1}>
                <img
                  src={userImg}
                  alt="user's name"
                  width="40px"
                  height="40px"
                  style={{ borderRadius: "100%" }}
                  borderradius="full"
                />
                <Box>
                  <Typography
                    component="h1"
                    color="initial"
                    sx={{ fontSize: ".9rem", fontWeight: "700" }}
                  >
                    Bijay Kumar Naik
                  </Typography>
                  <Typography variant="caption" color="gray">
                    @kruzader-victor
                  </Typography>
                </Box>
              </Stack>
              <Divider light />
            </MenuItem>
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Stack>
      </Stack>
    </header>
  );
}

export default Navbar;
