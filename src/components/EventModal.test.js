import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EventModal from './EventModal';

describe('<EventModal />', () => {
  const mockEvent = {
    title: 'Sample Event',
    date: '2023-09-07',
    location: 'Sample Location',
    description: 'This is a sample event description.',
    image: 'sample-image.jpg'
  };

  test('does not render when isOpen is false', () => {
    render(<EventModal isOpen={false} event={mockEvent} onClose={jest.fn()} />);
    expect(screen.queryByText('Sample Event')).toBeNull();
  });

  test('renders correctly with given event data when isOpen is true', () => {
    render(<EventModal isOpen={true} event={mockEvent} onClose={jest.fn()} />);
    expect(screen.getByText('Sample Event')).toBeInTheDocument();
    expect(screen.getByText('This is a sample event description.')).toBeInTheDocument();
    expect(screen.getByText('Sample Location')).toBeInTheDocument();
  });

  test('calls onClose when the cancel button is clicked', () => {
    const onClose = jest.fn();
    render(<EventModal isOpen={true} event={mockEvent} onClose={onClose} />);
    
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(onClose).toHaveBeenCalled();
  });

  test('does not render when event is not provided', () => {
    render(<EventModal isOpen={true} onClose={jest.fn()} />);
    expect(screen.queryByText('Sample Event')).toBeNull();
  });
});
