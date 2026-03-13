// Weather API configuration
const API_KEY = 'b65a36943fbf04ea6a566473945591af';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// DOM elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const loading = document.getElementById('loading');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');
const apiStatusText = document.getElementById('apiStatusText');

// Weather display elements
const cityName = document.getElementById('cityName');
const currentDate = document.getElementById('currentDate');
const currentTemp = document.getElementById('currentTemp');
const weatherIcon = document.getElementById('weatherIcon');
const weatherDesc = document.getElementById('weatherDesc');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');

// Background elements
const cityBackground = document.getElementById('cityBackground');
const backgroundCityName = document.getElementById('backgroundCityName');
const backgroundWeatherDesc = document.getElementById('backgroundWeatherDesc');

// Forecast elements
const forecastContainer = document.getElementById('forecastContainer');

// Vietnam cities elements
const citiesGrid = document.getElementById('citiesGrid');

// Additional info elements
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const visibility = document.getElementById('visibility');
const pressure = document.getElementById('pressure');

// Weather icon mapping
const weatherIcons = {
    '01d': 'fas fa-sun',
    '01n': 'fas fa-moon',
    '02d': 'fas fa-cloud-sun',
    '02n': 'fas fa-cloud-moon',
    '03d': 'fas fa-cloud',
    '03n': 'fas fa-cloud',
    '04d': 'fas fa-clouds',
    '04n': 'fas fa-clouds',
    '09d': 'fas fa-cloud-rain',
    '09n': 'fas fa-cloud-rain',
    '10d': 'fas fa-cloud-sun-rain',
    '10n': 'fas fa-cloud-moon-rain',
    '11d': 'fas fa-bolt',
    '11n': 'fas fa-bolt',
    '13d': 'fas fa-snowflake',
    '13n': 'fas fa-snowflake',
    '50d': 'fas fa-smog',
    '50n': 'fas fa-smog'
};

// City background images mapping
const cityBackgrounds = {
    'hanoi': 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'ho chi minh': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'da nang': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'haiphong': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'can tho': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'default': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
};

// Weather condition backgrounds
const weatherBackgrounds = {
    'clear': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'clouds': 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'rain': 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'snow': 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'thunderstorm': 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'drizzle': 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'mist': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'smoke': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'haze': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'dust': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'fog': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'sand': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'ash': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'squall': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'tornado': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
};

// Vietnam cities list - Only 3 main cities
const vietnamCities = [
    'Vung Tau',
    'Ho Chi Minh City',
    'Hanoi'
];



// Event listeners
searchBtn.addEventListener('click', searchWeather);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchWeather();
    }
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentDate();
    checkAPIStatus();
    // Load weather data for Hanoi by default
    searchWeatherByCity('Hanoi');
    // Load weather data for Vietnam cities
    loadVietnamCitiesWeather();
});

// Check API status
async function checkAPIStatus() {
    try {
        const response = await fetch(`${BASE_URL}/weather?q=London&appid=${API_KEY}&units=metric`);
        if (response.ok) {
            apiStatusText.textContent = '✅ Working';
            apiStatusText.style.color = '#27ae60';
        } else {
            apiStatusText.textContent = '❌ Error: ' + response.status;
            apiStatusText.style.color = '#e74c3c';
        }
    } catch (error) {
        apiStatusText.textContent = '❌ Network Error';
        apiStatusText.style.color = '#e74c3c';
        console.log('API Status Check Error:', error);
    }
}

// Load weather data for Vietnam cities
async function loadVietnamCitiesWeather() {
    try {
        // Clear existing content
        citiesGrid.innerHTML = '';
        
        // Show loading state
        citiesGrid.innerHTML = '<div class="loading-cities">Đang tải thời tiết các thành phố...</div>';
        
        // Load weather for each city
        const weatherPromises = vietnamCities.map(city => 
            getCurrentWeather(city).catch(error => {
                console.log(`Error loading weather for ${city}:`, error);
                return null;
            })
        );
        
        const weatherResults = await Promise.allSettled(weatherPromises);
        
        // Clear loading state
        citiesGrid.innerHTML = '';
        
        // Display weather for each city
        weatherResults.forEach((result, index) => {
            if (result.status === 'fulfilled' && result.value) {
                displayCityCard(result.value);
            } else {
                // Display error card for failed cities
                displayCityErrorCard(vietnamCities[index]);
            }
        });
        
    } catch (error) {
        console.error('Error loading Vietnam cities weather:', error);
        citiesGrid.innerHTML = '<div class="error-cities">Không thể tải thời tiết các thành phố</div>';
    }
}

