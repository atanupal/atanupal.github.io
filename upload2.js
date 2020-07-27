
function geturl()
{
	

	var url = document.getElementById("url").value;


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
							document.getElementById('p18').value=arr[17];
							
	
	
	
	
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/getimages/index.php?url=" + url,true);
  xmlhttp.send();

   
	
}
function upload()
{
	

	var summary = document.getElementById("summary").value;
	var description = document.getElementById("description").value;
	var dealprice = document.getElementById("dealprice").value;
	var maxprice = document.getElementById("maxprice").value;
	var link = document.getElementById("link").value;
	var picturelink = document.getElementById("picturelink").value;



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
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/ins.php?summary=" + summary + "&description=" + description + "&dealprice=" + dealprice + "&maxprice=" + maxprice + "&link=" + link + "&picturelink=" + picturelink,true);
  xmlhttp.send();

   
	
}

function temp()
{
	
	alert(document.getElementById("picture").value);

	
}

