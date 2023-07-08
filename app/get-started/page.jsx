import IntroPic from '../Components/IntroPic'
import TitleAndParagraph from '../Components/TitleAndParagraph'
import BrandIcon from '../Components/BrandIcon'
import LearnUButton from '../Components/LearnUButton'
import '../globals.css'
import Link from 'next/link'
import Categories from '../Components/Categories'
import CategoriesExpansion from '../Components/CategoriesExpansion'
export default function Home() {
    return (
        <Categories />
    )
}

/*<main className="p-4 lg:p-16 min-h-screen flex m-auto bg-[#f5f5f5]" >
            <div className="w-full shadow-light-gray rounded-[50px]
            lg:pb-[0rem] flex flex-col lg:flex-row-reverse lg:items-center"
            >
                <IntroPic />
                <div className="xl:pl-[12rem] lg:pl-[6rem] max-lg:mt-8 px-8 pb-8 basis-full mx-auto">
                    <BrandIcon />
                    <TitleAndParagraph />
                    <Link href="/home">
                        <LearnUButton text="Get Started" />
                    </Link>
                </div>
            </div>
        </main>*/