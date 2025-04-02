import React from 'react'
import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, Icon, IconButton, Typography, useTheme} from "@mui/material";
import { Link } from 'react-router-dom';
import { tokens } from "../theme";
import HomeOutlineIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ContactsOutlineIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlineIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import CalenderTodayOutlineIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BarChartOutlineIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlineIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlineIcon from "@mui/icons-material/MenuOutlined";
import MapOutlineIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Link to={to} style={{ textDecoration: 'none' }}> 
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  )
}


function sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarStyle = {
    width: isCollapsed ? "80px": "250px",
    transition: "width 0.3s ease-in-out",
    height: "100vh",
    postion: "fixed",
    top: 0,
    bottom: 0,
    scrollbarWidth: "2px"
  };
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
    sx={{
      height: "100vh",
      display: "flex",
      "& .ps-sidebar-container": {
        background: `${colors.primary[600]} !important`
      },
      "& .ps-menu-button": {
        padding: "5px 35px 5px 20px !important", 
      },
      "& .ps-menu-button:hover": {
        color: "#868dfb !important", 
      },
      "& .ps-menu-button.ps-active": {
        color: "#6870fa !important", 
      },
      "& .ps-menu-icon": {
        backgroundColor: "transparent !important",
      },
    }}
    >
      <Sidebar collapsed={isCollapsed} style={sidebarStyle}>
        <Menu iconShape="square">
          {/* Logo and Menu icon */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlineIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.blueAccent[400],
            }}
            sx={{
              "&:hover": {
                backgroundColor: colors.blueAccent[500], // Change to any color you want
                color: "white", // Adjust text color on hover
              },
            }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color= {colors.grey[100]}>
                  Admins
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlineIcon />
                  </IconButton>
                </Box>
              )}
          </MenuItem>
          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img 
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={"./src/assets/pfp.jpg"}
                  style={{ cursor: "pointer", borderRadius:"50%" }}  
                />
              </Box>
              <Box textAlign="center">
                <Typography 
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m:"10px 0 0 0" }}>
                    Lokesh
                </Typography>
                <Typography
                  variant="h5"
                  color={colors.greenAccent[500]}
                >VP Dashboard</Typography>
              </Box>
            </Box>
          )}
          {/* Menu Items */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item 
              title="Dashboard"
              to="/"
              icon={<HomeOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed && (
            <Typography
            variant='h6'
            color={colors.grey[300]}
            sc={{ m: "15px 0 5px 20px"}}
          >
          Data
          </Typography>
            )}
            <Item 
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed && (
            <Typography
            variant='h6'
            color={colors.grey[300]}
            sc={{ m: "15px 0 5px 20px"}}
            >
              Pages
            </Typography>
            )}
            <Item 
              title="Profile Form"
              to="/form"
              icon={<PersonOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Calender"
              to="/calendar"
              icon={<CalenderTodayOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="FAQ"
              to="/faq"
              icon={<HelpOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed && (
            <Typography
            variant='h6'
            color={colors.grey[300]}
            sc={{ m: "15px 0 5px 20px"}}
            >
              Charts
            </Typography>
            )}
            <Item 
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item 
              title="Geography chart"
              to="/geography"
              icon={<MapOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default sidebar