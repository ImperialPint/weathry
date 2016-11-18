import React from 'react';

export const LocationInput = ({location, pizza}) => {
  return (
    <input
      className="location-input"
      placeholder="Location"
      value={location}
      onChange={pizza}
    />
  );
};
