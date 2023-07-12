import { NextIntlClientProvider, useLocale } from "next-intl"
import { notFound } from "next/navigation"
import '../globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'LearnU',
    description: 'LearnU is a platform for learning and teaching online.'
}

export default async function LocaleLayout({ children, params }) {
    const locale = useLocale()
    if (params.locale !== locale) {
        return notFound()
    }
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
    return (
        <html lang="{locale}">
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    )
}