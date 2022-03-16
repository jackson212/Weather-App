const request=require('request')

const forcast=(lattitude,longitude,callback)=>{

  const url='http://api.weatherstack.com/current?access_key=bbfcacc7b69c4db06e23b4de6e5f7304&query='+lattitude +','+longitude +'&units=f'
 
   request({url:url, json:true},(error,responce)=>{

    if(error){

        callback("unable to coonect" ,undefined)
    }else if(responce.body.error){

      callback('unable to find location' ,undefined)

    }else{
    
        callback(undefined,"it is currently " + responce.body.current.weather_descriptions[0]+ "feel like " + responce.body.current.feelslike+" degreeout")


    }
   
})


}

module.exports=forcast