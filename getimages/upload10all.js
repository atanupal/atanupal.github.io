var arr;
var tem;
var url;
	var num;
var radiobtn2;
var uu;
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
   if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
  
  
  
  
    str = this.responseText;
	arr=str.split("\n");
	arr2=str.split("\n");
	
//	z = getImgSize(arr[2]);
	//alert(z);
	
//for (j=j; j<18 ; j++)
//	{
	//	arr[j]="";
	//	
	//}		

	
	
	 document.getElementById("table1").style.display="table";

							
	//i;
    j=0;

//	for (i=0; i<18; i++)
	//{
	//	//alert(getImgSize(arr[i]));
	  //      if( getImgSize(arr[i]) <= 60 ) {
             //  alert("small " + width);
	//		   }
     //       else {
      //          arr[j] = arr2[i];
	//			j=j+1;
	//			alert("big " + width);
     //       }
			
	
	//}
	
	
//for (j=j; j<18 ; j++)
	//{
	//	arr[j]="";
	//	
	//}	
			
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
 						
	radiobtn2 = document.getElementById("pic1");
radiobtn2.checked = true;

	
	uu= arr[0];
	
	//alert(radiobtn2.src);
	
  }
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/getimages/index.php?url=" + url,true);
  xmlhttp.send();

   
	
}
function upload()
{
	

	var str;
	var str2;
	var str3;
	var b;
	
	
	var summary = document.getElementById('summary').value;
	
	
	summary = summary.split("&").join(")}]");
	summary = summary.split('"').join("@@@@");
	summary = summary.split("#").join("]]]]");
	summary = summary.split("'").join("}}}}");
	 b = summary.replace(/[^a-z0-9 &"'`~#!@$%^&*()?/<>_+{}[\\|\]:;,.=-]/gi,'');
	summary = b;
	
	if (summary)
	{
	
	//var description = document.getElementById('description').value;
	var description = document.getElementById('description').value;
	description = description.split("&").join(")}]");
	description = description.split('"').join("[[[[");
	description = description.split("#").join("]]]]");
	description = description.split("'").join("}}}}");
	description = description.replace(/(?:\r\n|\r|\n)/g, '<br>');
	 b = description.replace(/[^a-z0-9 &"'`~#!@$%^&*()?/<>_+{}[\\|\]:;,.=\r\n-]/gi,'');
	description = b;
	
	
	
	var dealprice = document.getElementById('dealprice').value;
	dealprice = dealprice.split("&").join(")}]");
	dealprice = dealprice.split('"').join("@@@@");
	dealprice = dealprice.split("#").join("]]]]");
	 b = dealprice.replace(/[^a-z0-9 &"`~#!@$%^&*()?/<>_+{}[\\|\]:;,.=-]/gi,'');
	dealprice = b;
	
	var maxprice = document.getElementById('maxprice').value;
	maxprice=maxprice.split("&").join(")}]");
	maxprice = maxprice.split('"').join("@@@@");
	maxprice = maxprice.split("#").join("]]]]");
	b = maxprice.replace(/[^a-z0-9 &"`~#!@$%^&*()?/<>_+{}[\\|\]:;,.=-]/gi,'');
	maxprice = b;
	
	
	url = document.getElementById('url').value;
	
	url = url.split("&").join(")}]");
	url = url.split('"').join("@@@@");
	url = url.split("#").join("]]]]");
	url = url.split("%").join("%25");
	b = url.replace(/[^a-z0-9 &"`~#!@$%^&*()?/<>_+{}[\\|\]:;,.=-]/gi,'');
	url = b;
	
	
	var picturelink = uu;
	picturelink=picturelink.split("&").join(")}]");
	picturelink = picturelink.split('"').join("@@@@");
	picturelink = picturelink.split("#").join("]]]]");
	
	
	
	var uploadname = document.getElementById('uploadname').value;
	uploadname=uploadname.split("&").join(")}]");
	uploadname = uploadname.split('"').join("@@@@");
	uploadname = uploadname.split("#").join("]]]]");
	b = uploadname.replace(/[^a-z0-9 &"`~#!@$%^&*()?/<>_+{}[\\|\]:;,.=-]/gi,'');
	uploadname = b;
	
	var uploademail = document.getElementById('uploademail').value;
	uploademail=uploademail.split("&").join(")}]");
	uploademail = uploademail.split('"').join("@@@@");
	uploademail = uploademail.split("#").join("]]]]");
	b = uploademail.replace(/[^a-z0-9 &"`~#!@$%^&*()?/<>_+{}[\\|\]:;,.=-]/gi,'');
	uploademail = b;

 if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function() {
  
    str = this.responseText;
		
  }
 
	
	
	
  
   

  
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/ins10all.php?summary=\"" + summary + "\"&description=\"" + description  + "\"&dealprice=\"" + dealprice + "\"&maxprice=\"" + maxprice + "\"&link=\"" + url + "\"&picturelink=\"" + picturelink + "\"&uploadname=\"" + uploadname + "\"&uploademail=\"" + uploademail + "\"",true);
   xmlhttp.send();

   
 
 
 
 //var des = description.match(/.{1,500}/g);
 
 

 
 
 var i=0;
 strtemp="";

	 

 

 
 
			
			
			if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp2=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp2.onreadystatechange=function() {
  
    str2 = this.responseText;
		
		hideall();
	

	str3 = "Hi " + uploadname + " " + str + " " + strtemp + " " + " " + str2;
	
			
	document.getElementById('text1').innerText=str3;		
			
		
	
	
	
	
	
	
  }
  
 
  
  
  xmlhttp2.open("GET","http://atanupal.gearhostpreview.com/mail.php?to_id=" + uploademail + "&summary=" + summary + "&description=" + description +  "&dealprice=" + dealprice + "&maxprice=" + maxprice + "&link=" + url + "&picturelink=" + picturelink + "&uploadname=" + uploadname + "&uploademail=" + uploademail ,true);
  xmlhttp2.send();

   
	

   }
    else 
  {
	  alert("Summary can't be empty");
  }
   
   
   
   
	
}
function func2(u)
{
	num = u.substring(3);

	radiobtn2 = document.getElementById(u);
radiobtn2.checked = true;
	uu=arr[num-1];
}


function hidepic()
{
	
 document.getElementById("table1").style.display="none";
 refresh1();
	
	
	
	
	
	
	
}
function hideall()
{
	 document.getElementById("table1").style.display="none";
 
	document.getElementById("tabletop").style.display="none";
	document.getElementById("tablebottom").style.display="none";
}

