import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Spin, Alert } from 'antd';
import EventCard from '../components/EventCard';
import EventModal from '../components/EventModal';
import { fetchEvents } from '../services/eventsService';
import Filters from '../components/Filter';
import moment from 'moment';

// EventsPage Component
// This component serves as the main page for displaying events.
function EventsPage() {
  // Redux dispatch hook
  const dispatch = useDispatch();

  // React state for managing modal, loading, error, and filtered events
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);

  // Using a useRef to store the events data, this won't trigger a re-render when updated.
  const eventsRef = useRef([]);

  // useEffect hook to fetch events from the service on component mount
  useEffect(() => {
    dispatch(fetchEvents())
      .then((resultAction) => {
        if (fetchEvents.fulfilled.match(resultAction)) {
          // If events are fetched successfully
          console.log('Fetched events:', resultAction.payload);
          eventsRef.current = resultAction.payload;
          setFilteredEvents(resultAction.payload[0]);  // Setting initial filtered events.
          setLoading(false);
        } else {
          // If there was an error in fetching the events
          console.error('Failed to fetch events:', resultAction.error);
          setError('Failed to fetch events');
          setLoading(false);
        }
      })
      .catch((error) => {
        // Catching unexpected errors
        console.error('Error:', error);
        setError('An unexpected error occurred');
        setLoading(false);
      });
  }, [dispatch]);

  // Handler for filtering events by location
  const handleLocationChange = (selectedLocation) => {
    setFilteredEvents(eventsRef.current[0].filter((event) => event.location === selectedLocation));
  };

  // Handler for filtering events by date
  const handleDateChange = (date) => {
    if(date && date.isValid()) {
       const formattedDate = date.format('YYYY-MM-DD');  
       setFilteredEvents(eventsRef.current[0].filter((event) => moment(event.date).format('YYYY-MM-DD') === formattedDate));
    }
  };

  // Function to open the event details modal
  const openModal = (event) => {
    setSelectedEvent(event);
  };

  // Function to close the event details modal
  const closeModal = () => {
    setSelectedEvent(null);
  };

  // Conditional rendering for the loading state
  if (loading) {
    return <Spin size="large" />;
  }

  // Conditional rendering for the error state
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

  // Rendering the main event listing and the filters
  return (
    <div>
      <Filters
        locations={Array.from(new Set(eventsRef.current[0].map((e) => e.location)))} // Extracting unique locations from events
        onLocationChange={handleLocationChange}
        onDateChange={handleDateChange}
      />

      {/* Displaying all filtered events in a responsive grid layout */}
      <Row gutter={[16, 16]}>
        {filteredEvents.map((event) => (
          <Col key={event.id} xs={24} sm={12} md={8} lg={6}>
            <EventCard event={event} onClick={() => openModal(event)} />
          </Col>
        ))}
      </Row>

      {/* Event Modal for displaying event details */}
      <EventModal event={selectedEvent} isOpen={!!selectedEvent} onClose={closeModal} />
    </div>
  );
}

export default EventsPage;
