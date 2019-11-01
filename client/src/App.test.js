import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import DisplayData from './Components/DisplayData';

test("DisplayData is working correctly", () => {
  const data = [
    { name: "Alex Morgan", country: "United States", searches: 100 }
  ];
  render(<DisplayData data={data}/>)
}) 

test('renders without crashing', () => {
  render(<App />);
});
