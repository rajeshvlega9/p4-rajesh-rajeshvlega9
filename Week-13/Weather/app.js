const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const e = require('express');
require('dotenv').config();

const app = express();
const apiKey = `${process.env.API_KEY}`;

console.log(apiKey);

// setting the view engine
app.set('view engine', 'ejs');
// setting body parser for reading the request body.
app.use(bodyParser.urlencoded({ extended: true }));
// static pages are from public
app.use(express.static("public"))

// listen for request
app.listen(8080, () => {
    console.log("Weather App listening at 8080");  
});

app.get('/', (req, res) => {
    res.redirect("current")
})

app.get('/current', (req, res) => {
    res.render('current', {city:null,temp_c:null,error:null});
})

app.get('/forecast', (req, res) => {
    res.render('forecast', {location:null, lineItems:null ,error:null});
})

app.post('/current', (req, res) => {
    
    let city = req.body.city;
    // let city = 'Pune';
    if (city) {
        let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        console.log(city);
        request(url, (err, request, body) => {
            if (err) {
                let error = "Error" + err;
                res.render('current', {
                    city: null,
                    temp_c: null,
                    error: err
                });
            } else {
                console.log(body);
                let current_weather = JSON.parse(body);
           
                if (current_weather.location === undefined) {
                    res.render('current',
                        {
                            city: null,
                            region: null,
                            localtime: null,
                            localtime_zone: null,
                            temp_c: null,
                            temp_f: null,
                            icon: null,
                            cond_text: null,
                            wind_speed_kph: null,
                            wind_dir: null,
                            error: current_weather.error.message
                        })
                } else {
                    console.log(current_weather);
                    res.render('current', {
                        city: current_weather.location.name,
                        region: current_weather.location.region + ', ' + current_weather.location.country,
                        localtime: current_weather.location.localtime,
                        localtime_zone: current_weather.location.tz_id,
                        temp_c: current_weather.current.temp_c,
                        temp_f: current_weather.current.temp_f,
                        cond_text: current_weather.current.condition.text,
                        icon: current_weather.current.condition.icon,
                        wind_speed_kph: current_weather.current.wind_kph,
                        wind_dir: current_weather.current.wind_dir,
                        feelslike_c: current_weather.current.feelslike_c,
                        error: null
                    });
                }
            }
        })
    }
    // city = '';
})

app.post('/forecast', (req, res) => {
    let place  = req.body.place;
    let period = req.body.period;
    let lineItems = [];

    console.log(place);
    console.log(period);

    let url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${place}&days=${period}`

   request(url, (err, request, body) => {
        // console.log(body/);
        var forecast = JSON.parse(body);
        var forecasts = forecast.forecast;

        if (forecasts.forecastday === undefined) {
            res.render('forecast', {
                location: null,
                lineItems: null,
                error: "No records to show due to error"
            });
        } else {

            var location = forecast.location;
            // let forecastDate = forecasts.forecastday[0].date;
            // let forecastDay = forecasts.forecastday[0].day;
            var forecastDayItems = forecasts.forecastday;

            // console.log(forecast);
            // console.log(forecasts);
            // console.log(forecastDate);
            // console.log(forecastDay);
            console.log(location);
            lineItems.push(forecastDayItems);
            lineItems.forEach((item, ind) => {
                // console.log(item);
                item.forEach((it, id) => {
                    console.log(it.date);
                    console.log(it.day);
                });
            });

            res.render('forecast', {
                location: location,
                lineItems: lineItems,
                error: null
            });
        }
    });

})

app.use((req, res) => {
    res.status(404).render('404');
})

// const get_current_weather = (city) => {
//     let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`

//     request(url, (err, request, body) => {
//         if (err) {
//             let error = "Error" + err;
     
//         } else {
//             let current_weather = JSON.parse(body);
//             console.log(current_weather);
//             // weather.
//             // res.render('current', {weather:weather,error:null});
//         }
//     })

// };

// const get_forecast_city = (city, days) => {
    
// }

// get_current_weather('Bengaluru');