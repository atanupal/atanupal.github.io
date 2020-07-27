

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
       // alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}





function refresh1()
{

var temp= document.cookie.indexOf('wallpaper1=');

if (temp==-1)
{
document.cookie = 'wallpaper1=wall1';
radiobtn = document.getElementById("wall1");
radiobtn.checked = true;
document.body.style.background = 'url(wall1.jpg) repeat center center';
}
else{
var theme = getCookie("wallpaper1");

radiobtn = document.getElementById(theme);
radiobtn.checked = true;
document.body.style.background = 'url('+theme+'.jpg) repeat center center';
}



}


function func(v)
{


    
  document.body.style.background = 'url('+v+'.jpg) repeat center center';
 document.cookie = 'wallpaper1=' + v;
  
  
  
}



var temp= document.cookie.indexOf('pageno=');

if (temp==-1)
{
document.cookie = 'pageno=1';
var pageno = getCookie("pageno");

document.cookie = 'position=0';
var position=getCookie("position");

document.cookie = 'count=0';
var count=getCookie("count");

document.cookie = 'page=1';
var page = getCookie("page");


}



function getcurrent()
{

if (typeof getCookie("position") != 'undefined')
{
position=getCookie("position");


  document.getElementById("current").innerHTML = position;
}
else
{
	position=0;


  document.getElementById("current").innerHTML = position;
  document.cookie = 'position=0';
}
	
}

