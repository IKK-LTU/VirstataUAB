<<<<<<< HEAD
/** @format */

import React from "react";
import { render } from "@testing-library/react";
import App from "./Virstata";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
=======
import React from 'react'
import { render } from '@testing-library/react'
import App from './Virstata'

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
>>>>>>> 8de82e85691d9d94dd98b9a587011e2f47145186
