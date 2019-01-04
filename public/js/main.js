(function(){
  // Place JavaScript code here...
  $('#view-more-details').click(function(){
    $('#view-more-details').addClass('hidden');
    $('#view-less-details').removeClass('hidden');
    $('.more-detail-about').removeClass('hidden');
  })
  $('#view-less-details').click(function(){
    $('#view-less-details').addClass('hidden');
    $('#view-more-details').removeClass('hidden');
    $('.more-detail-about').addClass('hidden');

  });

  $('#read-more').click(function(e){
    e.preventDefault();
    var button = $('#read-more');
    var moreText = $('.blog-slider__text.hidden');
    if(moreText.hasClass('hidden')){
      moreText.removeClass('hidden');
      button.text = "SHOW LESS"
    }else {
      moreText.addClass('hidden');
      button.text = "READ MORE"
    }
    console.log($('.blog-slider__text.hidden'));
  });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
  $(".floating-buttons").css({'left': '0.2em'});
  } else {
    $(".floating-buttons").css({'left': '-2em'});
  }
  prevScrollpos = currentScrollPos;
  } 
  
  $("#animate-area").addClass("load");

  $("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
  });

  $("a[id*='question']").click(function() {
  let questionClicked = $(this)[0].id.split('-')[1]; 

  if($("p[id*='answer-"+ questionClicked +"']").hasClass('hidden')){
    $('#answer-'+ questionClicked).removeClass('hidden');
  } else {
    $('#answer-'+ questionClicked).addClass('hidden');
  }

  });

  $('#showMap').click(function(){
    $('#hideMap').css('display', 'inline-block');
    $('#map').css("display", "inherit")
  })

  $('#hideMap').click(function(){
    $('#map').css("display", "none")
  })


  $('#cert-next').click(function(){
    var currentPosition = $('#cert-scroll-container').scrollLeft();
    if(currentPosition >450 ){
      $('#cert-scroll-container').scrollLeft(0);
    } else {
      $('#cert-scroll-container').scrollLeft(currentPosition + 150);
    }
  });

  $('#cert-prev').click(function(){
    var currentPosition = $('#cert-scroll-container').scrollLeft();
    if(currentPosition < 1 ){
      $('#cert-scroll-container').scrollLeft(999);
    }else {
      $('#cert-scroll-container').scrollLeft(currentPosition - 150);
    }
  });

  $('#ytube-next').click(function(){
    var currentPosition = $('#ytube-scroll-container').scrollLeft();
    if(currentPosition > 879 ){
      $('#ytube-scroll-container').scrollLeft(0);
    } else {
      $('#ytube-scroll-container').scrollLeft(currentPosition + 300);
    }
  });

  $('#ytube-prev').click(function(){
    var currentPosition = $('#ytube-scroll-container').scrollLeft();
    if(currentPosition < 1 ){
      $('#ytube-scroll-container').scrollLeft(999);
    }else {
      $('#ytube-scroll-container').scrollLeft(currentPosition - 300);
    }
  });
})();

var citymap = {
  kirkheaton: {
    center: {lat: 53.644743, lng: -1.725761},
  },
};

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 53.644743, lng: -1.725761},
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
