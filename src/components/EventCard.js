import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

function EventCard({ event, onClick }) {
  const cardStyles = {
    width: '300px',
    height: '400px',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#001529',
    color:'white',   // New background color
  };

  const imageContainerStyles = {
    height: '50%',
    overflow: 'hidden',
  };

  const imgStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  };

  const titleStyles = {
    marginBottom: '10px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color:'white'
  };

  return (
    <Card
      hoverable
      style={cardStyles}
      cover={
        <div style={imageContainerStyles}>
          <img alt={event.title} src={event.image} style={imgStyles} />
        </div>
      }
      onClick={() => onClick(event)}
    >
      <Title level={3} style={titleStyles}>{event.title}</Title>
      <Text style={{color:'white'}}>{event.description}</Text>  {/* Removed ellipsis */}
    </Card>
  );
}

export default EventCard;

