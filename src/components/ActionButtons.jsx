import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Button,
  Typography,
  FormControl,
  Select,
  MenuItem as MuiMenuItem,
  Box,
} from "@mui/material";

const ActionButtons = ({
  language,
  onRunClick,
  onFormatClick,
  onLanguageChange,
  themeMode,
}) => {
  const isDarkMode = themeMode === "dark";

  return (
    <Box
      sx={{
        display: "block",
        backgroundColor: isDarkMode ? "#333" : "background.default",
        margin: 1,
        padding: 1,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        {/* Run Button */}
        <Button
          key="run-mobile"
          onClick={onRunClick}
          sx={{
            background: isDarkMode ? "#27ae60" : "rgb(46, 204, 113)",
            color: isDarkMode ? "#ecf0f1" : "white",
            border: "none",
            borderRadius: "5px",
            marginRight: 2,
            display: "flex",
            alignItems: "center",
            fontSize: "12px",
            "&:hover": {
              backgroundColor: isDarkMode ? "#2ecc71" : "#2ecc71",
            },
          }}
        >
          <PlayArrowIcon sx={{ fontSize: "12px", marginRight: "5px" }} />
          Run
        </Button>

        {/* Format Button */}
        <Button
          key="format-mobile"
          onClick={onFormatClick}
          sx={{
            background: isDarkMode ? "#2980b9" : "rgb(52, 152, 219)",
            color: isDarkMode ? "#ecf0f1" : "white",
            border: "none",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            "&:hover": {
              backgroundColor: isDarkMode ? "#3498db" : "#3498db",
            },
          }}
        >
          <Typography sx={{ fontSize: "12px" }}>Format</Typography>
        </Button>

        {/* Language Dropdown */}
        <FormControl sx={{ width: "7rem", marginLeft: 1 }}>
          <Select
            value={language}
            onChange={onLanguageChange}
            sx={{
              color: isDarkMode ? "#ecf0f1" : "black",
              fontSize: "12px",
              backgroundColor: isDarkMode ? "#2c3e50" : "white",
              "& .MuiSelect-icon": {
                color: isDarkMode ? "#ecf0f1" : "black",
              },
            }}
          >
            <MuiMenuItem value="html">HTML</MuiMenuItem>
            <MuiMenuItem value="python">Python</MuiMenuItem>
            <MuiMenuItem value="c">C</MuiMenuItem>
            <MuiMenuItem value="cpp">C++</MuiMenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ActionButtons;
