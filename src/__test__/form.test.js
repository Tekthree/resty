import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from '../app.js';
import { expect } from "@jest/globals";

test('testing if results are rendered after form submit', async ()=>{
  render(<App />)

  const pressed = screen.getByTestId('button');
  await fireEvent.click(pressed, {target: {url: '', method: ''}});

  const name = await waitFor(()=> screen.getByTestId('data'));
  console.log(name)

  expect(JSON.parse(name.value).results[0].name).toBe('fake thing 1');
})

