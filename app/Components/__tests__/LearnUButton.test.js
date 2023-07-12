import React from 'react'
const { render, screen } = require("@testing-library/react")
const { default: LearnUButton } = require("../LearnUButton")

describe('LearnUButton tests', () => {
    it('should render a button', () => {
        render(<LearnUButton text={"GET STARTED"} />)

        const button = screen.getByRole('button', {
            name: /get started/i
        })
        expect(button).toBeInTheDocument()
    })
})