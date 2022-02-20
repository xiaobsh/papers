function jumppage(){
  var year = document.getElementById('year').value;
  var area = document.getElementById('area').value;
  window.open("https://xiaobsh.github.io/papers/view.html?year=" + year + "&area=" + encodeURI(area));
}
