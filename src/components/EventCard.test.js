// EventCard.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventCard from './EventCard'; 

test('it renders without crashing', () => {
  const event = {
    title: 'Test Event',
    description: 'Test Description',
    image: 'test-image.jpg'
  };
  render(<EventCard event={event} onClick={() => {}} />);
});

test('it displays the correct title', () => {
  const event = {
    title: 'Test Event',
    description: 'Test Description',
    image: 'test-image.jpg'
  };

  const { getByText } = render(<EventCard event={event} onClick={() => {}} />);
  expect(getByText(event.title)).toBeInTheDocument();
});

test('it displays the correct description', () => {
  const event = {
    title: 'Test Event',
    description: 'Test Description',
    image: 'test-image.jpg'
  };

  const { getByText } = render(<EventCard event={event} onClick={() => {}} />);
  expect(getByText(event.description)).toBeInTheDocument();
});

test('the image has the correct src attribute', () => {
  const event = {
    title: 'Test Event',
    description: 'Test Description',
    image: 'test-image.jpg'
  };

  const { getByAltText } = render(<EventCard event={event} onClick={() => {}} />);
  const image = getByAltText(event.title);
  expect(image).toHaveAttribute('src', event.image);
});

test('onClick function is triggered with the correct event when card is clicked', () => {
  const event = {
    title: 'Test Event',
    description: 'Test Description',
    image: 'test-image.jpg'
  };
  const onClickMock = jest.fn();

  const { getByText } = render(<EventCard event={event} onClick={onClickMock} />);
  fireEvent.click(getByText(event.title));
  
  expect(onClickMock).toHaveBeenCalledWith(event);
});