// Display city weather card
function displayCityCard(data) {
    const cityCard = document.createElement('div');
    cityCard.className = 'city-card';
    
    const temp = Math.round(data.main.temp);
    const humidity = data.main.humidity;
    const windSpeed = Math.round(data.wind.speed * 3.6); // Convert m/s to km/h
    const weatherIconCode = data.weather[0].icon;
    const weatherDescription = data.weather[0].description;
    
    cityCard.innerHTML = `
        <h4>${data.name}</h4>
        <div class="city-temp">${temp}°C</div>
        <div class="city-weather">
            <i class="${weatherIcons[weatherIconCode] || 'fas fa-cloud'}"></i>
            <span>${weatherDescription}</span>
        </div>
        <div class="city-details">
            <div class="city-detail">
                <span>Độ ẩm</span>
                <strong>${humidity}%</strong>
            </div>
            <div class="city-detail">
                <span>Gió</span>
                <strong>${windSpeed} km/h</strong>
            </div>
        </div>
    `;
    
    citiesGrid.appendChild(cityCard);
}

// Display city error card
function displayCityErrorCard(cityName) {
    const cityCard = document.createElement('div');
    cityCard.className = 'city-card';
    cityCard.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
    
    cityCard.innerHTML = `
        <h4>${cityName}</h4>
        <div class="city-temp">--°C</div>
        <div class="city-weather">
            <i class="fas fa-exclamation-triangle"></i>
            <span>Không thể tải dữ liệu</span>
        </div>
        <div class="city-details">
            <div class="city-detail">
                <span>Độ ẩm</span>
                <strong>--%</strong>
            </div>
            <div class="city-detail">
                <span>Gió</span>
                <strong>-- km/h</strong>
            </div>
        </div>
    `;
    
    citiesGrid.appendChild(cityCard);
}



// Search weather function
async function searchWeather() {
    const city = cityInput.value.trim();
    if (!city) {
        showError('Vui lòng nhập tên thành phố');
        return;
    }
    
    await searchWeatherByCity(city);
}

// Search weather by city name
async function searchWeatherByCity(city) {
    try {
        showLoading(true);
        hideError();
        
        // Get current weather
        const currentWeather = await getCurrentWeather(city);
        if (currentWeather) {
            displayCurrentWeather(currentWeather);
            updateCityBackground(city, currentWeather.weather[0].main.toLowerCase());
        }
        
        // Get 5-day forecast
        const forecast = await getForecast(city);
        if (forecast) {
            displayForecast(forecast);
        }
        
        showLoading(false);
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        showError('Không thể tải dữ liệu thời tiết. Vui lòng kiểm tra tên thành phố.');
        showLoading(false);
    }
}

// Get current weather data
async function getCurrentWeather(city) {
    const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=vi`);
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
}

// Get 5-day forecast data
async function getForecast(city) {
    const response = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=vi`);
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
}

// Display current weather
function displayCurrentWeather(data) {
    const city = data.name;
    const temp = Math.round(data.main.temp);
    const feelsLikeTemp = Math.round(data.main.feels_like);
    const humidityValue = data.main.humidity;
    const windSpeedValue = Math.round(data.wind.speed * 3.6); // Convert m/s to km/h
    const weatherMain = data.weather[0].main;
    const weatherDescription = data.weather[0].description;
    const weatherIconCode = data.weather[0].icon;
    const visibilityValue = Math.round(data.visibility / 1000); // Convert m to km
    const pressureValue = data.main.pressure;
    
    // Update current weather display
    cityName.textContent = city;
    currentTemp.textContent = temp;
    weatherIcon.className = weatherIcons[weatherIconCode] || 'fas fa-cloud';
    weatherDesc.textContent = weatherDescription;
    feelsLike.textContent = `${feelsLikeTemp}°C`;
    humidity.textContent = `${humidityValue}%`;
    windSpeed.textContent = `${windSpeedValue} km/h`;
    visibility.textContent = `${visibilityValue} km`;
    pressure.textContent = `${pressureValue} hPa`;
    
    // Update background city name and weather
    backgroundCityName.textContent = city;
    backgroundWeatherDesc.textContent = weatherDescription;
    
    // Update sunrise and sunset if available
    if (data.sys.sunrise && data.sys.sunset) {
        const sunriseTime = new Date(data.sys.sunrise * 1000);
        const sunsetTime = new Date(data.sys.sunset * 1000);
        sunrise.textContent = sunriseTime.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
        sunset.textContent = sunsetTime.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    }
}

