import Image from 'next/image'
import IntroPic from './components/IntroPic'
import TitleAndParagraph from './components/TitleAndParagraph'
import BrandIcon from './components/BrandIcon'
import LearnUButton from './components/LearnUButton'
import './globals.css'
export default function Home() {
  return (
    <main className="p-8" >
      <div className="pb-[10rem] shadow-xl rounded-[50px] shadow-gray-600 md:flex md:flex-row-reverse md:items-center md:pb-[0rem]" style={{boxShadow: "0 0 5px 0"}}>
        <IntroPic />
        <div className="md:p-[8rem]">
          <BrandIcon />
          <TitleAndParagraph/>
          <LearnUButton text="Get Started"/>
        </div>
      </div>
    </main>
  )
}
