import IntroPic from '../Components/IntroPic'
import TitleAndParagraph from '../Components/TitleAndParagraph'
import BrandIcon from '../Components/BrandIcon'
import LearnUButton from '../Components/LearnUButton'
import '../globals.css'
import Link from 'next/link'
export default function Home() {
    return (
        <main className="p-4 md:p-16 min-h-screen flex m-auto bg-[#f5f5f5]" >
            <div className="w-full shadow-light-gray rounded-[50px]
            md:pb-[0rem] flex flex-col md:flex-row-reverse md:items-center"
            >
                <IntroPic />
                <div className="xl:pl-[12rem] lg:pl-[6rem] max-md:mt-8 px-8 basis-full mx-auto">
                    <BrandIcon />
                    <TitleAndParagraph />
                    <Link href="/home">
                        <LearnUButton text="Get Started" />
                    </Link>
                </div>
            </div>
        </main>
    )
}
