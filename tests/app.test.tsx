import {it, expect, describe, vi} from "vitest";
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Table from "../src/components/Table";
import InputFilter from "../src/components/InputFilter";
import {Country} from "../src/types/types";

describe('App', () => {
  it('shows results in the table based on the input filter', () => {
    const countries: Country[] = [
      {code: 'EE', name: 'Estonia'},
      {code: 'AR', name: 'Argentina'}
    ];

    const mockFilterFunction = vi.fn((input) => {
      return countries.filter(country => country.code.includes(input));
    });

    // render inputFilter and table components
    render(
      <>
        <InputFilter onFilterChange={mockFilterFunction}/>
        <Table countries={countries}/>
      </>
    );

    const input = screen.getByRole('textbox');

    // Mock user typing the country code in the input
    fireEvent.change(input, {target: {value: 'AR'}});
    const filteredCountries = mockFilterFunction('AR');

    // re-render component with the new code
    render(<Table countries={filteredCountries}/>);

    const tableCells = screen.getAllByRole('cell');
    const matchingCell = tableCells.find(cell => cell.textContent === 'AR');
    expect(matchingCell).toBeInTheDocument();
  });
})