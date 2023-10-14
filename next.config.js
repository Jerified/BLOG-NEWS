/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        domains: ["*.newsapi.org"]
    }
}

module.exports = nextConfig
