const req = require('request')

const foreCast = (latitude,longitude,callback)=>{
      const url = "https://api.darksky.net/forecast/2335767010bbd7241b9160d14ef5f703/"+latitude+","+longitude+""
      debugger
      req({url,json:true},(error,{body})=>{
                       if(error){
                callback('Service not reachable!',undefined)
            }
             else if(body.code=='400'){
                 callback(body.error,undefined)
             }
            else{
                console.log(body.timezone)
                 callback(undefined,{
                     'Temperature':body.currently.temperature,
                     'ChanceofRain':body.currently.precipProbability,
                     'timeZone':body.timezone,
                 })
            }
        
         })
}

module.exports = foreCast