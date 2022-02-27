function GetQueryString(name){
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = decodeURI(window.location.search).substr(1).match(reg);
  if(r!=null)return  unescape(r[2]);
  return null;
}

window.onload = function(){
	var subject = GetQueryString("subject");
  var year = GetQueryString("year");
  var area = decodeURI(GetQueryString("area"));
  var code = '<embed src="' + subject + '/' + year + '/' + year + decodeURI("%C2%B7") + area + '.pdf" class="pdf_box" height="100%" width="100%" />';
  document.getElementById('body').innerHTML = code;
}
