import React from 'react';

interface WeatherCardProps {
  title?: string; 
  data: string | { date: string; icon: string; temp: string };
  progress?: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ title, data, progress }) => {
  return (
    <div className="sidebar">
      <div className="card">
        <div className="card-body">
          {title && <div className="card-header">{title}</div>}
          {typeof data === 'string' ? (
            <div className="text-content2">{data}</div>
          ) : (
            <div>
              <div className="text-content2">{data.date}</div>
              <div className="text-content2">
                <img src={data.icon} alt="Weather Icon" className="w-8 h-8" />
              </div>
              <div className="text-content2">{data.temp}</div>
            </div>
          )}
          {title === "Wind Status" && (
            <div className="navbar">
              <div className="navbar-item">
              <svg width="1em" height="1em" viewBox="0 0 1024 1024"
               xmlns="http://www.w3.org/2000/svg">
		          <path d="M409.6 742.4L716.8 512 409.6 281.6v460.8zM512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 921.6c-225.28 0-409.6-184.32-409.6-409.6S286.72 102.4 512 102.4s409.6 184.32 409.6 409.6-184.32 409.6-409.6 409.6z"  />
	           </svg>  
              </div>
              <span className='navbar-item'>WSL</span>
            </div>
          )}
          {title === "Humidity" && progress !== undefined && (
            <div className="mt-4">
              <progress className="progress w-full" value={progress} max="100"></progress>
              <div className="">
                <span className='navbar-item'>0%</span>
                <span className="navbar-item">50%</span>
                <span className="navbar-item">100%</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;