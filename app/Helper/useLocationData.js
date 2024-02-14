import React from "react";

// useLocationData();  we can use like this how to return the use geolocation data
const useGeoLocation = () => {
  const [geolocation, setGeolocation] = React.useState({});
  // This is a side effect that runs once when the component mounts
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Got Geolocation", position);
          setGeolocation(position.coords);
        },
        (error) => {
          alert(`Error: ${error.message}`);
        }
      );
    } else {
      alert("No Geolocation support");
    }
    // find the ip address with next js api without third party

    //call the axios api find the user ip address
    /*fetch('https://api.ipify.org?format=json')
    .then((response)=> response.json())
    .then((data) =>{
        fetch(`http://ip-api.com/json/${data.ip}`)
        .then((res)=>{return res.json()})
        .then((locData)=>{setGeolocation(locData)})
        })*/
  }, []); /* Empty dependency array means this will only run on mount */
  console.log("this is the use location", geolocation);
  return geolocation;
};
export default useGeoLocation;
/*

const useLocationData = () => {
  const [location, setLocation] = React.useState(null);
  // Get the user location on page load
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log("Error getting location", error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert("Geolocation is not supported by this browser");
    }
  });
  return (
    // show the data of location
    <div>
      Your current location is latitude : {location ? location.lat : "Loading"}
      and longitude : {location ? location.lng : "Loading"}.
    </div>
  );
};

export default useLocationData; */
