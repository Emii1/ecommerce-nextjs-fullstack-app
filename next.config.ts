import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //Since i am using Stripe to get images from,
  //i am adding the domains that are accepted to serve images in this project
  images: {
    domains: ["files.stripe.com"],
  },
};

export default nextConfig;
