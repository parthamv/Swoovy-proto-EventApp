import { Modal } from 'antd';

/**
 * EventModal Component
 * 
 * This component displays detailed information about an event within a modal.
 * 
 * Props:
 * - event: The event object containing details like title, date, location, description, and image.
 * - isOpen: A boolean indicating if the modal should be shown or not.
 * - onClose: A function to be called when the modal is closed.
 */
function EventModal({ event, isOpen, onClose }) {

  // If the modal is not intended to be open or the event data is missing, we return null to prevent rendering.
  if (!isOpen || !event) return null;

  return (
    <Modal 
      // Set the modal title as the event title
      title={event.title}
      // The function to be called when the modal close button is clicked
      onCancel={onClose}
      // Removes the default footer buttons ('OK' and 'Cancel')
      footer={null}
      // The 'open' prop determines if the modal should be displayed or not
      open={isOpen}
    >
      {/* Display the event date */}
      <p><strong>Date:</strong> {event.date}</p>
      {/* Display the event location */}
      <p><strong>Location:</strong> {event.location}</p>
      {/* Display the event description */}
      <p><strong>Description:</strong> {event.description}</p>
      {/* Display the event image. It will scale to fit the modal width and adjust its height automatically. */}
      <img alt={event.title} src={event.image} width="100%" height="auto" />
    </Modal>
  );
}

export default EventModal;






