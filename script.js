// Start out by creating my global variables

var day = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var time = document.getElementById('time')
var date = document.getElementById('date')
var APIkey = "e944dd570c90e3611f819ae3de807fe7"


// Create a weather function to get the weather data stored in the boxes in HTMl, however for some reason the there was always an error when I tried to pull the data. 
function weather() {
    var city = document.getElementById('input').value;
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ city + APIkey ;
    var search = $('input').val();
    console.log(search)

    fetch(requestUrl)
        .then(function(response){
            if(!response.ok){
                console.log("error")
            } else {
                return response.json
            }
        })
        .then(function(data){
            console.log(data)
            search.textContent = data;

            for(i = 0; i<5; i++){
                document.getElementById("minTemp" + (i+1)).innerHTML = "Min: " + Number(data.list[i].main.temp_min).toFixed(1)+ "°";
                document.getElementById("windSpeed" + (i+1)).innerHTML = "Wind: " + Number(data.list[i].wind.deg).toFixed(1)+ " ";
            }
            for(i = 0; i<5; i++){
                document.getElementById("maxTemp" + (i+1)).innerHTML = "Max: " + Number(data.list[i].main.temp_max).toFixed(2) + "°";
                document.getElementById("windSpeed" + (i+1)).innerHTML = "Wind: " + Number(data.list[i].wind.deg).toFixed(1)+ " ";
            }
        })
}


// create a function to list each day on the boxes
var d = new Date();

function whatDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = day[whatDay(i)];
    }
