function getAccessToken() {
    var match = location.search.match(/access_token=([^&\/]*)/);
    var accessToken = match && match[1];

    if (accessToken) {
        localStorage.accessToken = accessToken;
    } else {
        accessToken = localStorage.accessToken;
    }

    //return accessToken;
    return "pk.eyJ1IjoidC0iLCJhIjoiOVJmanJQSSJ9.diLPpltdxIrTznHeZrxsGA"
}

mapboxgl.accessToken = getAccessToken();

$("#mybut").click(function () {
 alert(mapboxgl.accessToken);
 $(".row").append("<div id='mymap'>hello world</div>")
 var map = new mapboxgl.Map({
    container: 'mymap',
    zoom: 14.35,
    center: [51.533895, 9.934131],
    style: 'js/style.json',
    hash: true
 });
})

