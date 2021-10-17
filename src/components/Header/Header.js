import React, { useState } from 'react';
import './Header.scss';
import TextField from '@mui/material/TextField';
import { FaSearchengin } from 'react-icons/fa';
const Header = () => {
  const [width, setWidth] = useState(true);
  const handleSearch = () => {
    setWidth(!width);
  };
  return (
    <div className="Header">
      <div className="title">Finder</div>
      <div className="nav">
        <div className="link">Home</div>
        <div className="link">Schedule</div>
        <div className="link">services</div>
        <div className="link">about</div>
      </div>
      <div className="search">
        <FaSearchengin className="hIcon" onClick={handleSearch} />
        <input
          className={`header_input ${width ? 'newSearch' : null}`}
          type="text"
          placeholder="Searh your Vechicle"
        />
      </div>
    </div>
  );
};

export default Header;
