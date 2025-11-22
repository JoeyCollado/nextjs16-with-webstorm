import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true, // after installing the package for memoization
  experimental:{
      turbopackFileSystemCacheForDev: true,
  }
};

export default nextConfig;
