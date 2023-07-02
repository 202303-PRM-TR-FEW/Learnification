import Image from 'next/image'
import IntroPic from './components/IntroPic'
import TitleAndParagraph from './components/TitleAndParagraph'
import BrandIcon from './components/BrandIcon'
import LearnUButton from './components/LearnUButton'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <IntroPic />
      <TitleAndParagraph />
      <BrandIcon />
      <LearnUButton text="Get Started"/>
    </main>
  )
}
