import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import FilmsComponent from './FilmsComponent';
import { FetchFilmsAPI } from '../../Services/API-Handlers'; // Correct import statement
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

// Mock FetchFilmsAPI function
jest.mock('../../Services/API-Handlers', () => ({
  FetchFilmsAPI: jest.fn(),
}));

const MockFlimsComponent = ()=>{
    return (
        <BrowserRouter>
            <FilmsComponent />
        </BrowserRouter>
    )
}
describe('FilmsComponent', () => {
    it('DOM Elements count', async () => {
      const mockFilms = [
        { title: 'Film 1', producer: 'Producer 1', director: 'Director 1', url: 'url1' },
        { title: 'Film 2', producer: 'Producer 2', director: 'Director 2', url: 'url2' },
      ];
      FetchFilmsAPI.mockResolvedValueOnce({ results: mockFilms });
    
        render(<MockFlimsComponent />);

        await waitFor(() => {
        const heading = screen.getAllByRole('heading');
        expect(heading.length).toEqual(6)
        });
    });


    it('fetches films and displays them correctly', async () => {
        const mockFilms = [
            { title: 'Film 1', producer: 'Producer 1', director: 'Director 1', url: 'url1' },
            { title: 'Film 2', producer: 'Producer 2', director: 'Director 2', url: 'url2' },
        ];
        FetchFilmsAPI.mockResolvedValueOnce({ results: mockFilms });
        
        render(<MockFlimsComponent />);

        await waitFor(() => {
        // Assert that each film is displayed correctly in the component
        mockFilms.forEach((film) => {
            expect(screen.getByText(film.title)).toBeInTheDocument();
            expect(screen.getByText(`Producer: ${film.producer}`)).toBeInTheDocument();
            expect(screen.getByText(`Director: ${film.director}`)).toBeInTheDocument();
        });
        });
    });
});