function common()
{

getcount();

 if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function() {
   var div= document.getElementById("txtHint");
   div.style.visibility = "hidden"; 
      document.getElementById("txtHint").innerHTML="";
    str = this.responseText;
	arr=str.split(" ");
	
	
	
		
	document.getElementById('deal_id1').innerText="";
	document.getElementById('summary1').value="";
	document.getElementById('description1').value="";
	document.getElementById('dealprice1').value="";
	document.getElementById('maxprice1').value="";
	document.getElementById('img1').src="";
	document.getElementById('link1').value="";
	document.getElementById('tup1').innerText="";
	document.getElementById('tdown1').innerText="";
	document.getElementById('uploadname1').value="";
	document.getElementById('uploademail1').value="";
	document.getElementById('expired1').innerText="";
	
	document.getElementById('deal_id2').innerText="";
	document.getElementById('summary2').innerText="";
	document.getElementById('description2').innerText="";
	document.getElementById('dealprice2').innerText="";
	document.getElementById('maxprice2').innerText="";
	document.getElementById('img2').src="";
	document.getElementById('link2').innerText="";
	document.getElementById('tup2').innerText="";
	document.getElementById('tdown2').innerText="";
	document.getElementById('uploadname2').innerText="";
	document.getElementById('uploademail2').innerText="";
	document.getElementById('expired2').innerText="";
		
	document.getElementById('deal_id3').innerText="";
	document.getElementById('summary3').innerText="";
	document.getElementById('description3').innerText="";
	document.getElementById('dealprice3').innerText="";
	document.getElementById('maxprice3').innerText="";
	document.getElementById('img3').src="";
	document.getElementById('link3').innerText="";
	document.getElementById('tup3').innerText="";
	document.getElementById('tdown3').innerText="";
	document.getElementById('uploadname3').innerText="";
	document.getElementById('uploademail3').innerText="";
	document.getElementById('expired3').innerText="";
		
	document.getElementById('deal_id4').innerText="";
	document.getElementById('summary4').innerText="";
	document.getElementById('description4').innerText="";
	document.getElementById('dealprice4').innerText="";
	document.getElementById('maxprice4').innerText="";
	document.getElementById('img4').src="";
	document.getElementById('link4').innerText="";
	document.getElementById('tup4').innerText="";
	document.getElementById('tdown4').innerText="";
	document.getElementById('uploadname4').innerText="";
	document.getElementById('uploademail4').innerText="";
	document.getElementById('expired4').innerText="";
	
	
	if (typeof arr[2] != 'undefined')
	{
		
	
	document.getElementById('deal_id1').innerText = arr[2].split("([{").join(' ');
	
		document.getElementById('summary1').value = arr[17].split("([{").join(' ');
	
	var summary = arr[3].split("([{").join(' ');
	summary =  summary.split(" &*( ").join('"');
		summary = summary.split("@@@@").join('"');
		summary = summary.split(")}]").join("&");
summary = summary.split("]]]]").join("#");

summary = summary.split(" }]) ").join('#');



document.getElementById('summary1').value= summary;


	document.getElementById('description1').value = arr[10].split("([{").join(' ');
	var description = arr[10].split("([{").join(' ');
	description =  description.split(" &*( ").join('"');
	description = description.split("@@@@").join('"');
		description = description.split(")}]").join("&");
description = description.split("]]]]").join("#");
description = description.split("[[[[").join('"');
description = description.replace(/<br>/g, "\r\n");
description = description.split(" }]) ").join('#');

document.getElementById('description1').value= description;



 
	//nicEditors.findEditor('description1').setContent(description);
	
	document.getElementById('dealprice1').value = arr[4].split("([{").join(' ');
	var dealprice = arr[4].split("([{").join(' ');
	dealprice =  dealprice.split(" &*( ").join('"');
		dealprice = dealprice.split("@@@@").join('"');
		dealprice = dealprice.split(")}]").join("&");
dealprice = dealprice.split("]]]]").join("#");
dealprice = dealprice.split(" }]) ").join('#');
document.getElementById('dealprice1').value= dealprice;
	
	
	document.getElementById('maxprice1').value= arr[5].split("([{").join(' ');
	var maxprice = arr[5].split("([{").join(' ');
	maxprice =  maxprice.split(" &*( ").join('"');
		maxprice = maxprice.split("@@@@").join('"');
		maxprice = maxprice.split(")}]").join("&");
maxprice = maxprice.split("]]]]").join("#");
maxprice = maxprice.split(" }]) ").join('#');
document.getElementById('maxprice1').value= maxprice;
	
	
	document.getElementById('img1').src= arr[11].split("([{").join(' ');
	var img = arr[11].split("([{").join(' ');
	img =  img.split(" &*( ").join('"');
		img = img.split("@@@@").join('"');
		img = img.split(")}]").join("&");
img = img.split("]]]]").join("#");
img = img.split(" }]) ").join('#');
document.getElementById('img1').innerText= img;
	document.getElementById('imgg1').value= img;
	
	document.getElementById('link1').value = arr[6].split("([{").join(' ');
	
	var link1 = arr[6].split("([{").join(' ');
	link1 =  link1.split(" &*( ").join('"');
	link1 = link1.split(")}]").join("&");
	link1 = link1.split(" }]) ").join('#');
		link1 = link1.split("@@@@").join('"');
		link1 = link1.split(")}]").join("&");
link1 = link1.split("]]]]").join("#");
document.getElementById('link1').value= link1;


	
	document.getElementById("link1").setAttribute("onclick", "location.href='" + link1 + "'");
	document.getElementById("link1").style.color = "blue";
	document.getElementById("link1").onclick = function() {
    window.open(
    link1
        );
        return false;
      };
	  
	  document.getElementById('tup1').innerText = arr[8].split("([{").join(' ');
	document.getElementById('tdown1').innerText = arr[9].split("([{").join(' ');
document.getElementById('uploadname1').value = arr[12].split("([{").join(' ');
var uploadname = arr[12].split("([{").join(' ');
	uploadname =  uploadname.split(" &*( ").join('"');
		uploadname = uploadname.split("@@@@").join('"');
		uploadname = uploadname.split(")}]").join("&");
uploadname = uploadname.split("]]]]").join("#");
uploadname = uploadname.split(" }]) ").join('#');
document.getElementById('uploadname1').value= uploadname;



document.getElementById('uploademail1').value = arr[13].split("([{").join(' ');
var uploademail = arr[13].split("([{").join(' ');
	uploademail =  uploademail.split(" &*( ").join('"');
		uploademail = uploademail.split("@@@@").join('"');
		uploademail = uploademail.split(")}]").join("&");
uploademail = uploademail.split("]]]]").join("#");
uploademail = uploademail.split(" }]) ").join('#');
document.getElementById('uploademail1').value= uploademail;

	document.getElementById('expired1').innerText = arr[14].split("([{").join(' ');
	
	var expired = arr[14].split("([{").join(' ');
	expired =  expired.split(" &*( ").join('"');
		expired = expired.split("@@@@").join('"');
		expired = expired.split(")}]").join("&");
expired = expired.split("]]]]").join("#");
document.getElementById('expired1').innerText= expired;
	}
	
	
	
	if (typeof arr[16] != 'undefined')
	{
	document.getElementById('deal_id2').innerText = arr[16].split("([{").join(' ');
	document.getElementById('summary2').value = arr[17].split("([{").join(' ');
	var summary = arr[17].split("([{").join(' ');
	summary =  summary.split(" &*( ").join('"');
		summary = summary.split("@@@@").join('"');
		summary = summary.split(")}]").join("&");
summary = summary.split("]]]]").join("#");
summary = summary.split(" }]) ").join('#');
document.getElementById('summary2').value= summary;
	document.getElementById('description2').value = arr[24].split("([{").join(' ');
	var description = arr[24].split("([{").join(' ');
	description =  description.split(" &*( ").join('"');
	description = description.split("@@@@").join('"');
		description = description.split(")}]").join("&");
description = description.split("]]]]").join("#");
description = description.split("[[[[").join('"');
description = description.replace(/<br>/g, "\r\n");
description = description.split(" }]) ").join('#');
document.getElementById('description2').value= description;
	//nicEditors.findEditor('description2').setContent(description);
	
	
	
	

	
	
	
	
	
	
	
	
	
	document.getElementById('dealprice2').value= arr[18].split("([{").join(' ');
	
	
	
	
	
	
	var dealprice = arr[18].split("([{").join(' ');
	dealprice =  dealprice.split(" &*( ").join('"');
	dealprice = dealprice.split("@@@@").join('"');
		dealprice = dealprice.split(")}]").join("&");
dealprice = dealprice.split("]]]]").join("#");
dealprice = dealprice.split(" }]) ").join('#');
document.getElementById('dealprice2').value= dealprice;
	
	
		document.getElementById('maxprice2').value = arr[19].split("([{").join(' ');
		var maxprice = arr[19].split("([{").join(' ');
	maxprice =  maxprice.split(" &*( ").join('"');
		maxprice = maxprice.split("@@@@").join('"');
		maxprice = maxprice.split(")}]").join("&");
maxprice = maxprice.split("]]]]").join("#");
maxprice = maxprice.split(" }]) ").join('#');
document.getElementById('maxprice2').value= maxprice;
		
		
		
		document.getElementById('img2').src= arr[25].split("([{").join(' ');
		var img = arr[25].split("([{").join(' ');
	img =  img.split(" &*( ").join('"');
	img = img.split("@@@@").join('"');
		img = img.split(")}]").join("&");
img = img.split("]]]]").join("#");
img = img.split(" }]) ").join('#');
document.getElementById('img2').innerText= img;
		document.getElementById('imgg2').value= img;
		
		document.getElementById('link2').value = arr[20].split("([{").join(' ');
		
		var link2 = arr[20].split("([{").join(' ');
	link2 =  link2.split(" &*( ").join('"');
	link2 = link2.split(")}]").join("&");
	link1 = link1.split("@@@@").join('"');
		link2 = link2.split(")}]").join("&");
		link2 = link2.split(" }]) ").join('#');
link2 = link2.split("]]]]").join("#");

document.getElementById('link2').value= link2;
		
		document.getElementById("link2").setAttribute("onclick", "location.href='" +link2 + "'");
		document.getElementById("link2").style.color = "blue";
		  document.getElementById("link2").onclick = function() {
    window.open(
    link2
        );
        return false;
      };
	   document.getElementById('tup2').innerText = arr[22].split("([{").join(' ');
	document.getElementById('tdown2').innerText = arr[23].split("([{").join(' ');
	  document.getElementById('uploadname2').value = arr[26].split("([{").join(' ');
	  var uploadname = arr[26].split("([{").join(' ');
	uploadname =  uploadname.split(" &*( ").join('"');
		uploadname = uploadname.split("@@@@").join('"');
		uploadname = uploadname.split(")}]").join("&");
uploadname = uploadname.split("]]]]").join("#");
uploadname = uploadname.split(" }]) ").join('#');
document.getElementById('uploadname2').value= uploadname;
	  
	  
	  document.getElementById('uploademail2').value = arr[27].split("([{").join(' ');
	  var uploademail = arr[27].split("([{").join(' ');
	uploademail =  uploademail.split(" &*( ").join('"');



uploademail = uploademail.split("@@@@").join('"');
		uploademail = uploademail.split(")}]").join("&");
uploademail = uploademail.split("]]]]").join("#");
uploademail = uploademail.split(" }]) ").join('#');
document.getElementById('uploademail2').value= uploademail;
	  
	  
	  	document.getElementById('expired2').innerText = arr[28].split("([{").join(' ');
		var expired = arr[28].split("([{").join(' ');
	expired =  expired.split(" &*( ").join('"');
	expired = expired.split("@@@@").join('"');
		expired = expired.split(")}]").join("&");
expired = expired.split("]]]]").join("#");
expired = expired.split(" }]) ").join('#');
document.getElementById('expired2').innerText= expired;
		}
		
		if (typeof arr[30] != 'undefined')
	{

	document.getElementById('deal_id3').innerText = arr[30].split("([{").join(' ');
	document.getElementById('summary3').value = arr[31].split("([{").join(' ');
	var summary = arr[31].split("([{").join(' ');
	summary =  summary.split(" &*( ").join('"');
	summary = summary.split("@@@@").join('"');
		summary = summary.split(")}]").join("&");
summary = summary.split("]]]]").join("#");
summary = summary.split(" }]) ").join('#');
document.getElementById('summary3').value= summary;
	
	document.getElementById('description3').value = arr[38].split("([{").join(' ');
	var description = arr[38].split("([{").join(' ');
description =  description.split(" &*( ").join('"');
	description = description.split("@@@@").join('"');
		description = description.split(")}]").join("&");
description = description.split("]]]]").join("#");
description = description.split("[[[[").join('"');
description = description.replace(/<br>/g, "\r\n");
description = description.split(" }]) ").join('#');
	document.getElementById('description3').value= description;
	//nicEditors.findEditor('description3').setContent(description);
	

	
	
	document.getElementById('dealprice3').value = arr[32].split("([{").join(' ');
	var dealprice = arr[32].split("([{").join(' ');
	dealprice =  dealprice.split(" &*( ").join('"');
	dealprice = dealprice.split("@@@@").join('"');
		dealprice = dealprice.split(")}]").join("&");
dealprice = dealprice.split("]]]]").join("#");
dealprice = dealprice.split(" }]) ").join('#');
document.getElementById('dealprice3').value= dealprice;
	
	
		document.getElementById('maxprice3').value = arr[33].split("([{").join(' ');
		var maxprice = arr[33].split("([{").join(' ');
	maxprice =  maxprice.split(" &*( ").join('"');
	maxprice = maxprice.split("@@@@").join('"');
		maxprice = maxprice.split(")}]").join("&");
maxprice = maxprice.split("]]]]").join("#");
maxprice = maxprice.split(" }]) ").join('#');
document.getElementById('maxprice3').value= maxprice;
		
		
		
		document.getElementById('img3').src= arr[39].split("([{").join(' ');
		var img = arr[39].split("([{").join(' ');
	img =  img.split(" &*( ").join('"');
	img = img.split("@@@@").join('"');
		img = img.split(")}]").join("&");
img = img.split("]]]]").join("#");
img = img.split(" }]) ").join('#');
document.getElementById('img3').innerText= img;
		document.getElementById('imgg3').value= img;
		
		document.getElementById('link3').value = arr[34].split("([{").join(' ');
		var link3 = arr[34].split("([{").join(' ');
	link3 =  link3.split(" &*( ").join('"');
	link3 = link3.split(")}]").join("&");
	link3 = link3.split(" }]) ").join('#');
document.getElementById('link3').value= link3;
		
		
		document.getElementById("link3").setAttribute("onclick", "location.href='" + link3 + "'");
		document.getElementById("link3").style.color = "blue";
		document.getElementById("link3").onclick = function() {
    window.open(
    link3
        );
        return false;
      };
	   document.getElementById('tup3').innerText = arr[36].split("([{").join(' ');
	document.getElementById('tdown3').innerText = arr[37].split("([{").join(' ');
	  document.getElementById('uploadname3').value = arr[40].split("([{").join(' ');
	  var uploadname = arr[40].split("([{").join(' ');
	uploadname =  uploadname.split(" &*( ").join('"');
	uploadname = uploadname.split("@@@@").join('"');
		uploadname = uploadname.split(")}]").join("&");
uploadname = uploadname.split("]]]]").join("#");
uploadname = uploadname.split(" }]) ").join('#');
document.getElementById('uploadname3').value= uploadname;
	  
	  
	  
	  document.getElementById('uploademail3').value = arr[41].split("([{").join(' ');
	  var uploademail = arr[41].split("([{").join(' ');
	uploademail =  uploademail.split(" &*( ").join('"');
	uploademail = uploademail.split("@@@@").join('"');
		uploademail = uploademail.split(")}]").join("&");
uploademail = uploademail.split("]]]]").join("#");
uploademail = uploademail.split(" }]) ").join('#');
document.getElementById('uploademail3').value= uploademail;
	  
	  
			document.getElementById('expired3').innerText = arr[42].split("([{").join(' ');
			var expired = arr[42].split("([{").join(' ');
	expired =  expired.split(" &*( ").join('"');
	expired = expired.split("@@@@").join('"');
		expired = expired.split(")}]").join("&");
expired = expired.split("]]]]").join("#");
expired = expired.split(" }]) ").join('#');
document.getElementById('expired3').innerText= expired;
			}
			
			if (typeof arr[44] != 'undefined')
	{
	document.getElementById('deal_id4').innerText = arr[44].split("([{").join(' ');
	document.getElementById('summary4').value = arr[45].split("([{").join(' ');
	var summary = arr[45].split("([{").join(' ');
	summary =  summary.split(" &*( ").join('"');
	summary = summary.split("@@@@").join('"');
		summary = summary.split(")}]").join("&");
summary = summary.split("]]]]").join("#");
summary = summary.split(" }]) ").join('#');
document.getElementById('summary4').value= summary;
	
	
	document.getElementById('description4').value = arr[52].split("([{").join(' ');
	var description = arr[52].split("([{").join(' ');
	description =  description.split(" &*( ").join('"');
	description = description.split("@@@@").join('"');
		description = description.split(")}]").join("&");
description = description.split("]]]]").join("#");
description = description.split(" }]) ").join('#');
description = description.split("[[[[").join('"');
description = description.replace(/<br>/g, "\r\n");
document.getElementById('description4').value= description;
	//nicEditors.findEditor('description4').setContent(description);

	
	
	document.getElementById('dealprice4').value = arr[46].split("([{").join(' ');
	var dealprice = arr[46].split("([{").join(' ');
	dealprice =  dealprice.split(" &*( ").join('"');
	dealprice = dealprice.split("@@@@").join('"');
		dealprice = dealprice.split(")}]").join("&");
dealprice = dealprice.split("]]]]").join("#");
dealprice = dealprice.split(" }]) ").join('#');
document.getElementById('dealprice4').value= dealprice;
	
	
		document.getElementById('maxprice4').value = arr[47].split("([{").join(' ');
		var maxprice = arr[47].split("([{").join(' ');
	maxprice =  maxprice.split(" &*( ").join('"');
	maxprice = maxprice.split("@@@@").join('"');
		maxprice = maxprice.split(")}]").join("&");
maxprice = maxprice.split("]]]]").join("#");
maxprice = maxprice.split(" }]) ").join('#');
document.getElementById('maxprice4').value= maxprice;
		
		
		document.getElementById('img4').src= arr[53].split("([{").join(' ');
		var img = arr[53].split("([{").join(' ');
	img =  img.split(" &*( ").join('"');
	img = img.split("@@@@").join('"');
		img = img.split(")}]").join("&");
img = img.split("]]]]").join("#");
img = img.split(" }]) ").join('#');
document.getElementById('img4').innerText= img;
		document.getElementById('imgg4').value= img;
		
		document.getElementById('link4').value = arr[48].split("([{").join(' ');
		var link4 = arr[48].split("([{").join(' ');
	link4 =  link4.split(" &*( ").join('"');
	link4 = link4.split(")}]").join("&");
	link4 = link4.split(" }]) ").join('#');
document.getElementById('link4').value= link4;
		
		
	document.getElementById("link4").setAttribute("onclick", "location.href='" + link4 + "'");
	document.getElementById("link4").style.color = "blue";
	document.getElementById("link4").onclick = function() {
    window.open(
    link4
        );
        return false;
      };
	   document.getElementById('tup4').innerText = arr[50].split("([{").join(' ');
	document.getElementById('tdown4').innerText = arr[51].split("([{").join(' ');
	document.getElementById('uploadname4').value = arr[54].split("([{").join(' ');
	var uploadname = arr[54].split("([{").join(' ');
	uploadname =  uploadname.split(" &*( ").join('"');
	uploadname = uploadname.split("@@@@").join('"');
		uploadname = uploadname.split(")}]").join("&");
uploadname = uploadname.split("]]]]").join("#");
uploadname = uploadname.split(" }]) ").join('#');
document.getElementById('uploadname4').value= uploadname;
	
	
	document.getElementById('uploademail4').value = arr[55].split("([{").join(' ');
	var uploademail = arr[55].split("([{").join(' ');
	uploademail =  uploademail.split(" &*( ").join('"');
	uploademail = uploademail.split("@@@@").join('"');
		uploademail = uploademail.split(")}]").join("&");
		
uploademail = uploademail.split("]]]]").join("#");
uploademail = uploademail.split(" }]) ").join('#');
document.getElementById('uploademail4').value= uploademail;
	
	
	
		document.getElementById('expired4').innerText = arr[56].split("([{").join(' ');
		var expired = arr[56].split("([{").join(' ');
	expired =  expired.split(" &*( ").join('"');
	expired = expired.split("@@@@").join('"');
		expired = expired.split(")}]").join("&");
expired = expired.split("]]]]").join("#");
expired = expired.split(" }]) ").join('#');
document.getElementById('expired4').innerText= expired;
		
		}	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/get10all.php?argument1=" + position,true);
  xmlhttp.send();
}
function refresh()
{
	
	refresh1();
	document.getElementById("table1").style.display="none";
	document.getElementById("table2").style.display="none";
	document.getElementById("table3").style.display="none";
		document.getElementById("table4").style.display="table";



		position=getCookie("position");


  document.getElementById("current").innerHTML = position;
  common();
  
  if (position < 4)
{
document.getElementById("Prev").setAttribute("disabled", "disabled");
}





count=getCookie("count");

var modd = count%4;


		
		
		
		
}

function refresh2() {
	
	
	
position=getCookie("position");


  document.getElementById("current").innerHTML = position;
  common();
  
  if (position < 4)
{
document.getElementById("Prev").setAttribute("disabled", "disabled");
}





count=getCookie("count");

var modd = count%4;















 
}

function getcount()
{
count=getCookie("count");


page = getCookie("page");





 if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    
       document.getElementById("count").innerHTML = "Number of deals are " + JSON.parse(this.responseText);
	   
	   

	   
    
	document.cookie = 'count='+ JSON.parse(this.responseText); 
	count=getCookie("count");
	

	var moddd = count%4;
	
	
	  if (moddd == 0)
	   {
	   document.cookie='page='+(count/4); 
	   page = getCookie("page");
	
	   
	   document.getElementById("number_of_pages").innerHTML = "Number of Pages are " + page;
	   
	   }
	   else
	   {
	   document.cookie='page='+Math.ceil(count/4);
		page = getCookie("page");
	
		
	    document.getElementById("number_of_pages").innerHTML = "Number of Pages are " + page ;
		
	   }
	   
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/numberofdealsall.php",true);
  xmlhttp.send();



}

function next() {
//getcount();

count=getCookie("count");

var modd = count%4;


position=getCookie("position");






if (position < parseInt(count)-4-parseInt(modd))
{

position = getCookie("position");
position = parseInt(position) + 4;

document.cookie = 'position=' + position ;
position = getCookie("position");
pageno=getCookie("pageno");
pageno=parseInt(pageno) + 1;

document.cookie = 'pageno='+(pageno);
pageno = getCookie("pageno");

document.getElementById("page_number").innerHTML = "Page Number is : " + pageno;



position=getCookie("position");
document.getElementById("current").innerHTML = position; 
document.getElementById("Prev").disabled = false;
common();
}
else if (count==0)
{}
else
{

position = getCookie("position");
position = parseInt(position) + 4;

document.cookie = 'position=' + position ;


position=getCookie("position");
document.getElementById("current").innerHTML = position; 
document.getElementById("Prev").disabled = false;
common();
document.getElementById("Next").setAttribute("disabled", "disabled");

pageno=getCookie("pageno");
pageno=parseInt(pageno) + 1;

document.cookie = 'pageno='+pageno;
pageno = getCookie("pageno");

document.getElementById("page_number").innerHTML = "Page Number is : " + pageno;
} 
 

}

function previous() {
position=getCookie("position");

if (position > 4)
{
position = getCookie("position");
position = parseInt(position) - 4;

document.cookie = 'position=' + position ;


position=getCookie("position");
pageno=getCookie("pageno");
pageno=parseInt(pageno) - parseInt(1);

document.cookie = 'pageno='+(pageno);
pageno = getCookie("pageno");

document.getElementById("page_number").innerHTML = "Page Number is : " + pageno;
document.getElementById("Next").disabled = false;
position=getCookie("position");
document.getElementById("current").innerHTML = position; 
 common();
}
else
{
position = getCookie("position");
position = parseInt(position) - 4;

document.cookie = 'position=' + position ;


position=getCookie("position");
pageno=getCookie("pageno");
pageno=parseInt(pageno) - parseInt(1);

document.cookie = 'pageno='+(pageno);
pageno = getCookie("pageno");

document.getElementById("page_number").innerHTML = "Page Number is : " + pageno;
document.getElementById("Next").disabled = false;
position=getCookie("position");
document.getElementById("current").innerHTML = position; 
 common();
document.getElementById("Prev").setAttribute("disabled", "disabled");
}

 

 
}









function page1() {
//getcount();

count=getCookie("count");

var modd = count%4;


position=getCookie("position");






if (position < parseInt(count)-4-parseInt(modd))
{

position = getCookie("position");
position = 0;

document.cookie = 'position=' + position ;
position = getCookie("position");
pageno=getCookie("pageno");
pageno= 1;

document.cookie = 'pageno='+(pageno);
pageno = getCookie("pageno");

document.getElementById("page_number").innerHTML = "Page Number is : " + pageno;



position=getCookie("position");
document.getElementById("current").innerHTML = position;
document.getElementById("Prev").setAttribute("disabled", "disabled"); 
common();
}
else if (count==0)
{}
else
{

position = getCookie("position");
position = 0;

document.cookie = 'position=' + position ;


position=getCookie("position");
document.getElementById("current").innerHTML = position; 
document.getElementById("Prev").setAttribute("disabled", "disabled");
common();


pageno=getCookie("pageno");
pageno=1;

document.cookie = 'pageno='+pageno;
pageno = getCookie("pageno");

document.getElementById("page_number").innerHTML = "Page Number is : " + pageno;
} 
 

}


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    
     document.getElementById("demo").innerHTML = this.responseText;
    
  };
  
  
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}





