// src/components/SearchBar.js
import React, { useState } from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      margin="normal"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
