import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      // Add your redirects here
      // Example: { source: "/old-path", destination: "/new-path", permanent: true },
      // Example with wildcard: { source: "/blog/:slug", destination: "/journal/:slug", permanent: true },
      { source: "/en", destination: "/", permanent: true },
      { source: "/ita", destination: "/", permanent: true },
      { source: "/en/journal", destination: "/journal", permanent: true },
      { source: "/ita/journal", destination: "/journal", permanent: true },
      {
        source: "/ita/journal/vuoto-futuro",
        destination: "/journal/vuoto-futuro",
        permanent: true,
      },
      {
        source: "/en/journal/vuoto-futuro",
        destination: "/journal/vuoto-futuro",
        permanent: true,
      },
      {
        source: "/ita/journal/eui-goccia",
        destination: "/journal/eui-goccia",
        permanent: true,
      },
      {
        source: "/en/journal/eui-goccia",
        destination: "/journal/eui-goccia",
        permanent: true,
      },
      {
        source: "/ita/journal/luar-bovisa-art-district",
        destination: "/journal/bovisa-art-district-luar",
        permanent: true,
      },
      {
        source: "/en/journal/luar-bovisa-art-district",
        destination: "/journal/bovisa-art-district-luar",
        permanent: true,
      },
      {
        source: "/en/projects/osservatorio-la-goccia",
        destination: "/projects/osservatorio-la-goccia",
        permanent: true,
      },
      {
        source: "/ita/progetti/osservatorio-la-goccia",
        destination: "/projects/osservatorio-la-goccia",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
