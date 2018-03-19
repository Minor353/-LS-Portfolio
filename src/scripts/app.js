function initMap() {
    var coordinates = {
            lat: 59.947976,
            lng: 30.390183
        },
        center = {
            lat: 59.932939,
            lng: 30.361255
        };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: center,
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false
    });
    
}


