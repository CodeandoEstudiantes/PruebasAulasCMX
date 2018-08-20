



function patoganso(play, ganso) {
  return play[(ganso - 1) % play.length].name;
}