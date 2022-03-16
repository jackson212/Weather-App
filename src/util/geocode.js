const request=require('request')

const geocode=(address,callback)=>{
 
    
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiamFja3NvbjIxNiIsImEiOiJja3djOHplejEwaTZuMnBuMnJrMmhlN2J5In0.Xxqawy-ubs03MN90sa_VDQ&limit=1'

    
    request({url: url, json: true},(error,responce)=>{

       if(error){

         callback("oops",undefined)


       }else if(responce.body.features.length===0){

             callback("nothing here",undefined)
       }
       else {
         
        callback(undefined,{
             latitude: responce.body.features[0].center[1],
             longitude: responce.body.features[0].center[0],
             location: responce.body.features[0].place_name    

    }) 
}  
    

    })
 



}


module.exports=geocode