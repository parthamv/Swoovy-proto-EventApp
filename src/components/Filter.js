import React from 'react';
import { Select, DatePicker } from 'antd';

const { Option } = Select;

function Filters({ locations, onLocationChange, onDateChange }) {
  return (
    <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
      <Select
        placeholder="Filter by location"
        style={{ width: 200 }}
        onChange={onLocationChange}
      >
        {locations.map((location) => (
          <Option key={location} value={location}>
            {location}
          </Option>
        ))}
      </Select>

      <DatePicker placeholder="Filter by date" onChange={onDateChange} />
    </div>
  );
}

export default Filters;
