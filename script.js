// async function getWeatherData() {
// 	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata';
// 	const options = {
// 	  method: 'GET',
// 	  headers: {
// 		'X-RapidAPI-Key': '0db983d28emsh11b2a8f7e67780dp1c48f1jsnd6210b067aaa',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	  }
  
// 	};
//   const cloud_pct = document.getElementById('cloud_pct') ;
//   const temp = document.getElementById('temp') ;
//   const feels_like = document.getElementById('feels_like') ;
//   const humidity = document.getElementById('humidity') ;
//   const min_temp = document.getElementById('min_temp') ;
//   const max_temp = document.getElementById('max_temp') ;
//   const wind_speed = document.getElementById('wind_speed') ;
//   const wind_degrees = document.getElementById('wind_degrees') ;
//   const sunrise = document.getElementById('sunrise') ;
//   const sunset = document.getElementById('sunset') ;
  
  
// 	try {
// 	  const response = await fetch(url, options);
// 	  const result = await response.json();
//     // const{cloud_pct,temp,feels_like,humidity,min_temp,max_temp,wind_speed,wind_degrees,sunrise,sunset,} = result;
//     cloud_pct.innerHTML = await result.cloud_pct;
//     temp.innerHTML = await result.temp;
//     feels_like.innerHTML = await result.feels_like;
//     humidity.innerHTML = await result.humidity ;
//     min_temp.innerHTML = await result.min_temp;
//     max_temp.innerHTML = await result.max_temp;
//     wind_speed.innerHTML =  await result.wind_speed;
//     wind_degrees.innerHTML = await result.wind_degrees;
//     sunrise.innerText = await result.sunrise;
//     sunset.innerText =  await formattedTime ;
    
//   let unix_timestamp = result.sunset;
//   // Create a new JavaScript Date object based on the timestamp
//   // multiplied by 1000 so that the argument is in milliseconds, not seconds.
//   var date = new Date(unix_timestamp * 1000);
//   // Hours part from the timestamp
//   var hours = date.getHours();
//   // Minutes part from the timestamp
//   var minutes = "0" + date.getMinutes();
//   // Seconds part from the timestamp
//   var seconds = "0" + date.getSeconds();
  
//   // Will display time in 10:30:23 format
//   var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  
//   console.log(formattedTime);
 
	  
// 	} catch (error) {
// 	  console.error(error);
// 	}
//   }
  
//   getWeatherData();
  
 
// async function getWeatherData() {
//   const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '0db983d28emsh11b2a8f7e67780dp1c48f1jsnd6210b067aaa',
//       'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();

//     // Extract sunrise and sunset data from the result object
//     const { sunrise, sunset } = result;

//     console.log('Sunrise:', sunrise);
//     console.log('Sunset:', sunset);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getWeatherData();




const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': '0db983d28emsh11b2a8f7e67780dp1c48f1jsnd6210b067aaa',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	  }
  
	};
 const getWeather= (city)=>{
  cityName.innerHTML = city.toUpperCase()
  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
  fetch(url,options)
  .then(result => result.json())
  .then((result) => {  
    console.log(result) 
    cloud_pct.innerHTML =  result.cloud_pct;
    temp.innerHTML =  result.temp;
    feels_like.innerHTML =  result.feels_like;
    humidity.innerHTML = result.humidity ;
    min_temp.innerHTML =  result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML =  result.wind_speed;
     const sunrise=  result.sunrise;
     const sunset =  result.sunset;
     console.log(sunset)
     let unix_timestamp = sunset;
     let unix_timesamp = sunrise;
  var date = new Date(unix_timestamp * 1000);
  var hours = date.getHours();
  var ampm = (hours >= 12) ? "PM" : "AM";
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)+" "+ampm;
  var date = new Date(unix_timesamp * 1000);
  var hours = date.getHours();
  var ampm = (hours >= 12) ? "PM" : "AM";
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var formatedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + " "+ampm;
  
  console.log(formattedTime);
  document.getElementById("sunset").innerHTML= ` ${formattedTime}`;
  document.getElementById("sunrise").innerHTML= ` ${formatedTime}`;

   })
  .catch(err => console.log(err))
}
let submit = document.getElementById("done")
submit.addEventListener("click", function(e) {
  e.preventDefault()
  getWeather(city.value)
});
 
