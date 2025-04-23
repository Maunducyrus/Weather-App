export const fetchWeatherData = async (city: string) => {
  try {
    const response = await fetch(`http://localhost:8000/api/v1/weather?city=${city}`);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
