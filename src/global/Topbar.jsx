import React from 'react'
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens  } from '../theme';
import InputBase from "@mui/material/InputBase";
import LightModeOutlineIcon from "@mui/icons-material/LightMode";
import DarkModeOutlineIcon from "@mui/icons-material/DarkMode";
import NotificationsModeOutlineIcon from "@mui/icons-material/Notifications";
import SettingsModeOutlineIcon from "@mui/icons-material/Settings";
import PersonModeOutlineIcon from "@mui/icons-material/Person";
import SerachIcon from "@mui/icons-material/Search";



function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return <Box display="flex" justifyContent="space-between" p={2}>
    { /* search bar*/}
    <Box display="flex"
    backgroundColor={colors.primary[400]}
    borderRadius="3px"
    >
      <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
      <IconButton type="button" sx={{ p:1 }}>
        <SerachIcon />
      </IconButton>
    </Box>
      { /* Icon */}
      <Box display="flex" >
        <IconButton onClick={ colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlineIcon />
          ) : (
            <LightModeOutlineIcon />
          )}
        </IconButton>
        <IconButton>
          < NotificationsModeOutlineIcon />
        </IconButton>
        <IconButton>
          < SettingsModeOutlineIcon />
        </IconButton>
        <IconButton>
          < PersonModeOutlineIcon />
        </IconButton>
      </Box>
  </Box>
};

export default Topbar