getWeather("Kolkata ")
const getWeatherOfbang= (city)=>{
  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
  fetch(url,options)
  .then(result2 => result2.json())
  .then((result2) => {  
    console.log(result2) 
    cloud_bang.innerHTML =  result2.cloud_pct;
    temp_bang.innerHTML =  result2.temp;
    feels_bang.innerHTML =  result2.feels_like;
    humidity_bang.innerHTML = result2.humidity ;
    min_temp_bang.innerHTML =  result2.min_temp;
    max_temp_bang.innerHTML = result2.max_temp;
    wind_speed_bang.innerHTML =  result2.wind_speed;
     const sunrise_Time=  result2.sunrise;
     const sunsetTime =  result2.sunset;
     console.log(sunsetTime)
     let bang_timestamp = sunsetTime;
     let bang_timesamp = sunrise_Time;
  var date = new Date(bang_timestamp * 1000);
  var hours = date.getHours();
  var ampm = (hours >= 12) ? "PM" : "AM";
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var bang_sunsetTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)+" "+ampm;
  var date = new Date(bang_timesamp * 1000);
  var hours = date.getHours();
  var ampm = (hours >= 12) ? "PM" : "AM";
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var bang_sunriseTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + " "+ampm;
  
  console.log(bang_sunriseTime);
  document.getElementById("sunset_bang").innerHTML= ` ${bang_sunsetTime}`;
  document.getElementById("sunrise_bang").innerHTML= ` ${bang_sunriseTime}`;

   })
  .catch(err2 => console.log(err2))
}
 
getWeatherOfbang("Bangalore ")



const getWeatherOfkash= (city)=>{
  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
  fetch(url,options)
  .then(result3 => result3.json())
  .then((result3) => {  
    console.log(result3) 
    cloud_kash.innerHTML =  result3.cloud_pct;
    temp_kash.innerHTML =  result3.temp;
    feels_kash.innerHTML =  result3.feels_like;
    humidity_kash.innerHTML = result3.humidity ;
    min_temp_kash.innerHTML =  result3.min_temp;
    max_temp_kash.innerHTML = result3.max_temp;
    wind_speed_kash.innerHTML =  result3.wind_speed;
     const sunrise_Time=  result3.sunrise;
     const sunsetTime =  result3.sunset;
     console.log(sunsetTime)
     let kash_timestamp = sunsetTime;
     let kash_timesamp = sunrise_Time;
  var date = new Date(kash_timestamp * 1000);
  var hours = date.getHours();
  var ampm = (hours >= 12) ? "PM" : "AM";
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var kash_sunsetTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)+" "+ampm;
  var date = new Date(kash_timesamp * 1000);
  var hours = date.getHours();
  var ampm = (hours >= 12) ? "PM" : "AM";
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var kash_sunriseTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + " "+ampm;
  
  console.log(kash_sunriseTime);
  document.getElementById("sunset_kash").innerHTML= ` ${kash_sunsetTime}`;
  document.getElementById("sunrise_kash").innerHTML= ` ${kash_sunriseTime}`;

   })
  .catch(err3 => console.log(err3))
}
 
getWeatherOfkash("kerala")



const getWeatherOfass= (city)=>{
  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
  fetch(url,options)
  .then(result4 => result4.json())
  .then((result4) => {  
    console.log(result4) 
    cloud_ass.innerHTML =  result4.cloud_pct;
    temp_ass.innerHTML =  result4.temp;
    feels_ass.innerHTML =  result4.feels_like;
    humidity_ass.innerHTML = result4.humidity ;
    min_temp_ass.innerHTML =  result4.min_temp;
    max_temp_ass.innerHTML = result4.max_temp;
    wind_speed_ass.innerHTML =  result4.wind_speed;
     const sunrise_Time=  result4.sunrise;
     const sunsetTime =  result4.sunset;
     console.log(sunsetTime)
     let ass_timestamp = sunsetTime;
     let ass_timesamp = sunrise_Time;
  var date = new Date(ass_timestamp * 1000);
  var hours = date.getHours();
  var ampm = (hours >= 12) ? "PM" : "AM";
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var ass_sunsetTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)+" "+ampm;
  var date = new Date(ass_timesamp * 1000);
  var hours = date.getHours();
  var ampm = (hours >= 12) ? "PM" : "AM";
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var ass_sunriseTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + " "+ampm;
  
  console.log(ass_sunriseTime);
  document.getElementById("sunset_ass").innerHTML= ` ${ass_sunsetTime}`;
  document.getElementById("sunrise_ass").innerHTML= ` ${ass_sunriseTime}`;

   })
  .catch(err4 => console.log(err4))
}
 
getWeatherOfass("Assam")