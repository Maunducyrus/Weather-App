import React from 'react';

interface SidebarProps {
  city: string;
  temperature: string;
  description: string;
  date: string;
  icon: string;
}

const Sidebar: React.FC<SidebarProps> = ({ city, temperature, description, date, icon }) => {
  return (
    <aside className=" menu w-64 p-4 bg-gray-100">
      <div className="flex flex-col items-center">
        <img src={icon} alt="Weather Icon" className="w-16 h-16 mb-4" />
        <div className="menu-item">{city}</div>
        <div className="menu-item">{temperature}°F</div>
        <div className="menu-item">{description}</div>
        <div className="menu-item">{date}</div>
      </div>
    </aside>
  );
};

export default Sidebar;
