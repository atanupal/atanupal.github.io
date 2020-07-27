var arr;
var tem;
var url;
function geturl()
{
	

	url = document.getElementById('url').value;


 if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function() {
  
    str = this.responseText;
	arr=str.split("\n");
	
	
	
		
	document.getElementById('img1').src=arr[0];
	document.getElementById('p1').value=arr[0];
	document.getElementById('img2').src=arr[1];
	document.getElementById('p2').value=arr[1];
	document.getElementById('img3').src=arr[2];
	document.getElementById('p3').value=arr[2];
	document.getElementById('img4').src=arr[3];
	document.getElementById('p4').value=arr[3];
	
	document.getElementById('img5').src=arr[4];
	document.getElementById('p5').value=arr[4];
	document.getElementById('img6').src=arr[5];
	document.getElementById('p6').value=arr[5];
	document.getElementById('img7').src=arr[6];
	document.getElementById('p7').value=arr[6];
	document.getElementById('img8').src=arr[7];
	document.getElementById('p8').value=arr[7];
	document.getElementById('img9').src=arr[8];
	document.getElementById('p9').value=arr[8];
	document.getElementById('img10').src=arr[9];
	document.getElementById('p10').value=arr[9];
	document.getElementById('img11').src=arr[10];
	document.getElementById('p11').value=arr[10];
	document.getElementById('img12').src=arr[11];
	document.getElementById('p12').value=arr[11];
		document.getElementById('img13').src=arr[12];
		document.getElementById('p13').value=arr[12];
			document.getElementById('img14').src=arr[13];
			document.getElementById('p14').value=arr[13];
				document.getElementById('img15').src=arr[14];
				document.getElementById('p15').value=arr[14];
					document.getElementById('img16').src=arr[15];
					document.getElementById('p16').value=arr[15];
						document.getElementById('img17').src=arr[16];
						document.getElementById('p17').value=arr[16];
							document.getElementById('img18').src=arr[17];
							document.getElementById('img19').src=arr[18];
	document.getElementById('p19').value=arr[18];
	document.getElementById('img20').src=arr[19];
	document.getElementById('p20').value=arr[19];
	document.getElementById('img21').src=arr[20];
	document.getElementById('p21').value=arr[20];
	document.getElementById('img22').src=arr[21];
	document.getElementById('p22').value=arr[21];
		document.getElementById('img23').src=arr[22];
		document.getElementById('p23').value=arr[22];
			document.getElementById('img24').src=arr[23];
			document.getElementById('p24').value=arr[23];
				document.getElementById('img25').src=arr[24];
				document.getElementById('p25').value=arr[24];
					document.getElementById('img26').src=arr[25];
					document.getElementById('p26').value=arr[25];
						document.getElementById('img27').src=arr[26];
						document.getElementById('p27').value=arr[26];
document.getElementById('img28').src=arr[27];
							document.getElementById('p28').value=arr[27];
document.getElementById('img29').src=arr[28];
	document.getElementById('p29').value=arr[28];
	document.getElementById('img30').src=arr[29];
	document.getElementById('p30').value=arr[29];
	document.getElementById('img31').src=arr[30];
	document.getElementById('p31').value=arr[30];
	document.getElementById('img32').src=arr[31];
	document.getElementById('p32').value=arr[31];
		document.getElementById('img33').src=arr[32];
		document.getElementById('p33').value=arr[32];
			document.getElementById('img34').src=arr[33];
			document.getElementById('p34').value=arr[33];
				document.getElementById('img35').src=arr[34];
				document.getElementById('p35').value=arr[34];
					document.getElementById('img36').src=arr[35];
					document.getElementById('p36').value=arr[35];
						document.getElementById('img37').src=arr[36];
						document.getElementById('p37').value=arr[36];
	
	
	
	
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/getimages/index.php?url=" + url,true);
  xmlhttp.send();

   
	
}
function upload()
{
	
tem = parseInt(document.querySelector('input[name = "picture"]:checked').value)-1;
	 alert(tem);
	 alert(arr[tem]);
	var summary = document.getElementById('summary').value;
	summary = summary.split("&").join(")}]");
	var description = document.getElementById('description').value;
	description = description.split("&").join(")}]");
	
	var dealprice = document.getElementById('dealprice').value;
	dealprice = dealprice.split("&").join(")}]");
	var maxprice = document.getElementById('maxprice').value;
	maxprice=maxprice.split("&").join(")}]");
	
	url = document.getElementById('url').value;
	
	url = url.split("&").join(")}]");
	var picturelink = arr[tem];
	picturelink=picturelink.split("&").join(")}]");
	var postedby = document.getElementById('postedby').value;
	postedby=postedby.split("&").join(")}]");
	
	
alert ("http://atanupal.gearhostpreview.com/ins10.php?summary=\"" + summary + "\"&description=\"" + description + "\"&dealprice=\"" + dealprice + "\"&maxprice=\"" + maxprice + "\"&link=\"" + url + "\"&picturelink=\"" + picturelink + "\"&postedby=\"" + postedby +"\"");



 if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function() {
  
    str = this.responseText;
		
		
	document.getElementById('result').value=str;

	
	
	
	
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/ins10.php?summary=\"" + summary + "\"&description=\"" + description + "\"&dealprice=\"" + dealprice + "\"&maxprice=\"" + maxprice + "\"&link=\"" + url + "\"&picturelink=\"" + picturelink + "\"&postedby=\"" + postedby + "\"",true);
  xmlhttp.send();

   
	
}

function temp()
{
	
	//var tem = document.getElementByName("picture");

	
	 
	  tem = parseInt(document.querySelector('input[name = "picture"]:checked').value)-1;
	 alert(tem);
	 alert(arr[tem]);
	 var summary = document.getElementById('summary').value;
	summary = summary.split("&").join(")}]");
	var description = document.getElementById('description').value;
	description = description.split("&").join(")}]");
	
	var dealprice = document.getElementById('dealprice').value;
	dealprice = dealprice.split("&").join(")}]");
	var maxprice = document.getElementById('maxprice').value;
	maxprice=maxprice.split("&").join(")}]");
	
	url = document.getElementById('url').value;
	
	url = url.split("&").join(")}]");
	var picturelink = arr[tem];
	picturelink=picturelink.split("&").join(")}]");
	
alert ("summary=\"" + summary + "\"&description=\"" + description + "\"&dealprice=\"" + dealprice + "\"&maxprice=\"" + maxprice + "\"&link=\"" + url + "\"&picturelink=\"" + picturelink + "\"");
	
	
	
}

