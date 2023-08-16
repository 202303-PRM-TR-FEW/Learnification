import { useTranslations } from "next-intl";

export default function formatDuration(durationInSeconds, locale = 'en') {

    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);

    if (hours < 1) {
        return `${minutes}${locale === 'en' ? 'm' : 'dk'}`;
    }

    return `${hours}${locale === 'en' ? 'h' : 's'} ${minutes}${locale === 'en' ? 'm' : 'dk'}`;
}