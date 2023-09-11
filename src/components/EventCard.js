
import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

function EventCard({ event, onClick }) {
  // Styling for the entire card container
  const cardStyles = {
    width: '300px',
    height: '400px',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#001529',   // Dark blue background color
    color:'white',                // Text color
  };

  // Styling for the image container which is 50% of the card height
  const imageContainerStyles = {
    height: '50%',
    overflow: 'hidden',
  };

  // Styling for the event image
  const imgStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  };

  // Styling for the event title
  const titleStyles = {
    marginBottom: '10px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis', // If the title is too long, it will be truncated with "..."
    color:'white',
  };

  return (
    // The main card component that will display the event
    <Card
      hoverable
      style={cardStyles}
      cover={
        // The image container that holds the event image
        <div style={imageContainerStyles}>
          <img alt={event.title} src={event.image} style={imgStyles} />
        </div>
      }
      // When the card is clicked, it will trigger the passed onClick function with the event data
      onClick={() => onClick(event)}
    >
      {/* Display the event title */}
      <Title level={3} style={titleStyles}>{event.title}</Title>
      {/* Display the event description */}
      <Text style={{color:'white'}}>{event.description}</Text>
    </Card>
  );
}

export default EventCard;
