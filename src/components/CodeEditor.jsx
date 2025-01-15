import React, { useEffect, useState } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { Box, Button, CssBaseline, Paper } from "@mui/material";
import JSConfetti from "js-confetti";
import { useTheme } from "../ThemeContext";
import { formatCode } from "../utils/codeFormatter";

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

  const handleFormatCode = async () => {
    try {
      // Retrieve the saved code from localStorage
      const savedCode = JSON.parse(localStorage.getItem("saved-code"));

      // Check if the code is available
      if (!savedCode?.files?.length) {
        console.error("No code found in localStorage.");
        return;
      }

      // Iterate over all the files in the savedCode object
      for (let i = 0; i < savedCode.files.length; i++) {
        console.log(i);
        const code = savedCode.files[i].content;
        let language = savedCode.language;
        const extension = savedCode.files[i].name;
        console.log(extension);
        if (extension.includes(".css")) {
          language = "css";
        } else if (extension.includes(".js")) {
          language = "javascript";
        }

        // Format the code
        const formattedCode = await formatCode(code, language);

        // Update the formatted code in the files array
        savedCode.files[i].content = formattedCode;
      }

      // Send the updated code to the iframe
      const iframe = document.getElementById("code-editor");
      iframe.contentWindow.postMessage(
        {
          eventType: "populateCode",
          language: savedCode.language, // Send the language from savedCode
          files: savedCode.files, // Send the updated files with formatted code
        },
        "*"
      );

      console.log("Code formatted successfully.");
    } catch (error) {
      console.error("Error formatting code:", error);
    }
  };

  window.onmessage = function (e) {
    // Save data on every key stroke
    if (e.data && e.data.language) {
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
