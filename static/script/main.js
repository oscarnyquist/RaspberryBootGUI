x = 0;

function start(){
  load_image();
  //input();
  select_image(1);
}

function load_image(){
  document.getElementById('Plex').src='/static/img/plex_white.png'
  document.getElementById('Retropie').src='/static/img/retropie_white.png'
}

function select_image(image){
    if (image === 1) {
      selected_image = image;
      document.getElementById('Plex').src='/static/img/plex_grey.png'
      document.getElementById('Retropie').src='/static/img/retropie_white.png'
    }
    else if (image === 2) {
      selected_image = image;
      document.getElementById('Retropie').src='/static/img/retropie_grey.png'
      document.getElementById('Plex').src='/static/img/plex_white.png'
    }
}

function input(){
  document.body.addEventListener( 'keyup', function (e) {

  if ( e.keyCode == 13 ) {
    // enter
    if (selected_image == 1){
      window.location.href = "/run_plex";
    }
    if (selected_image == 2){
      window.location.href = "/run_retropie";
    }
  }
  if ( e.keyCode == 39 && selected_image == 1) {
    // right
    select_image(2);
  }
  if ( e.keyCode == 37 && selected_image == 2) {
    // left
    select_image(1);
  }
});



}
