var api= "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=7314d9fbeae6a7a404de26fe55694226"
fetch(api)
.then(function(Response){
    console.log(Response)
    return Response.json()
})
.then(function(data){
console.log (data)
})