function reject1()
{
	
var deal_id = document.getElementById('deal_id1').innerText;

 if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    
      document.getElementById('uploademail1').innerText=this.responseText;
	   
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/deletedealall.php?deal_id=" + deal_id,true);
  xmlhttp.send();

}

function reject2()
{
	
var deal_id = document.getElementById('deal_id2').innerText;

 if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    
     document.getElementById('uploademail2').innerText=this.responseText;
	   
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/deletedealall.php?deal_id=" + deal_id,true);
  xmlhttp.send();

}

function reject3()
{
	
var deal_id = document.getElementById('deal_id3').innerText;

 if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    
     document.getElementById('uploademail3').innerText=this.responseText;
	   
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/deletedealall.php?deal_id=" + deal_id,true);
  xmlhttp.send();

}

function reject4()
{
	
var deal_id = document.getElementById('deal_id4').innerText;

 if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    
     document.getElementById('uploademail4').innerText=this.responseText;
	   
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/deletedealall.php?deal_id=" + deal_id,true);
  xmlhttp.send();

}
function approve1()
{
	

to_id1=document.getElementById('uploademail1').value;
 to_id1 = to_id1.split("&").join(")}]");
 summary1 = document.getElementById('summary1').value;


 
 
 description1 = document.getElementById('description1').value;
description1 = description1.replace(/(?:\r\n|\r|\n)/g, '<br>');
 dealprice1 = document.getElementById('dealprice1').value;
 maxprice1 = document.getElementById('maxprice1').value;
 img1 = document.getElementById('img1').getAttribute("src");
img1 = img1.split("&").join(")}]");
 imgg1= document.getElementById('imgg1').value;
 link1 = document.getElementById('link1').value;
 tup1 = document.getElementById('tup1').innerText;
 tup1 = tup1.split("&").join(")}]");
 tdown1 = document.getElementById('tdown1').innerText;
 tdown1 = tdown1.split("&").join(")}]");
 uploadname1 = document.getElementById('uploadname1').value;
 uploademail1 = document.getElementById('uploademail1').value;
 

 expired1 = document.getElementById('expired1').innerText;


 
 summary1 = summary1.split("&").join(" )}] ");
	summary1 = summary1.split("#").join(" }]) ");
	summary1 = summary1.split("\"").join(" ])} ");
	

	description1 = description1.split("&").join(" )}] ");
	description1 = description1.split("#").join(" }]) ");
	description1 = description1.split("\"").join(" ])} ");
	

	dealprice1 = dealprice1.split("&").join(" )}] ");
	dealprice1 = dealprice1.split("#").join(" }]) ");
	dealprice1 = dealprice1.split("\"").join(" ])} ");
	

	maxprice1=maxprice1.split("&").join(" )}] ");
	maxprice1 = maxprice1.split("#").join(" }]) ");
	maxprice1 = maxprice1.split("\"").join(" ])} ");
	
	
	
	link1 = link1.split("&").join(" )}] ");
	link1 = link1.split("#").join(" }]) ");
	link1 = link1.split("\"").join(" ])} ");
	
	
	img1=img1.split("&").join(" )}] ");
	img1 = img1.split("#").join(" }]) ");
	img1 = img1.split("\"").join(" ])} ");
	
	imgg1=imgg1.split("&").join(" )}] ");
	imgg1 = imgg1.split("#").join(" }]) ");
	imgg1 = imgg1.split("\"").join(" ])} ");
	
	
	uploadname1=uploadname1.split("&").join(" )}] ");
	uploadname1 = uploadname1.split("#").join(" }]) ");
	uploadname1 = uploadname1.split("\"").join(" ])} ");
	
	
	
	uploademail1=uploademail1.split("&").join(" )}] ");
	uploademail1 = uploademail1.split("#").join(" }]) ");
	uploademail1 = uploademail1.split("\"").join(" ])} ");
 
 
 postedby1= uploadname1+ "(" + uploademail1 + ")" ;
 
 
 if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    
      document.getElementById('uploademail1').value=this.responseText;
	   
  }
   xmlhttp.open("GET","http://atanupal.gearhostpreview.com/ins10.php?summary=\"" + summary1 + "\"&description=\"" + description1 + "\"&dealprice=\"" + dealprice1 + "\"&maxprice=\"" + maxprice1 + "\"&link=\""  + link1 + "\"&picturelink=\"" + imgg1 + "\"&postedby=\"" + postedby1 + "\"",true);
  
  xmlhttp.send();
  
  		
			if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp2=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp2.onreadystatechange=function() {
  
    str2 = this.responseText;
		
		
	document.getElementById('uploademail1').value=this.responseText;

	
	
	
	
	
	
	
  }
  xmlhttp2.open("GET","http://atanupal.gearhostpreview.com/approvemail.php?to_id=" + to_id1 + "&summary=" + summary1 + "&description=" + description1 + "&dealprice=" + dealprice1 + "&maxprice=" + maxprice1 + "&link=" + link1 + "&picturelink=" + imgg1 + "&uploadname=" + uploadname1 + "&uploademail=" + uploademail1 ,true);
  xmlhttp2.send();
  
  
  

}




