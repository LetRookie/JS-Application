const getWeather = document.getElementById('submit');
getWeather.addEventListener('click', attachEvents);
let cityName = document.getElementById('location').value;
//select current and upcoming div elements;
let currentDiv = document.getElementById('current');
let upcomingDiv = document.getElementById('upcoming');

async function attachEvents() {
    let input = await getForecast(cityName);
    let currentForecast = input.current.forecast;
    let upcomingForecast = input.upcoming.forecast;
    let city = input.current.name;
    let degree = '&#176';
    let symbol = '';
    switch (currentForecast.condition) {
        case 'Sunny': symbol = '&#x2600'; break;
        case 'Partly sunny': symbol = '&#x26C5'; break;
        case 'Overcast': symbol = '&#x2601'; break;
        case 'Rain': symbol = '&#x2614'; break;
    }
    
    // current DIV composition
    let forecasts = document.createElement('div');
    forecasts.setAttribute('class', 'forecasts');
    currentDiv.appendChild(forecasts);
    let conditionSymbol = document.createElement('span');
    conditionSymbol.setAttribute('class', 'condition symbol');
    conditionSymbol.innerHTML = symbol;
    forecasts.appendChild(conditionSymbol);
    let spanGroup = document.createElement('span');
    spanGroup.setAttribute('class', 'condition');
    forecasts.appendChild(spanGroup);
    
    let spanGroupInfo = [
        city,
        `${currentForecast.low}${degree}/${currentForecast.high}${degree}`,
        `${currentForecast.condition}`
    ]
    
    spanGroupInfo.forEach(spanInfo => {
        let spanElement = document.createElement('span');
        spanElement.setAttribute('class', 'forecast-data');
        spanElement.innerHTML = spanInfo;
        spanGroup.appendChild(spanElement);
    });
    
    
    //upcoming DIV composition
    let forecastInfo = document.createElement('div');
    forecastInfo.setAttribute('class', 'forecast-info');
    upcomingDiv.appendChild(forecastInfo);

    
    upcomingForecast.forEach(spanElement => {
        let upcomingSpanGroup = document.createElement('span');
        upcomingSpanGroup.setAttribute('class', 'upcoming');
        upcomingDiv.appendChild(upcomingSpanGroup);
        
        let symbolUpcoming = '';
        switch (spanElement.condition) {
            case 'Sunny': symbolUpcoming = '&#x2600'; break;
            case 'Partly sunny': symbolUpcoming = '&#x26C5'; break;
            case 'Overcast': symbolUpcoming = '&#x2601'; break;
            case 'Rain': symbolUpcoming = '&#x2614'; break;
        }
        let spanSymbol = document.createElement('span');
        spanSymbol.setAttribute('class', 'symbol');
        spanSymbol.innerHTML = symbolUpcoming;
        upcomingSpanGroup.appendChild(spanSymbol);
        
        let span1 = document.createElement('span');
        span1.setAttribute('class', 'forecast-data');
        span1.innerHTML = `${spanElement.low}${degree}/${spanElement.high}${degree}`;
        upcomingSpanGroup.appendChild(span1);
        
        let span2 = document.createElement('span');
        span2.setAttribute('class', 'forecast-data');
        span2.innerHTML = `${spanElement.condition}`;
        upcomingSpanGroup.appendChild(span2);
        
    })
    
    document.getElementById('forecast').style.display = 'block';
    // document.getElementById('forecast').replaceChildren('');
}


async function getForecast(name) {
    const code = await getLocationCode(name);
    
    const [current, upcoming] = await Promise.all([
        getCurrent(code),
        getUpcoming(code)
    ]);

    return { current, upcoming }
}

async function getLocationCode(name) {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';

    const res = await fetch(url);
    const data = await res.json();

    const location = data.find(loc => loc.name == name);
    return location.code;
}

async function getCurrent(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

async function getUpcoming(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}