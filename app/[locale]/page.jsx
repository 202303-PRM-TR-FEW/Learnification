import { useLocale } from 'next-intl'
import { redirect } from 'next/navigation'
export default function Page() {
    const locale = useLocale()
    redirect(`${locale}/get-started`)
}
