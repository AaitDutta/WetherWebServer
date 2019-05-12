const req = require('request')
const geocode = (address,callback)=>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?types=address&access_token=pk.eyJ1IjoiYWFpdGR1dHRhIiwiYSI6ImNqdXNpdmNjNDIxbzQ0ZG11NmswYzZpMG8ifQ.dr-VIcNlQ4oQJ55UAbxzJQ"
    req({url,json:true},(error,{body})=>{
        if(error){
            //console.log('error')
            callback('Service not reachable!',undefined)
        }
        else if(body.features.length==0){
            console.log('error1')
            callback('try another search',undefined)
        }
        else{
            //console.log(body.features)
            //console.log("Place:"+body.features[1].place_name+" Latitude and Longitude  :"+body.features[1].center[0]+" : "+body.features[1].center[1])
            callback(undefined,{
                Place:body.features[1].place_name,
                Latitude:body.features[1].center[1],
                Longitude:body.features[1].center[0]
            })
        }

    })
}

module.exports=geocode
