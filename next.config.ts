import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'downloader.disk.yandex.ru',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'disk.yandex.ru',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'yadi.sk',
        pathname: '/**',
      },
    ],
  },
};

export default withPayload(nextConfig);
