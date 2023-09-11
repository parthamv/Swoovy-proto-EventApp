import { Modal } from 'antd';

function EventModal({ event, isOpen, onClose }) {
  if (!isOpen || !event) return null; // Ensure the event exists before trying to access its properties

  return (
    <Modal 
      title={event.title}
      onCancel={onClose}
      footer={null}
      open={isOpen} // Make sure to include the 'visible' prop
    >
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <img alt={event.title} src={event.image} width="100%" height="auto" />

    </Modal>
  );
}

export default EventModal;





