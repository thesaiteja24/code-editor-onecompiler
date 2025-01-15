export const formatCode = async (code, language) => {
  try {
    // Load Prettier and necessary plugins dynamically
    const [prettier, prettierBabel, prettierEstree, prettierHtml] =
      await Promise.all([
        import("https://unpkg.com/prettier@3.4.2/standalone.mjs"),
        import("https://unpkg.com/prettier@3.4.2/plugins/babel.mjs"),
        import("https://unpkg.com/prettier@3.4.2/plugins/estree.mjs"),
        import("https://unpkg.com/prettier@3.4.2/plugins/html.mjs"),
      ]);

    // Determine the parser and plugins based on the language
    let parser, plugins;
    switch (language.toLowerCase()) {
      case "javascript":
        parser = "babel";
        plugins = [prettierBabel.default, prettierEstree.default];
        break;
      case "typescript":
        parser = "babel";
        plugins = [prettierBabel.default, prettierEstree.default];
        break;
      case "html":
        parser = "html";
        plugins = [prettierHtml.default];
        break;
      default:
        throw new Error(`Unsupported language: ${language}`);
    }

    // Format the code
    const formattedCode = await prettier.format(code, {
      parser,
      plugins,
      semi: false,
      singleQuote: true,
      printWidth: 80,
      tabWidth: 2,
      trailingComma: "es5",
      bracketSpacing: true,
      arrowParens: "avoid",
    });

    return formattedCode;
  } catch (err) {
    console.error("Error formatting code:", err);
    throw err;
  }
};
