/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site used to be plain .html files — keep any old shared links working.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/join.html", destination: "/join", permanent: true },
      { source: "/links.html", destination: "/links", permanent: true },
      { source: "/adminmadar.html", destination: "/adminmadar", permanent: true },
    ];
  },
};

export default nextConfig;
