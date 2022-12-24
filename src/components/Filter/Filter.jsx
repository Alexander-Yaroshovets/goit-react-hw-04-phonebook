import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.stayled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        value={value}
        type="text"
        name="filter"
        onChange={onChange}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
