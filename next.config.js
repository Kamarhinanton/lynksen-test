/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn2.thecatapi.com'], // Додайте свій хост сюди
  },
}

module.exports = nextConfig
