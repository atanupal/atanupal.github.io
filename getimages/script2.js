
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
   var div= document.getElementById("txtHint");
   div.style.visibility = "hidden"; 
      document.getElementById("txtHint").innerHTML=this.responseText;
    str = this.responseText;
	arr=str.split(" ");
	
	
	
		
	document.getElementById('img1').src=arr[0];
	document.getElementById('img2').src=arr[1];
	document.getElementById('img3').src=arr[2];
	document.getElementById('img4').src=arr[3];
	
	
	
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/getimages/index.php?url=" + url,true);
  xmlhttp.send();

   
	
}

