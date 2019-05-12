const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
console.log(__dirname)
console.log(__filename)

const geocode = require('./utils/geocodeUtil') 
const forecast = require('./utils/forecast')

console.log(path.join(__dirname,'../public'))
const publicDirPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirPath))
app.set('view engine','hbs') // -- to use the view engine -- //
app.set('views',viewsPath)

app.get('',(req,resp)=>{
    resp.render('index',{
        title:'Weather',
        name:'Aait'
    })
})

app.get('/about',(req,resp)=>{
    resp.render('about',{
        name:'Aait',
        title:'About Me!'
    })
})

app.get('/help',(req,resp)=>{
    resp.render('help',{
        name:'Aait',
        title:'Help Page!'
    })
})

app.get('/weather',(req,res)=>{
console.log(req.query.address)
    if(!req.query.address){
        return res.send({
            error:'Address not present!'
        })
    }
    // res.send([{
    //     localtion: req.query.address,
    //     temperature:'48 degree'
    // },{
    //     rain:'Nochance'
    // }])

    geocode(req.query.address,(error,geocodes)=>{
        if(error){
            return res.send({
                error
            })
        }
          forecast(geocodes.Latitude,geocodes.Longitude,(error,response)=>{
            if(error){
                return res.send({
                    error
                })
            }
          console.log('Temperature and chance of rain  :'+response.timezone+" , "+response.ChanceofRain)
          return res.send({
            localtion:req.query.address,
            Temperature:response.Temperature,
            ChanceofRain:response.ChanceofRain,
            TimeZone:response.timezone,
        })
      })
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404Page',{
        title:'Help article not found!'

    })

})

app.get('*',(req,res)=>{
    res.render('404Page',{
        title:'Page Not Found 404!'

    })


})

app.listen(3000,()=>{
    console.log('server is running:3000')
})