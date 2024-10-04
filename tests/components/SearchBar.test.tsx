import { useRouter, useSearchParams } from 'next/navigation';
import { render, screen, fireEvent, act } from '@testing-library/react';

import SearchBar from '@free-market-web-ui/components/SearchBar';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
    useSearchParams: jest.fn(),
}));

describe('SearchBar', () => {
    const mockPush = jest.fn();
    const mockSearchParams = { get: jest.fn() };

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
        (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);
        mockSearchParams.get.mockReturnValue('initial search');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders the search input with the initial value from search params', () => {
        render(<SearchBar />);
        const input = screen.getByPlaceholderText('Nunca dejes de buscar') as HTMLInputElement;

        expect(input).toBeInTheDocument();
        expect(input.value).toBe('initial search');
    });

    it('navigates to the correct URL on form submission with valid query', async () => {
        render(<SearchBar />);

        const input = screen.getByPlaceholderText('Nunca dejes de buscar') as HTMLInputElement;
        const button = screen.getByRole('button');

        await act(async () => {
            fireEvent.change(input, { target: { value: 'new search' } });
            fireEvent.click(button);
        });
        expect(mockPush).toHaveBeenCalledWith('/items?search=new%20search');
    });

    it('does not navigate when the query is empty', async () => {
        render(<SearchBar />);

        const input = screen.getByPlaceholderText('Nunca dejes de buscar') as HTMLInputElement;
        const button = screen.getByRole('button');

        await act(async () => {
            fireEvent.change(input, { target: { value: '' } });
            fireEvent.click(button);
        });
        expect(mockPush).not.toHaveBeenCalled();
    });

    it('disables the input and button while submitting', async () => {
        render(<SearchBar />);

        const input = screen.getByPlaceholderText('Nunca dejes de buscar') as HTMLInputElement;
        const button = screen.getByRole('button');

        await act(async () => {
            fireEvent.change(input, { target: { value: 'valid query' } });
        });

        await act(async () => {
            fireEvent.click(button);
        });
    });
});
