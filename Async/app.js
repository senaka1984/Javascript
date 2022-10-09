const btn = document.querySelector("button");

function TrackUserHandler() {
  const location = navigator.geolocation.getCurrentPosition(
    (posData) => {
        setTimeout( () => {
            console.log(posData);
        },2000)     
    },
    (errorData) => {
      console.log(errorData);
    }
  );
  console.log('Getting Location');
}

btn.addEventListener("click", TrackUserHandler);
