import fs from "fs";
import path from "path";
import * as esbuild from "esbuild";

export async function createBundles() {
  const pagesDir = path.resolve("./client/src/pages");
  const pages = fs.readdirSync(pagesDir);

  const checkIfDirExists = fs.existsSync(path.resolve(".forge/pages"));
    if (!checkIfDirExists) {
        fs.mkdirSync(path.resolve(".forge/pages"));
        }

  for (const page of pages) {
    const pagePath = path.resolve(pagesDir, page, "page.js");
    if (!fs.existsSync(pagePath)) {
      throw new Error("Page not found");
    }
    const bundlePath = path.resolve(".forge/pages", page, "bundle.js");
    try {
      const checkIfDirExists = fs.existsSync(
        path.resolve(".forge/pages", page)
      );
      if (!checkIfDirExists) {
        fs.mkdirSync(path.resolve(".forge/pages", page));

      }
    } catch (e) {
      console.log(e.message,"dir");
    }

    const cssPage = path.resolve(pagesDir, page, "styles.css");

    try {
        if (!fs.existsSync(cssPage)) {
            fs.writeFileSync(cssPage, "");
        }
        const cssBundle = path.resolve(".forge/pages", page, "styles.css");
        fs.copyFileSync(cssPage, cssBundle);
      
    } catch (e) {
      console.log(e.message,"css");
    }

    const checkIfBundleExists = fs.existsSync(bundlePath);
    if (checkIfBundleExists) {
      fs.unlinkSync(bundlePath);
    }

    await esbuild.build({
      entryPoints: [pagePath],
      bundle: true,
      outfile: bundlePath,
      minify: true,
      sourcemap: true,
      loader: {
        ".js": "jsx",
        ".png": "dataurl",
        ".css": "text",
      },
    });
  }
}
