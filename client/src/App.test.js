import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import DisplayData from './Components/DisplayData';
import NavBar from './Components/NavBar';
import useDarkMode from './hooks/useDarkMode';
import useLocalStorage from "./hooks/useLocalStorage";

test("DisplayData is working correctly", () => {
  const data = [
    { name: "Alex Morgan", country: "United States", searches: 100 }
  ];
  render(<DisplayData data={data}/>)
});

test("NavBar is working correctly", () => {
  render(<NavBar/>);
});

test("useDarkMode is working correctly", () => {
  render(<useDarkMode/>);
});

test("useLocalStorage is working correctly", () => {
  render(<useLocalStorage/>);
});

test('renders without crashing', () => {
  render(<App />);
});
