
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
	arr2=str.split("\n");
	
	document.getElementById('link1').innerText = arr2[0];
	
	document.getElementById('link2').innerText = arr2[1];
	document.getElementById('link3').innerText = arr2[2];
	document.getElementById('link4').innerText = arr2[3];
	
		
	document.getElementById('img1').src=arr2[0];
	document.getElementById('img2').src=arr2[1];
	document.getElementById('img3').src=arr2[2];
	document.getElementById('img4').src=arr2[3];
	
	
	
	
	
	
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/getimages/index.php?url=" + url,true);
  xmlhttp.send();

   
	
}

