import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Spin, Alert } from 'antd';
import EventCard from '../components/EventCard';
import EventModal from '../components/EventModal';
import { fetchEvents } from '../services/eventsService';
import Filters from '../components/Filter';
import moment from 'moment';

function EventsPage() {
  const dispatch = useDispatch();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);

  // Using a useRef to store the events variable
  const eventsRef = useRef([]);
  
  useEffect(() => {
    dispatch(fetchEvents())
      .then((resultAction) => {
        if (fetchEvents.fulfilled.match(resultAction)) {
          console.log('Fetched events:', resultAction.payload);
          eventsRef.current = resultAction.payload;
          setFilteredEvents(resultAction.payload[0]);  // Setting initial filtered events.
          setLoading(false);
        } else {
          console.error('Failed to fetch events:', resultAction.error);
          setError('Failed to fetch events');
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('An unexpected error occurred');
        setLoading(false);
      });
  }, [dispatch]);

  const handleLocationChange = (selectedLocation) => {
    setFilteredEvents(eventsRef.current[0].filter((event) => event.location === selectedLocation));
  };

  const handleDateChange = (date) => {
    if(date && date.isValid()) {
       const formattedDate = date.format('YYYY-MM-DD');  
       setFilteredEvents(eventsRef.current[0].filter((event) => moment(event.date).format('YYYY-MM-DD') === formattedDate));
    }
  };

  const openModal = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  // Conditional rendering based on loading and error states
  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return (
      <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
      />
    );
  }

  // Once loading is done, render the events
  return (
    <div>
      <Filters
        locations={Array.from(new Set(eventsRef.current[0].map((e) => e.location)))} // Extracting unique locations
        onLocationChange={handleLocationChange}
        onDateChange={handleDateChange}
      />

      <Row gutter={[16, 16]}>
        {filteredEvents.map((event) => (
          <Col key={event.id} xs={24} sm={12} md={8} lg={6}>
            <EventCard event={event} onClick={() => openModal(event)} />
          </Col>
        ))}
      </Row>

      <EventModal event={selectedEvent} isOpen={!!selectedEvent} onClose={closeModal} />
    </div>
  );
}

export default EventsPage;
