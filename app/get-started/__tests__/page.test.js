import GetStarted from "../page"
import { render, screen } from "@testing-library/react"

describe('Get Started Page', () => {
    it('should render a button', () => {
        render(<GetStarted />)
        const button = screen.getByRole('button', {
            name: /get started/i
        })

        expect(button).toBeInTheDocument()
    })
})