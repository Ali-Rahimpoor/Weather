import { useState } from "react";
import { FetchWeather } from "./FetchWeather";

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    const data = await FetchWeather(city);
    setWeatherData(data);
  };

  return (
    <>
      <h1>بررسی آب و هوای شهر</h1>
      <input
        type="text"
        placeholder="نام شهر را وارد کنید"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button onClick={getWeather}>جستجو</button>

      {weatherData ? (
        <>
          {weatherData.weather && weatherData.weather.main && (
            <div>
              <h3>آب‌و‌هوا در {weatherData.weather.name}</h3>
              <p>دما: {weatherData.weather.main.temp}°C</p>
              <p>توضیح: {weatherData.weather.weather[0].description}</p>
            </div>
          )}

          {weatherData.air && weatherData.air.list && weatherData.air.list.length > 0 && (
            <div>
              <h3>آلودگی هوا</h3>
              <p>شاخص کیفیت هوا (AQI): {weatherData.air.list[0].main.aqi}</p>
              <p>1 عالی</p>
              <p>2 خوب</p>
              <p>3 متوسط</p>
              <p>4 بد</p>
              <p>5 خیلی بد</p>
            </div>
          )}
        </>
      ) : (
        <p>در حال دریافت اطلاعات...</p>
      )}
    </>
  );
};

export default Weather;
