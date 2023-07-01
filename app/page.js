import LearnUButton from './Components/LearnUButton'
import BrandIcon from './BrandIcon'
import TitleAndParagraph from "./components/TitleAndParagraph";

export default function Home() {
  return (
    <main>
      <BrandIcon />
      <TitleAndParagraph />
      <LearnUButton text={"GET STARTED"} />
    </main>
  );
}
