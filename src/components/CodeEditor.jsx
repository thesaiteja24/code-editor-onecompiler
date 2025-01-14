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
  const confetti = new JSConfetti();

  const handleRunCode = () => {
    const iframe = document.getElementById("code-editor");
    iframe.contentWindow.postMessage(
      {
        eventType: "triggerRun",
      },
      "*"
    );
  };

  const handleLoadCode = () => {
    setTimeout(() => {
      const savedCode = JSON.parse(localStorage.getItem("saved-code"));
      console.log(savedCode);
      const iframe = document.getElementById("code-editor");
      iframe.contentWindow.postMessage(
        {
          eventType: "populateCode",
          language: savedCode.language,
          files: savedCode.files,
        },
        "*"
      );
    }, 100);
  };

  const handleFormatCode = () => {
    // Format code logic
  };

  window.onmessage = function (e) {
    // Save data on every key stroke
    if (e.data && e.data.language) {
      console.log(e.data.result);
      localStorage.setItem("saved-code", JSON.stringify(e.data));
    }

    // Confetti animation on successful execution
    if (
      e.data &&
      e.data.action === "runComplete" &&
      e.data.result.success === true
    ) {
      confetti.addConfetti();
    }
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
                width: { xs: "100%", md: "auto" },
              }}
              onClick={handleRunCode}
            >
              Run Code
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: { xs: "100%", md: "auto" },
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
              src={`https://onecompiler.com/embed/?hideRun=true&codeChangeEvent=true&listenToEvents=true&theme=${
                isDarkMode ? "dark" : "light"
              }`}
              style={{ width: "100%", height: "80vh" }}
              onLoad={handleLoadCode}
            />
          </Box>
        </Box>
      </Paper>
    </MuiThemeProvider>
  );
};

export default CodeEditor;
