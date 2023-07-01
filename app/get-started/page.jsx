import React from 'react'
import BrandIcon from '../Components/BrandIcon'
import TitleAndParagraph from '../Components/TitleAndParagraph'
import LearnUButton from '../Components/LearnUButton'

export default function Welcome() {
    return (
        <main>
            <BrandIcon />
            <TitleAndParagraph />
            <LearnUButton text={"GET STARTED"} />
        </main>
    )
}
