import { useLocale } from "next-intl"
import { notFound } from "next/navigation"
export default function LocaleLayout({ children, params }) {
    const locale = useLocale()
    if (params.locale !== locale) {
        return notFound()
    }
    return (
        <html lang="{locale}">
            <body>
                {children}
            </body>
        </html>
    )
}
