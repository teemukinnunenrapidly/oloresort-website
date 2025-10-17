'use client';

import { useState, useEffect } from 'react';
import { Cloud, CloudRain, CloudSnow, Sun, Wind, Clock } from 'lucide-react';

interface WeatherData {
  temp: number;
  description: string;
  icon: string;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [localTime, setLocalTime] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchWeather();
    updateLocalTime();
    
    // Update weather every 30 minutes
    const weatherInterval = setInterval(fetchWeather, 1800000);
    // Update time every minute
    const timeInterval = setInterval(updateLocalTime, 60000);
    
    return () => {
      clearInterval(weatherInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const updateLocalTime = () => {
    // Get Finland time (Europe/Helsinki timezone)
    const finlandTime = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Helsinki',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date());
    
    setLocalTime(finlandTime);
  };

  const fetchWeather = async () => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
      
      if (!apiKey) {
        // If no API key, show placeholder
        setWeather({
          temp: -5,
          description: 'Kittilä',
          icon: '01d'
        });
        setLoading(false);
        return;
      }

      // Kittilä coordinates
      const lat = 67.6569;
      const lon = 24.9125;
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      );
      
      if (!response.ok) throw new Error('Weather fetch failed');
      
      const data = await response.json();
      
      setWeather({
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
        icon: data.weather[0].icon
      });
      setLoading(false);
      setError(false);
    } catch (err) {
      console.error('Weather fetch error:', err);
      setError(true);
      setLoading(false);
      // Show placeholder on error
      setWeather({
        temp: -5,
        description: 'Kittilä',
        icon: '01d'
      });
    }
  };

  const getWeatherIcon = (iconCode: string) => {
    // Map OpenWeatherMap icon codes to Lucide icons
    const code = iconCode.substring(0, 2);
    switch (code) {
      case '01': return <Sun className="w-5 h-5" />;
      case '02':
      case '03':
      case '04': return <Cloud className="w-5 h-5" />;
      case '09':
      case '10': return <CloudRain className="w-5 h-5" />;
      case '13': return <CloudSnow className="w-5 h-5" />;
      case '50': return <Wind className="w-5 h-5" />;
      default: return <Cloud className="w-5 h-5" />;
    }
  };

  if (loading) {
    return (
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--ref-spacing-2)',
          padding: 'var(--ref-spacing-2) var(--ref-spacing-4)',
          background: 'rgba(200, 164, 106, 0.1)',
          border: '1px solid rgba(200, 164, 106, 0.3)',
          borderRadius: 'var(--ref-radius-full)',
          color: 'var(--sem-color-primary-base)',
          fontSize: 'var(--ref-font-size-sm)',
          fontWeight: 'var(--ref-font-weight-medium)',
        }}
      >
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--ref-spacing-4)',
        padding: 'var(--ref-spacing-1) var(--ref-spacing-4)',
        minWidth: '220px',
      }}
      className="weather-widget"
    >
      {/* Temperature */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--ref-spacing-2)',
        }}
      >
        <div 
          style={{
            color: 'white',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {getWeatherIcon(weather.icon)}
        </div>
        <div>
          <div 
            style={{
              fontSize: 'var(--ref-font-size-sm)',
              fontWeight: 'var(--ref-font-weight-semibold)',
              color: 'white',
              fontFamily: 'var(--ref-font-family-display)',
              lineHeight: 1.2,
            }}
          >
            {weather.temp}°C
          </div>
          <div 
            style={{
              fontSize: '10px',
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 'var(--ref-font-weight-medium)',
              lineHeight: 1,
            }}
          >
            Local temperature
          </div>
        </div>
      </div>

      {/* Divider */}
      <div 
        style={{
          width: '1px',
          height: '20px',
          background: 'rgba(255, 255, 255, 0.3)',
        }}
      />

      {/* Time */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--ref-spacing-2)',
        }}
      >
        <div 
          style={{
            color: 'white',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Clock className="w-4 h-4" />
        </div>
        <div>
          <div 
            style={{
              fontSize: 'var(--ref-font-size-sm)',
              fontWeight: 'var(--ref-font-weight-semibold)',
              color: 'white',
              fontFamily: 'var(--ref-font-family-display)',
              lineHeight: 1.2,
            }}
          >
            {localTime || '--:--'}
          </div>
          <div 
            style={{
              fontSize: '10px',
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 'var(--ref-font-weight-medium)',
              lineHeight: 1,
            }}
          >
            Local time
          </div>
        </div>
      </div>
    </div>
  );
}

