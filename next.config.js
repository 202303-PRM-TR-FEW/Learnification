/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")("./i18n.js");
module.exports = withNextIntl({
  images: {
    domains: [
      "assets.api.uizard.io",
      "images.unsplash.com",
      "learnu7bucket.s3.us-east-1.amazonaws.com",
      "learnu7bucket.s3.amazonaws.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "meetstheeyestudios.com",
      "pbs.twimg.com",
      "uploads-ssl.webflow.com",
      "scontent.fist7-2.fna.fbcdn.net",
      "kajabi-storefronts-production.kajabi-cdn.com",
      "e1.pxfuel.com",
      "media.licdn.com",
      "cloudxlab.com",
      "brad.site",
      "wallpapercave.com",
      "i.guim.co.uk",
      "schoolofhealthcare.net",
      "st2.depositphotos.com",
      "500queerscientists.com",
      "images.pexels.com",
      "i.ytimg.com",
      "yt3.googleusercontent.com",
      "www.freecodecamp.org",
    ],
  },
});