function approve2()
{
	

to_id2=document.getElementById('uploademail2').value;
 to_id2 = to_id2.split("&").join(")}]");
 summary2 = document.getElementById('summary2').value;

 
 
 
 description2 = document.getElementById('description2').value;
description2 = description2.replace(/(?:\r\n|\r|\n)/g, '<br>');
 dealprice2 = document.getElementById('dealprice2').value;

 maxprice2 = document.getElementById('maxprice2').value;

 img2 = document.getElementById('img2').getAttribute("src");
 img2 = img2.split("&").join(")}]");
 imgg2= document.getElementById('imgg2').value;
 link2 = document.getElementById('link2').value;

 tup2 = document.getElementById('tup2').innerText;
 tup2 = tup2.split("&").join(")}]");
 tdown2 = document.getElementById('tdown2').innerText;
 tdown2 = tdown2.split("&").join(")}]");
 uploadname2 = document.getElementById('uploadname2').value;

 uploademail2 = document.getElementById('uploademail2').value;



 expired2 = document.getElementById('expired2').innerText;

 
 summary2 = summary2.split("&").join(" )}] ");
	summary2 = summary2.split("#").join(" }]) ");
	summary2 = summary2.split("\"").join(" ])} ");
	

	description2 = description2.split("&").join(" )}] ");
	description2 = description2.split("#").join(" }]) ");
	description2 = description2.split("\"").join(" ])} ");
	

	dealprice2 = dealprice2.split("&").join(" )}] ");
	dealprice2 = dealprice2.split("#").join(" }]) ");
	dealprice2 = dealprice2.split("\"").join(" ])} ");
	

	maxprice2=maxprice2.split("&").join(" )}] ");
	maxprice2 = maxprice2.split("#").join(" }]) ");
	maxprice2 = maxprice2.split("\"").join(" ])} ");
	
	
	
	link2 = link2.split("&").join(" )}] ");
	link2 = link2.split("#").join(" }]) ");
	link2 = link2.split("\"").join(" ])} ");
	
	
	img2=img2.split("&").join(" )}] ");
	img2 = img2.split("#").join(" }]) ");
	img2 = img2.split("\"").join(" ])} ");
	
	imgg2=imgg2.split("&").join(" )}] ");
	imgg2 = imgg2.split("#").join(" }]) ");
	imgg2 = imgg2.split("\"").join(" ])} ");
	
	uploadname2=uploadname2.split("&").join(" )}] ");
	uploadname2 = uploadname2.split("#").join(" }]) ");
	uploadname2 = uploadname2.split("\"").join(" ])} ");
	
	
	
	uploademail2=uploademail2.split("&").join(" )}] ");
	uploademail2 = uploademail2.split("#").join(" }]) ");
	uploademail2 = uploademail2.split("\"").join(" ])} ");
 
  postedby2= uploadname2+ "(" + uploademail2 + ")" ;
 
 if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    
      document.getElementById('uploademail2').value=this.responseText;
	   
  }
   xmlhttp.open("GET","http://atanupal.gearhostpreview.com/ins10.php?summary=\"" + summary2 + "\"&description=\"" + description2 + "\"&dealprice=\"" + dealprice2 + "\"&maxprice=\"" + maxprice2 + "\"&link=\""  + link2 + "\"&picturelink=\"" + imgg2 + "\"&postedby=\"" + postedby2 + "\"",true);
  
  xmlhttp.send();

  
  
  
  
  	if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp2=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp2.onreadystatechange=function() {
  
    str2 = this.responseText;
		
		
		document.getElementById('uploademail2').value=this.responseText;

	
	
	
	
	
	
	
  }
  xmlhttp2.open("GET","http://atanupal.gearhostpreview.com/approvemail.php?to_id=" + to_id2+ "&summary=" + summary2 + "&description=" + description2 + "&dealprice=" + dealprice2 + "&maxprice=" + maxprice2 + "&link=" + link2 + "&picturelink=" + imgg2 + "&uploadname=" + uploadname2 + "&uploademail=" + uploademail2 ,true);
  xmlhttp2.send();
  
  
  
  
  
  
  
  
  
}



