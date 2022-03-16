console.log("client side..................")

// fetch('http://puzzle.mead.io/puzzle').then((responce)=>{


//    responce.json().then((data)=>{

//        console.log(data)

//    }) 


// })

const weatherForm=document.querySelector('form')

const search=document.querySelector('input')

const messageOne= document.querySelector('#message-1')

const messageTwo=document.querySelector('#message-2')




messageOne.textContent='Loading...'

messageTwo.textContent=''








weatherForm.addEventListener('submit',(e)=>{
   
    e.preventDefault()
 
    
   const locate= search.value
   
   fetch('http://localhost:3000/weather?address='+locate).then((responce)=>{

   responce.json().then((data)=>{


  if(data.error)
  {

    console.log(data.error)
  }else{

     messageOne.innerHTML= data.location
    
   messageTwo.innerHTML= data.forcast

}
 })

})
   })

















