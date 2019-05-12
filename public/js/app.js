//console.log('Client side JS');
// const address = 'Boston'
// const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?types=address&access_token=pk.eyJ1IjoiYWFpdGR1dHRhIiwiYSI6ImNqdXNpdmNjNDIxbzQ0ZG11NmswYzZpMG8ifQ.dr-VIcNlQ4oQJ55UAbxzJQ"
// fetch(url).then((error,data)=>{
//     if(error){
//         console.log('Not avaliable')
//     }
//     else if(data.features.length==0){
//         console.log('try another search')
        
//     }
//     else{
//         const url2 = "https://api.darksky.net/forecast/2335767010bbd7241b9160d14ef5f703/"+data.features[1].center[1]+","+data.features[1].center[0]+""
//         fetch(url2).then((error,data)=>{
//             if(error){
//                 console.log('Service not reachable!')
//             }
//              else if(data.code=='400'){
//                 console.log(data.error,undefined)
//              }
//              else{
//                  console.log('Temperature'+data.currently.temperature+'ChanceofRain '+data.currently.precipProbability)
//              }
//         })


//     }

// })