function approve3()
{
	
to_id3=document.getElementById('uploademail3').value;
 to_id3 = to_id3.split("&").join(")}]");
 summary3 = document.getElementById('summary3').value;

 description3 = document.getElementById('description3').value;
description3 = description3.replace(/(?:\r\n|\r|\n)/g, '<br>');
 dealprice3 = document.getElementById('dealprice3').value;

 maxprice3 = document.getElementById('maxprice3').value;

 img3 = document.getElementById('img3').getAttribute("src");
 img3 = img3.split("&").join(")}]");
 imgg3= document.getElementById('imgg3').value;
 
 link3 = document.getElementById('link3').value;

 tup3 = document.getElementById('tup3').innerText;
 tup3 = tup3.split("&").join(")}]");
 tdown3 = document.getElementById('tdown3').innerText;
 tdown3 = tdown3.split("&").join(")}]");
 uploadname3 = document.getElementById('uploadname3').value;

 uploademail3 = document.getElementById('uploademail3').value;



 expired3 = document.getElementById('expired3').innerText;
 
 summary3 = summary3.split("&").join(" )}] ");
	summary3 = summary3.split("#").join(" }]) ");
	summary3 = summary3.split("\"").join(" ])} ");
	

	description3 = description3.split("&").join(" )}] ");
	description3 = description3.split("#").join(" }]) ");
	description3 = description3.split("\"").join(" ])} ");
	

	dealprice3 = dealprice3.split("&").join(" )}] ");
	dealprice3 = dealprice3.split("#").join(" }]) ");
	dealprice3 = dealprice3.split("\"").join(" ])} ");
	

	maxprice3=maxprice3.split("&").join(" )}] ");
	maxprice3 = maxprice3.split("#").join(" }]) ");
	maxprice3 = maxprice3.split("\"").join(" ])} ");
	
	
	
	link3 = link3.split("&").join(" )}] ");
	link3 = link3.split("#").join(" }]) ");
	link3 = link3.split("\"").join(" ])} ");
	
	
	img3=img3.split("&").join(" )}] ");
	img3 = img3.split("#").join(" }]) ");
	img3 = img3.split("\"").join(" ])} ");
	
	imgg3=imgg3.split("&").join(" )}] ");
	imgg3 = imgg3.split("#").join(" }]) ");
	imgg3 = imgg3.split("\"").join(" ])} ");
	
	uploadname3=uploadname3.split("&").join(" )}] ");
	uploadname3 = uploadname3.split("#").join(" }]) ");
	uploadname3 = uploadname3.split("\"").join(" ])} ");
	
	
	
	uploademail3=uploademail3.split("&").join(" )}] ");
	uploademail3 = uploademail3.split("#").join(" }]) ");
	uploademail3 = uploademail3.split("\"").join(" ])} ");
 
   postedby3= uploadname3+ "(" + uploademail3 + ")" ;
 
 
 if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    
      document.getElementById('uploademail3').value=this.responseText;
	   
  }
   xmlhttp.open("GET","http://atanupal.gearhostpreview.com/ins10.php?summary=\"" + summary3 + "\"&description=\"" + description3 + "\"&dealprice=\"" + dealprice3 + "\"&maxprice=\"" + maxprice3 + "\"&link=\"" + link3 + "\"&picturelink=\"" + imgg3 + "\"&postedby=\"" + postedby3 + "\"",true);
  
  xmlhttp.send();
  
  
  
  		
			if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp2=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp2.onreadystatechange=function() {
  
    str2 = this.responseText;
		
		
		document.getElementById('uploademail3').value=this.responseText;

	
	
	
	
	
	
	
  }
  xmlhttp2.open("GET","http://atanupal.gearhostpreview.com/approvemail.php?to_id=" + to_id3 + "&summary=" + summary3 + "&description=" + description3 + "&dealprice=" + dealprice3 + "&maxprice=" + maxprice3 + "&link=" + link3 + "&picturelink=" + imgg3 + "&uploadname=" + uploadname3 + "&uploademail=" + uploademail3 ,true);
  xmlhttp2.send();
  
  
  
  

}




