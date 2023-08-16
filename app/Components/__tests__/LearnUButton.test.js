import React from 'react'
import SignInUp from '../SignInUp'
const { render, screen, fireEvent, waitFor  } = require("@testing-library/react")
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

describe('Image Upload Test', () => {
    it('should upload and display an image', async () => {
      const { getByLabelText, getByAltText } = render(<SignInUp />);
      const fileInput = getByLabelText('Upload Picture');

      const imageFile = new File(['image content'], 'test-image.png', {
        type: 'image/png',
      });
  
      fireEvent.change(fileInput, { target: { files: [imageFile] } });
  
      await waitFor(() => {
        const uploadedImage = getByAltText('Uploaded Image');
        expect(uploadedImage).toBeInTheDocument();
        expect(uploadedImage).toHaveAttribute('src', 'mocked-image-url');
      });
    });
  });

  describe('Country Dropdown Test', () => {
    it('should populate and update the country dropdown', () => {
      const countriesData = [
        { name: { common: 'Turkey' } },
        { name: { common: 'Saudi Arabia' } },
      ];
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(countriesData),
        })
      );
  
      const { getByLabelText, getByText } = render(<SignInUp />);
      const countryDropdown = getByLabelText('Select Country');

      countriesData.forEach((country) => {
        expect(getByText(country.name.common)).toBeInTheDocument();
      });

      fireEvent.change(countryDropdown, { target: { value: 'Saudi Arabia' } });
      
      expect(countryDropdown.value).toBe('Saudi Arabia');
    });
  });