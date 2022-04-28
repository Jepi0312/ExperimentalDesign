function touchStarted() {

  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          window.addEventListener("deviceorientation", doSensor, false);
        }
      })
      .catch(console.error);
  }

  else {
    window.addEventListener("deviceorientation", doSensor, false);
  }


}
