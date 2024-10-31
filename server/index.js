// server/index.js
import express from "express";
import path from "path";
import fs from "fs";
import { renderPage } from "./render.js";
import { sendBundle } from "./sendBundle.js";
import { createBundles } from "./createBundle.js";

const isDev = process.env.NODE_ENV !== "production";
const app = express();
const PORT = process.env.PORT || 3000;

if (isDev) {
  const _forge = path.resolve(".forge");
  if (!fs.existsSync(_forge)) {
    fs.mkdirSync(_forge);
  }
  try {
    createBundles();
  } catch (e) {
    console.log(e.message);
  }
}

app.get("*", async (req, res) => {
  const page = req.path === "/" ? "index" : req.path.slice(1);
  const bundlePath = page.split("/");
  if (bundlePath.length >= 2) {
    sendBundle(req, res, bundlePath);
    return;
  }

  try {
    const html = await renderPage(page);
    res.send(html);
  } catch (error) {
    res.status(404).send(`error: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
