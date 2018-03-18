function initMap() {
    var coordinates = {
            lat: 59.947976,
            lng: 30.390183
        },
        coordinatesSecond = {
            lat: 59.967774,
            lng: 30.312137
        },
        coordinateThird = {
            lat: 59.889911,
            lng: 30.474285
        },
        coordinateFourth = {
            lat: 59.892959,
            lng: 30.315831
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
    var image = 'img/icons/map-marker.svg';
    var marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: image
        }),
        markerSecond = new google.maps.Marker({
            position: coordinatesSecond,
            map: map,
            icon: image
        }),
        markerThird = new google.maps.Marker({
            position: coordinateThird,
            map: map,
            icon: image
        }),
        markerFourth = new google.maps.Marker({
            position: coordinateFourth,
            map: map,
            icon: image
        });
}