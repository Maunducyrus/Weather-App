export const fetchWeatherData = async (city: string) => {
  try {
    const response = await fetch('http://localhost:8000/api/weather?city=Nairobi');
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
