
map.addControl(new mapboxgl.Navigation());

var geojson = new mapboxgl.GeoJSONSource({
    data: {
        type: 'Feature',
        properties: { name: "ABCDABCDABCD" },
        geometry: route.routes[0].geometry
    }
});

map.addSource('geojson', geojson);

// keyboard shortcut for comparing rendering with Mapbox GL native
document.onkeypress = function(e) {
    if (e.charCode === 111 && !e.shiftKey && !e.metaKey && !e.altKey) {
        var center = map.getCenter();
        location.href = "mapboxgl://?center=" + center.lat + "," + center.lng + "&zoom=" + map.getZoom() + "&bearing=" + map.getBearing();
        return false;
    }
};

