function touchStarted()
{

  if (typeof DeviceMotionEvent.requestPermission === 'function') 
  {
    DeviceMotionEvent.requestPermission()
            .then(permissionState => {
      if (permissionState === 'granted') 
        {
                    window.addEventListener("devicemotion", doSensor, false);
                }
              })
            .catch(console.error);
     } 
     
     else 
  { 
    window.addEventListener("devicemotion", doSensor, false); 
  }



  
  
}
