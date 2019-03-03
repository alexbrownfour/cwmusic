(function () {
  var citymap = {
    kirkheaton: {
      center: { lat: 53.644743, lng: -1.725761 },
    },
  };

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: { lat: 53.644743, lng: -1.725761 },
      mapTypeId: 'terrain',
      fullscreenControl: true,
    });

    for (var city in citymap) {
      var cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: citymap[city].center,
        radius: 15000
      });
    }
  }
});
alert("");

$("a[href^='#']").click(function(e) { 
  console.log(e, $(this).attr('href'));
  let section = $(this).attr('href');
  $([document.documentElement, document.body]).animate({
    scrollTop: $(section).offset().top
    
}, 2000);
if(history.pushState) {
  history.pushState(null, null, section);
}
else {
  location.hash = section;
}
  return false;
});
