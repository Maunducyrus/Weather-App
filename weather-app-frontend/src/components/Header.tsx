import React, { useState } from 'react';

interface HeaderProps {
  onSearch: (city: string) => void;
  onUnitChange: (unit: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onUnitChange }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <div className='flex-1 flex flex-col'>
    <header className="navbar p-4 bg-gray-100">
      <div className="navbar-center flex-grow">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search city..."
          className="navbar-item input input-primary mr-2"
        />
        <button onClick={handleSearch} className="btn btn-primary navbar-item">
          Go
        </button>
      </div>
      <div className="navbar-end flex space-x-2">
        <button onClick={() => onUnitChange('C')} className="btn btn-outline-primary navbar-item">
          °C
        </button>
        <button onClick={() => onUnitChange('F')} className="btn btn-outline-primary navbar-item">
          °F
        </button>
      </div>
    </header>
    </div>
  );
};

export default Header;
