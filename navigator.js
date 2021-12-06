function getLocation(){
    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((position)=>{
            console.log("Latitude" , position.coords.latitude);
            console.log("Longitude" , position.coords.longitude);
        })
    }else{
        console.log("Not Supported");
    }
}

getLocation();