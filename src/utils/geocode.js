const request = require("request")


const geocode=(address, callback) =>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidXpleWlybWFtbWFkb3YiLCJhIjoiY2todzc4MXdwMG1tMjJ3bW8xejlnbzQxOCJ9.cvJ3viI2dZ-6qFl5LXr5NA&limit=1'

    request({url, json: true}, (error, {body}) =>{
        if(error){
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length == 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode