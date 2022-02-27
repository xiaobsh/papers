function jumppage(subject){
	var year = document.getElementById('year').value;
  var area = document.getElementById('area').value;
  window.open("view.html?subject=" + subject + "&year=" + year + "&area=" + encodeURI(area));
}
