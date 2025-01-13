import React, { useEffect, useState } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { Box, Button, CssBaseline, Paper } from "@mui/material";
import JSConfetti from "js-confetti";
import { useTheme } from "../ThemeContext";

const CodeEditor = () => {
  const { isDarkMode } = useTheme();
  const [code, setCode] = useState(
    () => localStorage.getItem("editorCode") || ""
  );
  const confetti = new JSConfetti();

  useEffect(() => {
    localStorage.setItem("editorCode", code);
  }, [code]);

  const handleRunCode = () => {
    confetti.addConfetti();
  };

  const handleFormatCode = () => {
    // Format code logic
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Paper>
        <Box
          sx={{
            padding: ".5rem",
          }}
        >
          <Box
            sx={{
              margin: "1rem",
              gap: 2,
              display: "flex",
              flexDirection: { xs: "row", md: "row" },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: { xs: "100%", md: "auto" }, // Full width on mobile, auto width on larger screens
              }}
              onClick={handleRunCode}
            >
              Run Code
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: { xs: "100%", md: "auto" }, // Full width on mobile, auto width on larger screens
              }}
              onClick={handleFormatCode}
            >
              Format Code
            </Button>
          </Box>
          <Box>
            <iframe
              id="code-editor"
              title="OneCompiler Editor"
              src={`https://onecompiler.com/embed/python?theme=${
                isDarkMode ? "dark" : "light"
              }`}
              style={{ width: "100%", height: "80vh" }}
            />
          </Box>
        </Box>
      </Paper>
    </MuiThemeProvider>
  );
};

export default CodeEditor;