function approve4()
{
to_id4=document.getElementById('uploademail4').value;
 to_id4 = to_id4.split("&").join(")}]");
 summary4 = document.getElementById('summary4').value;

 description4 = document.getElementById('description4').value;
description4 = description4.replace(/(?:\r\n|\r|\n)/g, '<br>');
 dealprice4 = document.getElementById('dealprice4').value;

 maxprice4 = document.getElementById('maxprice4').value;

  img4 = document.getElementById('img4').getAttribute("src");
 img4 = img4.split("&").join(")}]");
 imgg4= document.getElementById('imgg4').value;
 link4 = document.getElementById('link4').value;

 tup4 = document.getElementById('tup4').innerText;
 tup4 = tup4.split("&").join(")}]");
 tdown4 = document.getElementById('tdown4').innerText;
 tdown4 = tdown4.split("&").join(")}]");
 uploadname4 = document.getElementById('uploadname4').value;

 uploademail4 = document.getElementById('uploademail4').value;



 expired4 = document.getElementById('expired4').innerText;
 
 
 summary4 = summary4.split("&").join(" )}] ");
	summary4 = summary4.split("#").join(" }]) ");
	summary4 = summary4.split(" &*( ").join(" ])} ");
	

	description4 = description4.split("&").join(" )}] ");
	description4 = description4.split("#").join(" }]) ");
	description4 = description4.split("\"").join(" ])} ");
	

	dealprice4 = dealprice4.split("&").join(" )}] ");
	dealprice4 = dealprice4.split("#").join(" }]) ");
	dealprice4 = dealprice4.split("\"").join(" ])} ");
	

	maxprice4=maxprice4.split("&").join(" )}] ");
	maxprice4 = maxprice4.split("#").join(" }]) ");
	maxprice4 = maxprice4.split("\"").join(" ])} ");
	
	
	
	link4 = link4.split("&").join(" )}] ");
	link4 = link4.split("#").join(" }]) ");
	link4 = link4.split("\"").join(" ])} ");
	
	
	img4=img4.split("&").join(" )}] ");
	img4 = img4.split("#").join(" }]) ");
	img4 = img4.split("\"").join(" ])} ");
	
	imgg4=imgg4.split("&").join(" )}] ");
	imgg4 = imgg4.split("#").join(" }]) ");
	imgg4 = imgg4.split("\"").join(" ])} ");
	
	uploadname4=uploadname4.split("&").join(" )}] ");
	uploadname4 = uploadname4.split("#").join(" }]) ");
	uploadname4 = uploadname4.split("\"").join(" ])} ");
	
	
	
	uploademail4=uploademail4.split("&").join(" )}] ");
	uploademail4 = uploademail4.split("#").join(" }]) ");
	uploademail4 = uploademail4.split("\"").join(" ])} ");
 
   postedby4= uploadname4+ "(" + uploademail4 + ")" ;
 
 if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    
      document.getElementById('uploademail4').value=this.responseText;
	   
  }
   xmlhttp.open("GET","http://atanupal.gearhostpreview.com/ins10.php?summary=\"" + summary4 + "\"&description=\"" + description4 + "\"&dealprice=\"" + dealprice4 + "\"&maxprice=\"" + maxprice4 + "\"&link=\"" + link4 + "\"&picturelink=\"" + imgg4 + "\"&postedby=\"" + postedby4 + "\"",true);
  
  xmlhttp.send();
  
  
  
  		
			if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp2=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp2.onreadystatechange=function() {
  
    str2 = this.responseText;
		
		
		document.getElementById('uploademail4').value=this.responseText;

	
	
	
	
	
  }
  xmlhttp2.open("GET","http://atanupal.gearhostpreview.com/approvemail.php?to_id=" + to_id4 + "&summary=" + summary4 + "&description=" + description4 + "&dealprice=" + dealprice4 + "&maxprice=" + maxprice4 + "&link=" + link4 + "&picturelink=" + imgg4 + "&uploadname=" + uploadname4 + "&uploademail=" + uploademail4 ,true);
  xmlhttp2.send();
  
  
  
  
  
  
  

}


