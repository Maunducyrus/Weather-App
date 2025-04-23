import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import WeatherCard from '../components/WeatherCard';
import { fetchWeatherData } from '../utils/api';
import '../app/globals.css'; 

const defaultCity = 'Nairobi'; 

const Home: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [city, setCity] = useState<string>(defaultCity);
  const [unit, setUnit] = useState<string>('C');

  useEffect(() => {
    handleSearch(defaultCity);
  }, []);

  const handleSearch = async (city: string) => {
    try {
      const data = await fetchWeatherData(city);
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleUnitChange = (unit: string) => {
    setUnit(unit);
  };

  const getWeatherIconUrl = (iconCode: string): string => {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  };

  const convertTemp = (temp: number): number => {
    if (unit === 'F') {
      return (temp * 9) / 5 + 32;
    }
    return temp;
  };

  return (
    <div className="">
      <Header onSearch={handleSearch} onUnitChange={handleUnitChange} />
      <div className='navbar'>
        <div className='sidebar'>
          <Sidebar
            icon={weather ? getWeatherIconUrl(weather.weather[0].icon) : ''}
            city={weather ? weather.name : ''}
            temperature={weather ? convertTemp(weather.main.temp).toFixed(1) : ''}
            description={weather ? weather.weather[0].description : ''}
            date={weather ? new Date(weather.dt * 1000).toLocaleDateString() : ''}
          />
        </div>
        <div className='navbar-center'>
          {weather && (
            <>
              {[0, 1, 2].map((offset) => {
                const futureDate = new Date(weather.dt * 1000);
                futureDate.setDate(futureDate.getDate() + offset);
                return (
                  <div className='navbar-item' key={offset}>
                    <WeatherCard
                      data={{
                        date: futureDate.toLocaleDateString(),
                        icon: getWeatherIconUrl(weather.weather[0].icon), 
                        temp: `${convertTemp(weather.main.temp_min).toFixed(1)}°${unit} - ${convertTemp(weather.main.temp_max).toFixed(1)}°${unit}`
                      }}
                    />
                  </div>
                );
              })}
              <div className='container'>
                <WeatherCard
                  title="Wind Status"
                  data={`${weather.wind.speed} km/h`}
                />
              </div>
              <div className='navbar-item'>
                <WeatherCard
                  title="Humidity"
                  data={`${weather.main.humidity}%`}
                  progress={weather.main.humidity} 
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
