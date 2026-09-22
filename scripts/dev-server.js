/**
 * Local dev server — plain Node, no Vercel CLI/account needed.
 * Serves the static site and runs the same api/*.js handlers Vercel would
 * run in production.
 *
 * Usage: node --env-file=.env scripts/dev-server.js
 * Then open http://localhost:3000 (and http://localhost:3000/adminmadar).
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const ROOT = path.join(__dirname, "..");
const PORT = process.env.PORT || 3000;

const contactHandler = require("../api/contact.js");
const adminSubmissionsHandler = require("../api/admin/submissions.js");
const adminSubmissionHandler = require("../api/admin/submission.js");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".json": "application/json",
};

function readBody(req) {
  return new Promise((resolve) => {
    var chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => {
      var raw = Buffer.concat(chunks).toString("utf8");
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (e) {
        resolve({});
      }
    });
  });
}

function vercelStyleRes(res) {
  res.status = function (code) {
    res.statusCode = code;
    return res;
  };
  res.json = function (body) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(body));
    return res;
  };
  return res;
}

function serveStatic(req, res, urlPath) {
  var filePath = urlPath === "/" ? "/index.html" : urlPath;
  var fullPath = path.join(ROOT, decodeURIComponent(filePath));

  if (!fullPath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    var ext = path.extname(fullPath);
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(data);
  });
}

var server = http.createServer(async (req, res) => {
  var url = new URL(req.url, "http://localhost");
  var pathname = url.pathname;

  // Same rewrite as vercel.json
  if (pathname === "/adminmadar") {
    serveStatic(req, res, "/adminmadar.html");
    return;
  }

  if (pathname === "/api/contact" && req.method === "POST") {
    req.body = await readBody(req);
    await contactHandler(req, vercelStyleRes(res));
    return;
  }

  if (pathname === "/api/admin/submissions" && req.method === "GET") {
    await adminSubmissionsHandler(req, vercelStyleRes(res));
    return;
  }

  if (pathname === "/api/admin/submission" && req.method === "GET") {
    req.query = Object.fromEntries(url.searchParams);
    await adminSubmissionHandler(req, vercelStyleRes(res));
    return;
  }

  serveStatic(req, res, pathname);
});

server.listen(PORT, () => {
  console.log("Madar dev server running:");
  console.log("  Site:  http://localhost:" + PORT);
  console.log("  Admin: http://localhost:" + PORT + "/adminmadar");
});