function approve11()
{
	

to_id1=document.getElementById('uploademail1').value;
 to_id1 = to_id1.split("&").join(")}]");
 summary1 = document.getElementById('summary1').value;


 
 
 description1 = document.getElementById('description1').value;
description1 = description1.replace(/(?:\r\n|\r|\n)/g, '<br>');
 dealprice1 = document.getElementById('dealprice1').value;
 maxprice1 = document.getElementById('maxprice1').value;
 img1 = document.getElementById('img1').getAttribute("src");
img1 = img1.split("&").join(")}]");
 imgg1= document.getElementById('imgg1').value;
 link1 = document.getElementById('link1').value;
 tup1 = document.getElementById('tup1').innerText;
 tup1 = tup1.split("&").join(")}]");
 tdown1 = document.getElementById('tdown1').innerText;
 tdown1 = tdown1.split("&").join(")}]");
 uploadname1 = document.getElementById('uploadname1').value;
 uploademail1 = document.getElementById('uploademail1').value;
 

 expired1 = document.getElementById('expired1').innerText;


 
 summary1 = summary1.split("&").join(" )}] ");
	summary1 = summary1.split("#").join(" }]) ");
	summary1 = summary1.split("\"").join(" ])} ");
	

	description1 = description1.split("&").join(" )}] ");
	description1 = description1.split("#").join(" }]) ");
	description1 = description1.split("\"").join(" ])} ");
	

	dealprice1 = dealprice1.split("&").join(" )}] ");
	dealprice1 = dealprice1.split("#").join(" }]) ");
	dealprice1 = dealprice1.split("\"").join(" ])} ");
	

	maxprice1=maxprice1.split("&").join(" )}] ");
	maxprice1 = maxprice1.split("#").join(" }]) ");
	maxprice1 = maxprice1.split("\"").join(" ])} ");
	
	
	
	link1 = link1.split("&").join(" )}] ");
	link1 = link1.split("#").join(" }]) ");
	link1 = link1.split("\"").join(" ])} ");
	
	
	img1=img1.split("&").join(" )}] ");
	img1 = img1.split("#").join(" }]) ");
	img1 = img1.split("\"").join(" ])} ");
	
	
		imgg1=imgg1.split("&").join(" )}] ");
	imgg1 = imgg1.split("#").join(" }]) ");
	imgg1 = imgg1.split("\"").join(" ])} ");
	
	uploadname1=uploadname1.split("&").join(" )}] ");
	uploadname1 = uploadname1.split("#").join(" }]) ");
	uploadname1 = uploadname1.split("\"").join(" ])} ");
	
	
	
	uploademail1=uploademail1.split("&").join(" )}] ");
	uploademail1 = uploademail1.split("#").join(" }]) ");
	uploademail1 = uploademail1.split("\"").join(" ])} ");
 
 
 postedby1= uploadname1+ "(" + uploademail1 + ")" ;
 
 
 
  
  		
			if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp2=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp2.onreadystatechange=function() {
  
    str2 = this.responseText;
		
		
	document.getElementById('uploademail1').value=this.responseText;

	
	
	
	
	
	
	
  }
  xmlhttp2.open("GET","http://atanupal.gearhostpreview.com/approvemailall.php?to_id=" + to_id1 + "&summary=" + summary1 + "&description=" + description1 + "&dealprice=" + dealprice1 + "&maxprice=" + maxprice1 + "&link=" + link1 + "&picturelink=" + imgg1 + "&uploadname=" + uploadname1 + "&uploademail=" + uploademail1 ,true);
  xmlhttp2.send();
  
  
  

}




function approve22()
{
	

to_id2=document.getElementById('uploademail2').value;
 to_id2 = to_id2.split("&").join(")}]");
 summary2 = document.getElementById('summary2').value;

 
 
 
 description2 = document.getElementById('description2').value;
description2 = description2.replace(/(?:\r\n|\r|\n)/g, '<br>');
 dealprice2 = document.getElementById('dealprice2').value;

 maxprice2 = document.getElementById('maxprice2').value;

 img2 = document.getElementById('img2').getAttribute("src");
 img2 = img2.split("&").join(")}]");
 imgg2= document.getElementById('imgg2').value;
 
 link2 = document.getElementById('link2').value;

 tup2 = document.getElementById('tup2').innerText;
 tup2 = tup2.split("&").join(")}]");
 tdown2 = document.getElementById('tdown2').innerText;
 tdown2 = tdown2.split("&").join(")}]");
 uploadname2 = document.getElementById('uploadname2').value;

 uploademail2 = document.getElementById('uploademail2').value;



 expired2 = document.getElementById('expired2').innerText;

 
 summary2 = summary2.split("&").join(" )}] ");
	summary2 = summary2.split("#").join(" }]) ");
	summary2 = summary2.split("\"").join(" ])} ");
	

	description2 = description2.split("&").join(" )}] ");
	description2 = description2.split("#").join(" }]) ");
	description2 = description2.split("\"").join(" ])} ");
	

	dealprice2 = dealprice2.split("&").join(" )}] ");
	dealprice2 = dealprice2.split("#").join(" }]) ");
	dealprice2 = dealprice2.split("\"").join(" ])} ");
	

	maxprice2=maxprice2.split("&").join(" )}] ");
	maxprice2 = maxprice2.split("#").join(" }]) ");
	maxprice2 = maxprice2.split("\"").join(" ])} ");
	
	
	
	link2 = link2.split("&").join(" )}] ");
	link2 = link2.split("#").join(" }]) ");
	link2 = link2.split("\"").join(" ])} ");
	
	
	img2=img2.split("&").join(" )}] ");
	img2 = img2.split("#").join(" }]) ");
	img2 = img2.split("\"").join(" ])} ");
	
	imgg2=imgg2.split("&").join(" )}] ");
	imgg2 = imgg2.split("#").join(" }]) ");
	imgg2 = imgg2.split("\"").join(" ])} ");
	
	uploadname2=uploadname2.split("&").join(" )}] ");
	uploadname2 = uploadname2.split("#").join(" }]) ");
	uploadname2 = uploadname2.split("\"").join(" ])} ");
	
	
	
	uploademail2=uploademail2.split("&").join(" )}] ");
	uploademail2 = uploademail2.split("#").join(" }]) ");
	uploademail2 = uploademail2.split("\"").join(" ])} ");
 
  postedby2= uploadname2+ "(" + uploademail2 + ")" ;
 
 

  
  
  
  
  	if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp2=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp2.onreadystatechange=function() {
  
    str2 = this.responseText;
		
		
		document.getElementById('uploademail2').value=this.responseText;

	
	
	
	
	
	
	
  }
  xmlhttp2.open("GET","http://atanupal.gearhostpreview.com/approvemailall.php?to_id=" + to_id2+ "&summary=" + summary2 + "&description=" + description2 + "&dealprice=" + dealprice2 + "&maxprice=" + maxprice2 + "&link=" + link2 + "&picturelink=" + imgg2 + "&uploadname=" + uploadname2 + "&uploademail=" + uploademail2 ,true);
  xmlhttp2.send();
  
  
  
  
  
  
  
  
  
}