// Display forecast
function displayForecast(data) {
    forecastContainer.innerHTML = '';
    
    // Get daily forecasts (every 24 hours)
    const dailyForecasts = [];
    
    for (let i = 0; i < data.list.length; i += 8) { // Every 8th item (24 hours)
        if (dailyForecasts.length < 5) {
            dailyForecasts.push(data.list[i]);
        }
    }
    
    dailyForecasts.forEach((forecast, index) => {
        const date = new Date(forecast.dt * 1000);
        const temp = Math.round(forecast.main.temp);
        const weatherMain = forecast.weather[0].main;
        const weatherDescription = forecast.weather[0].description;
        const weatherIconCode = forecast.weather[0].icon;
        
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        
        const dayName = getDayName(date);
        
        forecastItem.innerHTML = `
            <div class="forecast-date">${dayName}</div>
            <i class="forecast-icon ${weatherIcons[weatherIconCode] || 'fas fa-cloud'}"></i>
            <div class="forecast-temp">${temp}°C</div>
            <div class="forecast-desc">${weatherDescription}</div>
        `;
        
        forecastContainer.appendChild(forecastItem);
    });
}

// Update city background image
function updateCityBackground(city, weatherCondition) {
    const cityLower = city.toLowerCase();
    let backgroundUrl = cityBackgrounds[cityLower];
    
    // If no specific city image, use weather condition image
    if (!backgroundUrl) {
        backgroundUrl = weatherBackgrounds[weatherCondition] || weatherBackgrounds['clear'];
    }
    
    // Update the background image
    cityBackground.style.backgroundImage = `url(${backgroundUrl})`;
}

// Get day name in Vietnamese
function getDayName(date) {
    const days = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
    return days[date.getDay()];
}

// Update current date
function updateCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long' 
    };
    const dateString = now.toLocaleDateString('vi-VN', options);
    currentDate.textContent = dateString;
}

// Show loading spinner
function showLoading(show) {
    if (show) {
        loading.classList.add('show');
    } else {
        loading.classList.remove('show');
    }
}

// Show error message
function showError(message) {
    errorText.textContent = message;
    errorMessage.classList.add('show');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideError();
    }, 5000);
}

// Hide error message
function hideError() {
    errorMessage.classList.remove('show');
}

// Add smooth animations
function addSmoothAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for animation
    const sections = document.querySelectorAll('.current-weather, .city-background, .forecast, .additional-info');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    addSmoothAnimations();
});

// Add weather-based color themes
function updateWeatherTheme(weatherMain) {
    const root = document.documentElement;
    
    switch(weatherMain.toLowerCase()) {
        case 'clear':
            root.style.setProperty('--primary-gradient', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
            break;
        case 'clouds':
            root.style.setProperty('--primary-gradient', 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)');
            break;
        case 'rain':
            root.style.setProperty('--primary-gradient', 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)');
            break;
        case 'snow':
            root.style.setProperty('--primary-gradient', 'linear-gradient(135deg, #dfe6e9 0%, #b2bec3 100%)');
            break;
        case 'thunderstorm':
            root.style.setProperty('--primary-gradient', 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)');
            break;
        default:
            root.style.setProperty('--primary-gradient', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
    }
}

// Enhanced error handling with retry functionality
async function retryFetch(fetchFunction, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await fetchFunction();
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        }
    }
}

// Add weather alerts if available
function displayWeatherAlerts(alerts) {
    if (!alerts || alerts.length === 0) return;
    
    alerts.forEach(alert => {
        const alertElement = document.createElement('div');
        alertElement.className = 'weather-alert';
        alertElement.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <div class="alert-content">
                <h4>${alert.event}</h4>
                <p>${alert.description}</p>
            </div>
        `;
        
        document.body.appendChild(alertElement);
        
        // Auto-remove after 10 seconds
        setTimeout(() => {
            alertElement.remove();
        }, 10000);
    });
}
