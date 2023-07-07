import IntroPic from '../../Components/GetStarted/IntroPic'
import TitleAndParagraph from '../../Components/GetStarted/TitleAndParagraph'
import BrandIcon from '../../Components/GetStarted/BrandIcon'
import LearnUButton from '../../Components/LearnUButton'
import '../../globals.css'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
export default function Home() {
  const locale = useLocale()
  const t = useTranslations('GetStarted')
  return (
    <main className="p-4 lg:p-16 min-h-screen flex m-auto bg-white-smoke" >
      <div className="w-full shadow-light-gray rounded-[50px]
            lg:pb-[0rem] flex flex-col lg:flex-row-reverse lg:items-center"
      >
        <IntroPic />
        <div className="xl:pl-[12rem] lg:pl-[6rem] max-lg:mt-8 px-8 pb-8 basis-full mx-auto">
          <BrandIcon />
          <TitleAndParagraph />
          <Link href='/home'>
            <LearnUButton text={t('button')} />
          </Link>
        </div>
      </div>
    </main>
  )
}

