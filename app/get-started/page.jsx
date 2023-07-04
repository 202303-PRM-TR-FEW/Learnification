import IntroPic from '../Components/IntroPic'
import TitleAndParagraph from '../Components/TitleAndParagraph'
import BrandIcon from '../Components/BrandIcon'
import LearnUButton from '../Components/LearnUButton'
import '../globals.css'
export default function Home() {
    return (
        <main className="p-8" >
            <div className="pb-[10rem] shadow-xl rounded-[50px] shadow-gray-600 md:flex md:flex-row-reverse md:items-center md:pb-[0rem]" style={{ boxShadow: "0 0 5px 0" }}>
                <IntroPic />
                <div className="md:p-[8rem]">
                    <BrandIcon />
                    <TitleAndParagraph />
                    <LearnUButton text="Get Started" />
                </div>
            </div>
        </main>
    )
}
