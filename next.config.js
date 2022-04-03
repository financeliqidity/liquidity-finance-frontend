module.exports = {
  reactStrictMode: true,
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@/components/*": ["components/*"],
      "@/styles/*": ["styles/*"],
      "@/config/*": ["config/*"],
      "@/context/*": ["context/*"],
      "@/helpers/*": ["helpers/*"],
      "@/layouts/*": ["layouts/*"],
      "@/hoc/*": ["hoc/*"],
    },
  },
  images: {
    domains: ["cdn.coinranking.com"],
  },
};
