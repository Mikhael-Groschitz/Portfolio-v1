import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: "/v1",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

export default nextConfig;