function approve33()
{

to_id3=document.getElementById('uploademail3').value;
 to_id3 = to_id3.split("&").join(")}]");
 summary3 = document.getElementById('summary3').value;

 description3 = document.getElementById('description3').value;
description3 = description3.replace(/(?:\r\n|\r|\n)/g, '<br>');
 dealprice3 = document.getElementById('dealprice3').value;

 maxprice3 = document.getElementById('maxprice3').value;

 img3 = document.getElementById('img3').getAttribute("src");
 img3 = img3.split("&").join(")}]");
 imgg3= document.getElementById('imgg3').value;
 
 link3 = document.getElementById('link3').value;

 tup3 = document.getElementById('tup3').innerText;
 tup3 = tup3.split("&").join(")}]");
 tdown3 = document.getElementById('tdown3').innerText;
 tdown3 = tdown3.split("&").join(")}]");
 uploadname3 = document.getElementById('uploadname3').value;

 uploademail3 = document.getElementById('uploademail3').value;



 expired3 = document.getElementById('expired3').innerText;
 
 summary3 = summary3.split("&").join(" )}] ");
	summary3 = summary3.split("#").join(" }]) ");
	summary3 = summary3.split("\"").join(" ])} ");
	

	description3 = description3.split("&").join(" )}] ");
	description3 = description3.split("#").join(" }]) ");
	description3 = description3.split("\"").join(" ])} ");
	

	dealprice3 = dealprice3.split("&").join(" )}] ");
	dealprice3 = dealprice3.split("#").join(" }]) ");
	dealprice3 = dealprice3.split("\"").join(" ])} ");
	

	maxprice3=maxprice3.split("&").join(" )}] ");
	maxprice3 = maxprice3.split("#").join(" }]) ");
	maxprice3 = maxprice3.split("\"").join(" ])} ");
	
	
	
	link3 = link3.split("&").join(" )}] ");
	link3 = link3.split("#").join(" }]) ");
	link3 = link3.split("\"").join(" ])} ");
	
	
	img3=img3.split("&").join(" )}] ");
	img3 = img3.split("#").join(" }]) ");
	img3 = img3.split("\"").join(" ])} ");
	
	imgg3=imgg3.split("&").join(" )}] ");
	imgg3 = imgg3.split("#").join(" }]) ");
	imgg3 = imgg3.split("\"").join(" ])} ");
	
	uploadname3=uploadname3.split("&").join(" )}] ");
	uploadname3 = uploadname3.split("#").join(" }]) ");
	uploadname3 = uploadname3.split("\"").join(" ])} ");
	
	
	
	uploademail3=uploademail3.split("&").join(" )}] ");
	uploademail3 = uploademail3.split("#").join(" }]) ");
	uploademail3 = uploademail3.split("\"").join(" ])} ");
 
   postedby3= uploadname3+ "(" + uploademail3 + ")" ;
 
 
 
  
  
  		
			if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp2=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp2.onreadystatechange=function() {
  
    str2 = this.responseText;
		
		
		document.getElementById('uploademail3').value=this.responseText;

	
	
	
	
	
	
	
  }
  xmlhttp2.open("GET","http://atanupal.gearhostpreview.com/approvemailall.php?to_id=" + to_id3 + "&summary=" + summary3 + "&description=" + description3 + "&dealprice=" + dealprice3 + "&maxprice=" + maxprice3 + "&link=" + link3 + "&picturelink=" + imgg3 + "&uploadname=" + uploadname3 + "&uploademail=" + uploademail3 ,true);
  xmlhttp2.send();
  
  
  
  

}




function approve44()
{
	

	
to_id4=document.getElementById('uploademail4').value;
 to_id4 = to_id4.split("&").join(")}]");
 summary4 = document.getElementById('summary4').value;

 description4 = document.getElementById('description4').value;
description4 = description4.replace(/(?:\r\n|\r|\n)/g, '<br>');
 dealprice4 = document.getElementById('dealprice4').value;

 maxprice4 = document.getElementById('maxprice4').value;

  img4 = document.getElementById('img4').getAttribute("src");
 img4 = img4.split("&").join(")}]");
 imgg4= document.getElementById('imgg4').value;
 link4 = document.getElementById('link4').value;

 tup4 = document.getElementById('tup4').innerText;
 tup4 = tup4.split("&").join(")}]");
 tdown4 = document.getElementById('tdown4').innerText;
 tdown4 = tdown4.split("&").join(")}]");
 uploadname4 = document.getElementById('uploadname4').value;

 uploademail4 = document.getElementById('uploademail4').value;



 expired4 = document.getElementById('expired4').innerText;
 
 
 summary4 = summary4.split("&").join(" )}] ");
	summary4 = summary4.split("#").join(" }]) ");
	summary4 = summary4.split(" &*( ").join(" ])} ");
	

	description4 = description4.split("&").join(" )}] ");
	description4 = description4.split("#").join(" }]) ");
	description4 = description4.split("\"").join(" ])} ");
	

	dealprice4 = dealprice4.split("&").join(" )}] ");
	dealprice4 = dealprice4.split("#").join(" }]) ");
	dealprice4 = dealprice4.split("\"").join(" ])} ");
	

	maxprice4=maxprice4.split("&").join(" )}] ");
	maxprice4 = maxprice4.split("#").join(" }]) ");
	maxprice4 = maxprice4.split("\"").join(" ])} ");
	
	
	
	link4 = link4.split("&").join(" )}] ");
	link4 = link4.split("#").join(" }]) ");
	link4 = link4.split("\"").join(" ])} ");
	
	
	img4=img4.split("&").join(" )}] ");
	img4 = img4.split("#").join(" }]) ");
	img4 = img4.split("\"").join(" ])} ");
	
	imgg4=imgg4.split("&").join(" )}] ");
	imgg4 = imgg4.split("#").join(" }]) ");
	imgg4 = imgg4.split("\"").join(" ])} ");
	
	uploadname4=uploadname4.split("&").join(" )}] ");
	uploadname4 = uploadname4.split("#").join(" }]) ");
	uploadname4 = uploadname4.split("\"").join(" ])} ");
	
	
	
	uploademail4=uploademail4.split("&").join(" )}] ");
	uploademail4 = uploademail4.split("#").join(" }]) ");
	uploademail4 = uploademail4.split("\"").join(" ])} ");
 
   postedby4= uploadname4+ "(" + uploademail4 + ")" ;
 

  
  
  
  		
			if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp2=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp2.onreadystatechange=function() {
  
    str2 = this.responseText;
		
		
		document.getElementById('uploademail4').value=this.responseText;

	
	
	
	
	
  }
  xmlhttp2.open("GET","http://atanupal.gearhostpreview.com/approvemailall.php?to_id=" + to_id4 + "&summary=" + summary4 + "&description=" + description4 + "&dealprice=" + dealprice4 + "&maxprice=" + maxprice4 + "&link=" + link4 + "&picturelink=" + imgg4 + "&uploadname=" + uploadname4 + "&uploademail=" + uploademail4 ,true);
  xmlhttp2.send();
  
  
  
  
  
  
  

}






function login()
{
	
	var username=document.getElementById('username').value;

var  password = document.getElementById('password').value;
 
		if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function() {
	  
	  
	  if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
   
  
  var  str = this.responseText;
		
		
		
var arr=str.split(" ");



	if(arr[1] == "successful")	
		{
			
			 document.getElementById("table1").style.display="table";
	document.getElementById("table2").style.display="table";
	document.getElementById("table3").style.display="table";
	
	document.getElementById("table4").style.display="none";
			
		}
		else
		{
			alert(username + ": Username/Password Incorrect " + str);
			
		}
		
	  }
	
	
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/login.php?username=" + username+ "&password=" + password ,true);
  xmlhttp.send();
	
	
	
	
	
	
	
}

