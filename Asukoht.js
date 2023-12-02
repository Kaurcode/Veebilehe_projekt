
/* https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-javascript */
function initMap() {
    let Delta = {lat: 58.385428590558874, lng: 26.72474292287222}
    let kaart = new google.maps.Map(
        document.getElementById("Asukoht"), {zoom: 15, center: Delta}
    );
    let marker = new google.maps.Marker({position: Delta, map: kaart})
}