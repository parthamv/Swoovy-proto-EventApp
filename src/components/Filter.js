import React from 'react';
import { Select, DatePicker } from 'antd';

const { Option } = Select;

/**
 * Filters Component
 * 
 * This component provides filtering options to the user. It includes dropdowns for location and a date picker.
 * 
 * Props:
 * - locations: An array of location strings that the user can select from.
 * - onLocationChange: A function called when the user selects a location from the dropdown.
 * - onDateChange: A function called when the user picks a date.
 */
function Filters({ locations, onLocationChange, onDateChange }) {
  return (
    <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
      {/* Location Dropdown Selector */}
      <Select
        placeholder="Filter by location"
        style={{ width: 200 }}
        // This callback is invoked when a location is selected
        onChange={onLocationChange}
      >
        {/* Dynamically generate dropdown options based on the provided locations */}
        {locations.map((location) => (
          <Option key={location} value={location}>
            {location}
          </Option>
        ))}
      </Select>

      {/* Date Picker for users to filter events by a specific date */}
      <DatePicker 
        placeholder="Filter by date" 
        // This callback is invoked when a date is selected
        onChange={onDateChange} 
      />
    </div>
  );
}

export default Filters;
