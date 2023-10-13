/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        domains: ['assets-prd.ignimgs.com']
    }
}

module.exports = nextConfig
