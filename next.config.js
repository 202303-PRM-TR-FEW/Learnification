/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
    './i18n.js'
)
module.exports = withNextIntl({
    images: {
        domains: ['assets.api.uizard.io', "images.unsplash.com", 'learnu7bucket.s3.us-east-1.amazonaws.com', 'lh3.googleusercontent.com']
    }
})
