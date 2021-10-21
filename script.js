
mapboxgl.accessToken = 'pk.eyJ1IjoiYml0dWUiLCJhIjoiY2t2MTViem5vN3NuejMxazZ0eHV1N2c4YSJ9.KTR48cF4EqR3K8rgRhOjCg';


const successLocation = (position) => {
    console.log(position)
    mainMap([position.coords.longitude, position.coords.latitude])
}

const errorLocation = () => {

}

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })


const mainMap = (center) => {

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 14,
        center: center

    });

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken 
        // unit: 'metric',
        // profile: 'mapbox/cycling'
    });

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    map.addControl(directions, 'top-left');

}










