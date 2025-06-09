/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  async rewrites() {
    return [
      {
        source: "/hi",
        destination: "http://localhost:3001/hi",
        basePath: false,
      },
      {
        source: "/demodash1/:path+",
        destination: "http://localhost:3001/:path+",
        basePath: false,
      },
      {
        source: "/:locale*/demodash2/:path+",
        destination: "http://localhost:4000/:path+",
      },
      {
        source: `/en/demodash23/:path+`,
        destination: `https://dashboard.refhired.com/:path+`,
      },
      {
        source: `/en/demodash3/:path+`,
        destination: `https://dashboard.refhired.com/:path+`,
      },
      {
        source: "/:locale*/demo10/:match*",
        destination: "https://dashboard.refhired.com/:match*",
      },
    ];
  },
  transpilePackages: ["@referrer/prisma", "@referrer/ui", "@referrer/lib"],
};
