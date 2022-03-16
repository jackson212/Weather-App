const path= require('path')
const express= require('express')
const hbs=require('hbs')
const geocode=require('./util/geocode')
const forcast=require('./util/forcast')



const app =express()



const filepath=path.join(__dirname, '../public')
const viewpath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')



app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialpath)


//static
app.use(express.static(filepath))







app.get('',(req,res)=>{

   res.render('index',{
     title:'weather app',
     name: 'jackson'
   })
})

app.get('/about',(req,res)=>{

  res.render('about',{
    title:'about',
     name: 'jackson'
  })
})

app.get('/help',(req,res)=>{

 res.render('help',{
    
    title:"HElp",
    
    msg:"message here for help"
    
 })

})


app.get('/weather',(req,res)=>{

    if(!req.query.address)
    {
      return res.send({
           error:"enter address"
      })
     } 
   
  geocode(req.query.address,(error,{latitude,longitude,location})=>{

    if(error)
    {

      return res.send({error})

    }
    
    forcast(latitude,longitude,(error,forcaseData) =>{
 
       if(error){

         return res.send({error})
         
       }

     
         res.send({
            
        forcast:forcaseData,
        location,
        
        address: req.query.address  
      })
   
    
   
    }) 
  })
})

app.get('/products',(req,res)=>{

  if(!req.query.search)
   {
    
    return res.send({
      
       error:"add search"

    })
   } 
  console.log(req.query)

  res.send({

    products: []
  
})

})

app.get('/help/*',(req,res)=>{

  res.render('help',{
     
     title:"HElp",
     
     msg:"message here for help"
     
  })
 
 })

app.get('*',(req,res)=>{

  res.render('404',{
     title:"page not found",
     error:"wroing it soooooooooooooooooooooooooo wring"
            
    })
    
})

app.listen(3000,()=>{

  console.log("it is up")

 

})



