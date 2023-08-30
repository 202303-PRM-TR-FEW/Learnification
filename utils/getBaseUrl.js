export default function getBaseUrl() {
    if (process.env.VERCEL_URL) {
        const domain = process.env.VERCEL_URL;
        return `$https://${domain}`
    } else {
        return "http://localhost:3000";
    }
}