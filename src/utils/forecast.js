const request = require("request")


const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b73494b7d8832a69033c0140d217e0c0&query='+ lat + ',' + long + '&units=m'

    request({url, json:true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to loaction services!', undefined)
        } else if (body.error){
            callback('Location not found!', undefined)
        } else{
            console.log(body.current.weather_descriptions[0] + body.current.humidity)
            callback(undefined, body.current.weather_descriptions[0] +" right now. "+"Humidity is "+ body.current.humidity +" percent. "+"It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike  + " degrees out")
        
       }
    
    })

}

module.exports=forecast