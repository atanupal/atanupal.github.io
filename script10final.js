
var deal_id;



var u1;
var u2;
var u3;
var u4;
var d1;
var d2;
var d3;
var d4;

var p;
var n;
var exp=0;

var e1;
var e2;
var e3;
var e4;

var vare1;
var vare2;
var vare3;
var vare4;

var shortdesc1;
var shortdesc2;
var shortdesc3;
var shortdesc4;
var shortlink1;
var shortlink2;
var shortlink3;
var shortlink4;

var link;

function expand()
{
	if (exp==0)
	{
		exp=1;
		document.getElementById("expand").innerText="- Collapse All";
	}
	else
	{
		exp=0;
		document.getElementById("expand").innerText="+ Expand All";
	}
	refresh();
		
}


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


document.cookie = 'a=a';
document.cookie = 'b=b';
document.cookie = 'c=c';

document.cookie = 'apos=0';
document.cookie = 'bpos=0';
document.cookie = 'cpos=0';


var a = getCookie("a");
var b = getCookie("b");
var c = getCookie("c");

var apos=getCookie("apos");
var bpos=getCookie("bpos");
var cpos=getCookie("cpos");


}

function afunc()
{
	
	
	var a = getCookie("a");
		
  if ( typeof a == 'undefined') 
  {
	    document.cookie = 'a=a' + deal_id;
  }
	if ( a == null)
	  {
		  document.cookie = 'a=a' + deal_id;
	  }
	  
  
  
  a = getCookie("a");
 aa =  a.split("a");
 
 
 
  var apos = getCookie("apos");
  //alert("apos = " + apos);
  
 if ( typeof apos == 'undefined') { 
 
 
  document.cookie = 'apos=-1';
 
 }
if (isNaN(apos))  {
   document.cookie = 'apos=-1';
	//alert(getCookie("apos"));

}

if (apos=="")
{
	 document.cookie = 'apos=-1';
}

if (apos==null)
{
	 document.cookie = 'apos=-1';
}
	
apos = getCookie("apos");
apos = parseInt(apos) + 1;
//alert(apos);
if (parseInt(apos) >= 10)
{
	
	apos=0;

}
 for (i=0;i<10;i++)
{
	
  if (i==apos)
  {
	  aa[i]=deal_id;
	  a=aa.join("a");
	 // alert(" a = " + a);
	  document.cookie = 'a=' + a;
	  document.cookie = 'apos=' + apos;
	
  }
  
 

}
  document.cookie = 'apos=' + apos;


  
  
	
	
	
	
}



function bfunc()
{
	
	var b = getCookie("b");
		
  if ( typeof b == 'undefined') 
  {
	    document.cookie = 'b=b' + deal_id;
  }
	if ( b == null)
	  {
		  document.cookie = 'b=b' + deal_id;
	  }
	  
  
  
  b = getCookie("b");
 bb =  b.split("b");
 
 
 
  var bpos = getCookie("bpos");
  //alert("bpos = " + bpos);
  
 if ( typeof bpos == 'undefined') { 
 
 
  document.cookie = 'bpos=-1';
 
 }
if (isNaN(bpos))  {
   document.cookie = 'bpos=-1';
	//alert(getCookie("bpos"));

}

if (bpos=="")
{
	 document.cookie = 'bpos=-1';
}

if (bpos==null)
{
	 document.cookie = 'bpos=-1';
}
	
bpos = getCookie("bpos");
bpos = parseInt(bpos) + 1;
//alert(bpos);
if (parseInt(bpos) >= 10)
{
	
	bpos=0;

}
 for (i=0;i<10;i++)
{
	
  if (i==bpos)
  {
	  bb[i]=deal_id;
	  b=bb.join("b");
	  //alert(" b = " + b);
	  document.cookie = 'b=' + b;
	  document.cookie = 'bpos=' + bpos;
	
  }
  
 

}
  document.cookie = 'bpos=' + bpos;


  
  


  
	
}



function cfunc()
{
	
	
	var c = getCookie("c");
		
  if ( typeof c == 'undefined') 
  {
	    document.cookie = 'c=c' + deal_id;
  }
	if ( c == null)
	  {
		  document.cookie = 'c=c' + deal_id;
	  }
	  
  
  
  c = getCookie("c");
 cc =  c.split("c");
 
 
 
  var cpos = getCookie("cpos");
  //alert("apos = " + apos);
  
 if ( typeof cpos == 'undefined') { 
 
 
  document.cookie = 'cpos=-1';
 
 }
if (isNaN(cpos))  {
   document.cookie = 'cpos=-1';
	//alert(getCookie("apos"));

}

if (cpos=="")
{
	 document.cookie = 'cpos=-1';
}

if (cpos==null)
{
	 document.cookie = 'cpos=-1';
}
	
cpos = getCookie("cpos");
cpos = parseInt(cpos) + 1;
//alert(apos);
if (parseInt(cpos) >= 10)
{
	
	cpos=0;

}
 for (i=0;i<10;i++)
{
	
  if (i==cpos)
  {
	  cc[i]=deal_id;
	  c=cc.join("c");
	 // alert(" a = " + a);
	  document.cookie = 'c=' + c;
	  document.cookie = 'cpos=' + cpos;
	
  }
  
 

}
  document.cookie = 'cpos=' + cpos;


  
  
	
	
	
	
}









function getcurrent()
{
position=getCookie("position");


  document.getElementById("current").innerHTML = position;
    
	
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
	

	
	vare1='0';
 vare2='0';
 vare3='0';
 vare4='0';
	document.getElementById('deal_id1').innerText="";
	document.getElementById('summary1').innerText="";
	document.getElementById('description1').innerText="";
	document.getElementById('dealprice1').innerText="";
	document.getElementById('maxprice1').innerText="";
	document.getElementById('img1').src="";
	document.getElementById('tup1').innerText="";
	
	
	//document.getElementById('tu1').disabled = true;
	//document.getElementById('thu1').src="thumbsupd.jpg";
	u1=0;
	
	
	
	
	//document.getElementById('td1').disabled = true;
		//document.getElementById('thd1').src="thumbsdownd.jpg";
		d1=0;
		
		
	document.getElementById('tdown1').innerText="";
	document.getElementById('link1').innerText="";
	document.getElementById('uploadname1').innerText="";
		document.getElementById('ex1').innerText="";
		e1=0;
		
	document.getElementById('deal_id2').innerText="";
	document.getElementById('summary2').innerText="";
	document.getElementById('description2').innerText="";
	document.getElementById('dealprice2').innerText="";
		document.getElementById('maxprice2').innerText="";
		document.getElementById('img2').src="";
			document.getElementById('tup2').innerText="";
			//document.getElementById('thu2').src="thumbsupd.jpg";
			u2=0;
			
				//document.getElementById('tu2').disabled = true;
	document.getElementById('tdown2').innerText="";
	//document.getElementById('thd2').src="thumbsdownd.jpg";
					//document.getElementById('td2').disabled = true;
					d2=0;
		document.getElementById('link2').innerText="";
		document.getElementById('uploadname2').innerText="";
		document.getElementById('ex2').innerText="";
		e2=0;
	document.getElementById('deal_id3').innerText="";
	document.getElementById('summary3').innerText="";
	document.getElementById('description3').innerText="";
	document.getElementById('dealprice3').innerText="";
		document.getElementById('maxprice3').innerText="";
		document.getElementById('img3').src="";
			document.getElementById('tup3').innerText="";
			//document.getElementById('thu3').src="thumbsupd.jpg";
				//document.getElementById('tu3').disabled = true;
				u3=0;
	document.getElementById('tdown3').innerText="";
	//document.getElementById('td3').disabled = true;
		//document.getElementById('thd3').src="thumbsdownd.jpg";
		d3=0;
		document.getElementById('link3').innerText="";
		document.getElementById('uploadname3').innerText="";
			document.getElementById('ex3').innerText="";
			e3=0;
	document.getElementById('deal_id4').innerText="";
	document.getElementById('summary4').innerText="";
	document.getElementById('description4').innerText="";
	document.getElementById('dealprice4').innerText="";
		document.getElementById('maxprice4').innerText="";
		document.getElementById('img4').src="";
			document.getElementById('tup4').innerText="";
			//document.getElementById('thu4').src="thumbsupd.jpg";
				//document.getElementById('tu4').disabled = true;
				u4=0;
				
			//document.getElementById('td4').disabled = true;
					//document.getElementById('thd4').src="thumbsdownd.jpg";
					d4=0;
					
	document.getElementById('tdown4').innerText="";
		document.getElementById('link4').innerText="";
	document.getElementById('uploadname4').innerText="";
	document.getElementById('ex4').innerText="";
	e4=0;
	
	
	if (typeof arr[2] != 'undefined')
	{
	
	document.getElementById('deal_id1').innerText = arr[2].split("([{").join(' ');
	deal_id = document.getElementById('deal_id1').innerText;
	
	document.getElementById('summary1').innerText = arr[3].split("([{").join(' ');
	var summary = arr[3].split("([{").join(' ');
	summary =  summary.split(" &*( ").join('"');
	summary = summary.split(" }]) ").join('#');
document.getElementById('summary1').innerText= summary;
	
	document.getElementById('description1').innerText = arr[10].split("([{").join(' ');
	
	
	
	var description = arr[10].split("([{").join(' ');
	description =  description.split(" &*( ").join('"');
		description = description.split(")}]").join("&");
	description =  description.split("@@@@").join('"');
		description =  description.split("]]]]").join('#')
		description = description.split(" }]) ").join('#');
	shortdesc1=description.substring(0,40) + " ...";
	if (exp==0)
	{
	document.getElementById('description1').innerHTML= shortdesc1;
	}
	else
	{
document.getElementById('description1').innerHTML= description;
	}
	
	document.getElementById('dealprice1').innerText = arr[4].split("([{").join(' ');
	
	var dealprice = arr[4].split("([{").join(' ');
	dealprice =  dealprice.split(" &*( ").join('"');
	dealprice = dealprice.split(" }]) ").join('#');
document.getElementById('dealprice1').innerText= dealprice;
	
	document.getElementById('maxprice1').innerText= arr[5].split("([{").join(' ');
	var maxprice = arr[5].split("([{").join(' ');
	maxprice =  maxprice.split(" &*( ").join('"');
	maxprice = maxprice.split(" }]) ").join('#');
document.getElementById('maxprice1').innerText= maxprice;
	
	
	document.getElementById('img1').src= arr[11].split("([{").join(' ');
	var img = arr[11].split("([{").join(' ');
	img =  img.split(" &*( ").join('"');
	img = img.split(" }]) ").join('#');
document.getElementById('img1').innerText= img;

document.getElementById('tup1').src= arr[8].split("([{").join(' ');



if (arr[7]=='1')
{
	vare1='1';
}

	var tup = arr[8].split("([{").join(' ');
	tup =  tup.split(" &*( ").join('"');
	
	if (summary)
{
	
	//document.getElementById('tu1').disabled = false;
//document.getElementById('td1').disabled = false;

//document.getElementById('thu1').src="thumbsup.jpg";
	//document.getElementById('thd1').src="thumbsdown.jpg";
	u1=1; d1=1; e1=1;
	
	
    var a = getCookie("a");
		
  if ( typeof a != 'undefined') {
	  
	  
	  if ( a == null)
	  {
		  document.cookie = 'a=a';
	  }
	  
	aa =  a.split("a");

	for (i=0; i<10 ; i++)
	{
		if (typeof aa[i] != 'undefined')
		{
			
			if (aa[i] != "")
			{
			
				if (parseInt(deal_id) == parseInt(aa[i]))
				{
					//document.getElementById('thu1').src="thumbsupd.jpg";
					//document.getElementById('tu1').setAttribute("disabled", "disabled");
					u1=0;
					
				}
			}
		}
	}
	
	  
  }
  else
  {
	  document.cookie = 'a=a';
  }
  
	
	
	 var b = getCookie("b");
		
  if ( typeof b != 'undefined') {
	  
	  
	  if ( b == null)
	  {
		  document.cookie = 'b=b';
	  }
	  
	bb =  b.split("b");

	for (i=0; i<10 ; i++)
	{
		if (typeof bb[i] != 'undefined')
		{
			
			if (bb[i] != "")
			{
			
				if (parseInt(deal_id) == parseInt(bb[i]))
				{
					//document.getElementById('thd1').src="thumbsdownd.jpg";
					//document.getElementById('td1').setAttribute("disabled", "disabled");
					d1=0;
					
				}
			}
		}
	}
	
	  
  }
  else
  {
	  document.cookie = 'b=b';
  }
	
	
	
	   var c = getCookie("c");
		
  if ( typeof c != 'undefined') {
	  
	  
	  if ( c == null)
	  {
		  document.cookie = 'c=c';
	  }
	  
	cc =  c.split("c");

	for (i=0; i<10 ; i++)
	{
		if (typeof cc[i] != 'undefined')
		{
			
			if (cc[i] != "")
			{
			
				if (parseInt(deal_id) == parseInt(cc[i]))
				{
					//document.getElementById('thu1').src="thumbsupd.jpg";
					//document.getElementById('tu1').setAttribute("disabled", "disabled");
					e1=0;
					
				}
			}
		}
	}
	
	  
  }
  else
  {
	  document.cookie = 'c=c';
  }
	
	

}
	



	
document.getElementById('tup1').innerText= tup;


document.getElementById('tdown1').src= arr[9].split("([{").join(' ');
	var tdown = arr[9].split("([{").join(' ');
	tdown =  tdown.split(" &*( ").join('"');
	
document.getElementById('tdown1').innerText= tdown;


	//document.getElementById('link1').innerText = arr[6].split("([{").join(' ');
	
	
	var  link1 = arr[6].split("([{").join(' ');
	link1 =  link1.split(" &*( ").join('"');
	link1 = link1.split(" }]) ").join('#');
	link1 = link1.split(" )}] ").join('&');
	link1 =  link1.split("%").join("%25");
	shortlink1=link1.substring(0,80) + " ...";
	
	if (exp==0)
	{
	document.getElementById('link1').innerText= shortlink1;
	}
	else
	{
document.getElementById('link1').innerText= link1;
	}
	document.getElementById("link1").setAttribute("onclick", "location.href='" + link1 + "'");
	document.getElementById("link1").style.color = "blue";
	document.getElementById("link1").onclick = function() {
    window.open(
    //arr[6].split("([{").join(' ')
	link1
        );
        return false;
      };
	  
	  
document.getElementById('uploadname1').innerText = arr[12].split("([{").join(' ');

var uploadname = arr[12].split("([{").join(' ');
	uploadname =  uploadname.split(" &*( ").join('"');
	uploadname = uploadname.split(" }]) ").join('#');
document.getElementById('uploadname1').innerText= uploadname;

document.getElementById('ex1').innerText = arr[13].split("([{").join(' ');

var expired = arr[13].split("([{").join(' ');
	expired =  expired.split(" &*( ").join('"');
	expired = expired.split(" }]) ").join('#');
document.getElementById('ex1').innerText= expired;

}

if (typeof arr[15] != 'undefined')
	{

	document.getElementById('deal_id2').innerText = arr[15].split("([{").join(' ');
	deal_id = document.getElementById('deal_id2').innerText;
	document.getElementById('summary2').innerText = arr[16].split("([{").join(' ');
	
	var summary = arr[16].split("([{").join(' ');
	summary =  summary.split(" &*( ").join('"');
	summary = summary.split(" }]) ").join('#');
	document.getElementById('summary2').innerText= summary;
	
	document.getElementById('description2').innerText = arr[23].split("([{").join(' ');
	var description = arr[23].split("([{").join(' ');
	description =  description.split(" &*( ").join('"');
			description =  description.split("]]]]").join('#')

		description = description.split(")}]").join("&");
	description =  description.split("@@@@").join('"');
	description = description.split(" }]) ").join('#');
shortdesc2=description.substring(0,40) + " ...";
if (exp==0)
	{
	document.getElementById('description2').innerHTML= shortdesc2;
	}
	else
	{
		
	document.getElementById('description2').innerHTML= description;
	}
	document.getElementById('dealprice2').innerText= arr[17].split("([{").join(' ');
	var dealprice = arr[17].split("([{").join(' ');
	dealprice =  dealprice.split(" &*( ").join('"');
	dealprice = dealprice.split(" }]) ").join('#');
document.getElementById('dealprice2').innerText= dealprice;
	
	
		document.getElementById('maxprice2').innerText = arr[18].split("([{").join(' ');
		var maxprice = arr[18].split("([{").join(' ');
	maxprice =  maxprice.split(" &*( ").join('"');
	maxprice = maxprice.split(" }]) ").join('#');
document.getElementById('maxprice2').innerText= maxprice;


		document.getElementById('img2').src= arr[24].split("([{").join(' ');
		var img = arr[24].split("([{").join(' ');
	img =  img.split(" &*( ").join('"');
	
document.getElementById('img2').innerText= img;

if (summary)
{
//document.getElementById('tu2').disabled = false;
//document.getElementById('td2').disabled = false;
//document.getElementById('thu2').src="thumbsup.jpg";
	//document.getElementById('thd2').src="thumbsdown.jpg";
	u2=1;
	d2=1;
	e2=1;
	
	
	
	 var a = getCookie("a");
		
  if ( typeof a != 'undefined') {
	  
	  
	  if ( a == null)
	  {
		  document.cookie = 'a=a';
	  }
	  
	aa =  a.split("a");

	for (i=0; i<10 ; i++)
	{
		if (typeof aa[i] != 'undefined')
		{
			
			if (aa[i] != "")
			{
			
				if (parseInt(deal_id) == parseInt(aa[i]))
				{
					//document.getElementById('thu2').src="thumbsupd.jpg";
					//document.getElementById('tu2').setAttribute("disabled", "disabled");
					u2=0;
					
					
				}
			}
		}
	}
	
	  
  }
  else
  {
	  document.cookie = 'a=a';
  }
	
	
	 var b = getCookie("b");
		
  if ( typeof b != 'undefined') {
	  
	  
	  if ( b == null)
	  {
		  document.cookie = 'b=b';
	  }
	  
	bb =  b.split("b");

	for (i=0; i<10 ; i++)
	{
		if (typeof bb[i] != 'undefined')
		{
			
			if (bb[i] != "")
			{
			
				if (parseInt(deal_id) == parseInt(bb[i]))
				{
					//document.getElementById('thd2').src="thumbsdownd.jpg";
					//document.getElementById('td2').setAttribute("disabled", "disabled");
					d2=0;
					
				}
			}
		}
	}
	
	  
  }
  else
  {
	  document.cookie = 'b=b';
  }
	
	
	
	  var c = getCookie("c");
		
  if ( typeof c != 'undefined') {
	  
	  
	  if ( c == null)
	  {
		  document.cookie = 'c=c';
	  }
	  
	cc =  c.split("c");

	for (i=0; i<10 ; i++)
	{
		if (typeof cc[i] != 'undefined')
		{
			
			if (cc[i] != "")
			{
			
				if (parseInt(deal_id) == parseInt(cc[i]))
				{
					//document.getElementById('thu1').src="thumbsupd.jpg";
					//document.getElementById('tu1').setAttribute("disabled", "disabled");
					e2=0;
					
				}
			}
		}
	}
	
	  
  }
  else
  {
	  document.cookie = 'c=c';
  }
	
	
	
	
}

if (arr[20]=='1')
{
	vare2='1';
}



document.getElementById('tup2').src= arr[21].split("([{").join(' ');
	var tup = arr[21].split("([{").join(' ');
	tup =  tup.split(" &*( ").join('"');
	
document.getElementById('tup2').innerText= tup;


document.getElementById('tdown2').src= arr[22].split("([{").join(' ');
	var tdown = arr[22].split("([{").join(' ');
	tdown =  tdown.split(" &*( ").join('"');
	
document.getElementById('tdown2').innerText= tdown;
		
		
		
	//	document.getElementById('link2').innerText = arr[19].split(" ([{ ").join(' ');
	var	link2 = arr[19].split("([{").join(' ');
	link2 =  link2.split(" &*( ").join('"');
	link2 = link2.split(" }]) ").join('#');
	link2 = link2.split(" )}] ").join('&');
	link2 =  link2.split("%").join("%25");
	shortlink2=link2.substring(0,80) + " ...";
	
	if (exp==0)
	{
	document.getElementById('link2').innerText= shortlink2;
	}
	else
	{
document.getElementById('link2').innerText= link2;
	}
		
		document.getElementById("link2").setAttribute("onclick", "location.href='" + link2 + "'");
		document.getElementById("link2").style.color = "blue";
		  document.getElementById("link2").onclick = function() {
    window.open(
    //arr[19].split("([{").join(' ') 
	link2
        );
        return false;
      };
	  document.getElementById('uploadname2').innerText = arr[25].split("([{").join(' ');
	  var uploadname = arr[25].split("([{").join(' ');
	uploadname =  uploadname.split(" &*( ").join('"');
	uploadname = uploadname.split(" }]) ").join('#');
document.getElementById('uploadname2').innerText= uploadname;
	  
	  
	  document.getElementById('ex2').innerText = arr[26].split("([{").join(' ');
	  var expired = arr[26].split("([{").join(' ');
	expired =  expired.split(" &*( ").join('"');
	expired = expired.split(" }]) ").join('#');
document.getElementById('ex2').innerText= expired;

	  }
	  
	  
	  if (typeof arr[28] != 'undefined')
	{
	document.getElementById('deal_id3').innerText = arr[28].split("([{").join(' ');
	deal_id = document.getElementById('deal_id3').innerText;
	
	document.getElementById('summary3').innerText = arr[29].split("([{").join(' ');
	var summary = arr[29].split("([{").join(' ');
	summary =  summary.split(" &*( ").join('"');
	summary = summary.split(" }]) ").join('#');
	document.getElementById('summary3').innerText= summary;
	
	document.getElementById('description3').innerText = arr[36].split("([{").join(' ');
	var description = arr[36].split("([{").join(' ');
	description =  description.split(" &*( ").join('"');
		description = description.split(")}]").join("&");
	description =  description.split("@@@@").join('"');
		description =  description.split("]]]]").join('#')
	description = description.split(" }]) ").join('#');


	shortdesc3=description.substring(0,40) + " ...";
	
	if (exp==0)
	{
	document.getElementById('description3').innerHTML= shortdesc3;
	}
	else
	{
	document.getElementById('description3').innerHTML= description;
	}
	
	document.getElementById('dealprice3').innerText = arr[30].split("([{").join(' ');
	var dealprice = arr[30].split("([{").join(' ');
	dealprice =  dealprice.split(" &*( ").join('"');
			dealprice =  dealprice.split("]]]]").join('#');
			dealprice = dealprice.split(" }]) ").join('#');
document.getElementById('dealprice3').innerText= dealprice;
	
	
		document.getElementById('maxprice3').innerText = arr[31].split("([{").join(' ');
		var maxprice = arr[31].split("([{").join(' ');
	maxprice =  maxprice.split(" &*( ").join('"');
	maxprice = maxprice.split(" }]) ").join('#');
document.getElementById('maxprice3').innerText= maxprice;
		
		
		document.getElementById('img3').src= arr[37].split("([{").join(' ');
		var img = arr[37].split("([{").join(' ');
	img =  img.split(" &*( ").join('"');
	
document.getElementById('img3').innerText= img;

if (summary)
{
//document.getElementById('tu3').disabled = false;
	//document.getElementById('td3').disabled = false;
	//document.getElementById('thu3').src="thumbsup.jpg";
	//document.getElementById('thd3').src="thumbsdown.jpg";
	
	u3=1;
	d3=1;
	e3=1;
	
	
	
	
	
	 var a = getCookie("a");
		
  if ( typeof a != 'undefined') {
	  
	  
	  if ( a == null)
	  {
		  document.cookie = 'a=a';
	  }
	  
	aa =  a.split("a");

	for (i=0; i<10 ; i++)
	{
		if (typeof aa[i] != 'undefined')
		{
			
			if (aa[i] != "")
			{
			
				if (parseInt(deal_id) == parseInt(aa[i]))
				{
					//document.getElementById('thu3').src="thumbsupd.jpg";
					//document.getElementById('tu3').setAttribute("disabled", "disabled");
					u3=0;
					
				}
			}
		}
	}
	
	  
  }
  else
  {
	  document.cookie = 'a=a';
  }
	
	
	 var b = getCookie("b");
		
  if ( typeof b != 'undefined') {
	  
	  
	  if ( b == null)
	  {
		  document.cookie = 'b=b';
	  }
	  
	bb =  b.split("b");

	for (i=0; i<10 ; i++)
	{
		if (typeof bb[i] != 'undefined')
		{
			
			if (bb[i] != "")
			{
			
				if (parseInt(deal_id) == parseInt(bb[i]))
				{
					//document.getElementById('thd3').src="thumbsdownd.jpg";
					//document.getElementById('td3').setAttribute("disabled", "disabled");
					d3=0;
				}
			}
		}
	}
	
	  
  }
  else
  {
	  document.cookie = 'b=b';
  }
	
	
	  var c = getCookie("c");
		
  if ( typeof c != 'undefined') {
	  
	  
	  if ( c == null)
	  {
		  document.cookie = 'c=c';
	  }
	  
	cc =  c.split("c");

	for (i=0; i<10 ; i++)
	{
		if (typeof cc[i] != 'undefined')
		{
			
			if (cc[i] != "")
			{
			
				if (parseInt(deal_id) == parseInt(cc[i]))
				{
					//document.getElementById('thu1').src="thumbsupd.jpg";
					//document.getElementById('tu1').setAttribute("disabled", "disabled");
					e3=0;
					
				}
			}
		}
	}
	
	  
  }
  else
  {
	  document.cookie = 'c=c';
  }
	
	
	
}


if (arr[33]=='1')
{
	vare3='1';
}

document.getElementById('tup3').src= arr[34].split("([{").join(' ');
	var tup = arr[34].split("([{").join(' ');
	tup =  tup.split(" &*( ").join('"');
	
document.getElementById('tup3').innerText= tup;


document.getElementById('tdown3').src= arr[35].split("([{").join(' ');
	var tdown = arr[35].split("([{").join(' ');
	tdown =  tdown.split(" &*( ").join('"');
	
document.getElementById('tdown3').innerText= tdown;
		
		
	//	document.getElementById('link3').innerText = arr[32].split(" ([{ ").join(' ');
	var	link3 = arr[32].split("([{").join(' ');
	link3 =  link3.split(" &*( ").join('"');
	link3 = link3.split(" }]) ").join('#');
	link3 = link3.split(" )}] ").join('&');
	link3 =  link3.split("%").join("%25");
	
	shortlink3=link3.substring(0,80) + " ...";
	if (exp==0)
	{
		document.getElementById('link3').innerText= shortlink3;
	}
	else
	{document.getElementById('link3').innerText= link3;
	}
		
		document.getElementById("link3").setAttribute("onclick", "location.href='" + link3 + "'");
		document.getElementById("link3").style.color = "blue";
		document.getElementById("link3").onclick = function() {
    window.open(
    //arr[32].split("([{").join(' ')
    link3
    );
        return false;
      };
	  document.getElementById('uploadname3').innerText = arr[38].split("([{").join(' ');
	  var uploadname = arr[38].split("([{").join(' ');
	uploadname =  uploadname.split(" &*( ").join('"');
	uploadname = uploadname.split(" }]) ").join('#');
document.getElementById('uploadname3').innerText= uploadname;
	  
	  
	  	document.getElementById('ex3').innerText = arr[39].split("([{").join(' ');
		var expired = arr[39].split("([{").join(' ');
	expired =  expired.split(" &*( ").join('"');
	expired = expired.split(" }]) ").join('#');
document.getElementById('ex3').innerText= expired;

		}
		
		if (typeof arr[41] != 'undefined')
	{
	document.getElementById('deal_id4').innerText = arr[41].split("([{").join(' ');
	
	deal_id = document.getElementById('deal_id4').innerText;
	
	var dealprice = arr[41].split("([{").join(' ');
	dealprice =  dealprice.split(" &*( ").join('"');
	dealprice = dealprice.split(" }]) ").join('#');
document.getElementById('dealprice4').innerText= dealprice;
	
	
	document.getElementById('summary4').innerText = arr[42].split("([{").join(' ');
	var summary = arr[42].split("([{").join(' ');
	summary =  summary.split(" &*( ").join('"');
	summary = summary.split(" }]) ").join('#');
	document.getElementById('summary4').innerText= summary;
	
	document.getElementById('description4').innerText = arr[49].split("([{").join(' ');
	var description = arr[49].split("([{").join(' ');
	description =  description.split(" &*( ").join('"');
		description = description.split(")}]").join("&");
	description =  description.split("@@@@").join('"');
		description =  description.split("]]]]").join('#')
	description = description.split(" }]) ").join('#');

	shortdesc4=description.substring(0,40) + " ...";
	if (exp==0)
	{
	document.getElementById('description4').innerHTML= shortdesc4;
	}
	else
	{
		
	document.getElementById('description4').innerHTML= description;
	
	}

			
			
	//document.getElementById('dealprice4').innerText = arr[43].split("([{").join(' ');
	var dealprice = arr[43].split("([{").join(' ');
	dealprice =  dealprice.split(" &*( ").join('"');
	dealprice = dealprice.split(" }]) ").join('#');
document.getElementById('dealprice4').innerText= dealprice;


		document.getElementById('maxprice4').innerText = arr[44].split("([{").join(' ');
		var maxprice = arr[44].split("([{").join(' ');
	maxprice =  maxprice.split(" &*( ").join('"');
	maxprice = maxprice.split(" }]) ").join('#');
document.getElementById('maxprice4').innerText= maxprice;
		
		
		document.getElementById('img4').src= arr[50].split("([{").join(' ');
		var img = arr[50].split("([{").join(' ');
	img =  img.split(" &*( ").join('"');
	img = img.split(" }]) ").join('#');
document.getElementById('img4').innerText= img;

if (summary)
{
//document.getElementById('tu4').disabled = false;
//document.getElementById('td4').disabled = false;
//document.getElementById('thu4').src="thumbsup.jpg";
	//document.getElementById('thd4').src="thumbsdown.jpg";
	
	u4=1;
	d4=1;
	e4=1;
	
	 var a = getCookie("a");
		
  if ( typeof a != 'undefined') {
	  
	  
	  if ( a == null)
	  {
		  document.cookie = 'a=a';
	  }
	  
	aa =  a.split("a");

	for (i=0; i<10 ; i++)
	{
		if (typeof aa[i] != 'undefined')
		{
			
			if (aa[i] != "")
			{
			
				if (parseInt(deal_id) == parseInt(aa[i]))
				{
					//document.getElementById('thu4').src="thumbsupd.jpg";
					//document.getElementById('tu4').setAttribute("disabled", "disabled");
					u4=0;
					
				}
			}
		}
	}
	
	  
  }
  else
  {
	  document.cookie = 'a=a';
  }
	
	
	 var b = getCookie("b");
		
  if ( typeof b != 'undefined') {
	  
	  
	  if ( b == null)
	  {
		  document.cookie = 'b=b';
	  }
	  
	bb =  b.split("b");

	for (i=0; i<10 ; i++)
	{
		if (typeof bb[i] != 'undefined')
		{
			
			if (bb[i] != "")
			{
			
				if (parseInt(deal_id) == parseInt(bb[i]))
				{
					//document.getElementById('thd4').src="thumbsdownd.jpg";
					//document.getElementById('td4').setAttribute("disabled", "disabled");
					d4=0;
					
				}
			}
		}
	}
	
	  
  }
  else
  {
	  document.cookie = 'b=b';
  }
	
	
	  var c = getCookie("c");
		
  if ( typeof c != 'undefined') {
	  
	  
	  if ( c == null)
	  {
		  document.cookie = 'c=c';
	  }
	  
	cc =  c.split("c");

	for (i=0; i<10 ; i++)
	{
		if (typeof cc[i] != 'undefined')
		{
			
			if (cc[i] != "")
			{
			
				if (parseInt(deal_id) == parseInt(cc[i]))
				{
					//document.getElementById('thu1').src="thumbsupd.jpg";
					//document.getElementById('tu1').setAttribute("disabled", "disabled");
					e4=0;
					
				}
			}
		}
	}
	
	  
  }
  else
  {
	  document.cookie = 'c=c';
  }
	
	
	
}


if (arr[46]=='1')
{
	vare4='1';
}


document.getElementById('tup4').src= arr[47].split("([{").join(' ');
	var tup = arr[47].split("([{").join(' ');
	tup =  tup.split(" &*( ").join('"');
	
document.getElementById('tup4').innerText= tup;


document.getElementById('tdown4').src= arr[48].split("([{").join(' ');
	var tdown = arr[48].split("([{").join(' ');
	tdown =  tdown.split(" &*( ").join('"');
	
document.getElementById('tdown4').innerText= tdown;
		
		
		//document.getElementById('link4').innerText = arr[45].split(" ([{ ").join(' ');
	var link4 = arr[45].split("([{").join(' ');
	link4 =  link4.split(" &*( ").join('"');
	link4 = link4.split(" }]) ").join('#');
	link4 = link4.split(" )}] ").join('&');
	link4 =  link4.split("%").join("%25");
	shortlink4=link4.substring(0,80) + " ...";
	if (exp==0)
	{
		document.getElementById('link4').innerText= shortlink4;
	}
	else{
		document.getElementById('link4').innerText= link4;
	}
		
	document.getElementById("link4").setAttribute("onclick", "location.href='" + link4 + "'");
	document.getElementById("link4").style.color = "blue";
	document.getElementById("link4").onclick = function() {
    window.open(
    //arr[45].split("([{").join(' ')
	link4
        );
        return false;
      };
	document.getElementById('uploadname4').innerText = arr[51].split("([{").join(' ');
	var uploadname = arr[51].split("([{").join(' ');
	uploadname =  uploadname.split(" &*( ").join('"');
	
document.getElementById('uploadname4').innerText= uploadname;
	
	
		document.getElementById('ex4').innerText = arr[52].split("([{").join(' ');
		var expired = arr[52].split("([{").join(' ');
	expired =  expired.split(" &*( ").join('"');
	expired = expired.split(" }]) ").join('#');
document.getElementById('ex4').innerText= expired;

		}


if (u1==0) {
	  document.getElementById('tu1').disabled = true;
	  document.getElementById('thu1').src="thumbsupd.jpg";
  document.getElementById('tu1').setAttribute("disabled", "disabled");
  }else
  {
	   document.getElementById('thu1').src="thumbsup.jpg";
  document.getElementById("tu1").disabled = false;
  }
  if (u2==0)
  {
	  document.getElementById('tu2').disabled = true;
	  document.getElementById('thu2').src="thumbsupd.jpg";
  document.getElementById('tu2').setAttribute("disabled", "disabled");
  }else
  {
	  
	   document.getElementById('thu2').src="thumbsup.jpg";
  document.getElementById("tu2").disabled = false;
  }
  if (u3==0)
  {
	  document.getElementById('tu3').disabled = true;
	  document.getElementById('thu3').src="thumbsupd.jpg";
  document.getElementById('tu3').setAttribute("disabled", "disabled");
  }else
  {
	  
	   document.getElementById('thu3').src="thumbsup.jpg";
  document.getElementById("tu3").disabled = false;
  }
  if (u4==0)
  {
	  document.getElementById('tu4').disabled = true;
	  document.getElementById('thu4').src="thumbsupd.jpg";
  document.getElementById('tu4').setAttribute("disabled", "disabled");
  }else
  {
	  
	   document.getElementById('thu4').src="thumbsup.jpg";
  document.getElementById("tu4").disabled = false;
  }
  
  
  
  if (d1==0)
  {
	  document.getElementById('td1').disabled = true;
	  document.getElementById('thd1').src="thumbsdownd.jpg";
  document.getElementById('td1').setAttribute("disabled", "disabled");
  }else
  {
	   document.getElementById('thd1').src="thumbsdown.jpg";
  document.getElementById('td1').disabled = false;
  }
  if (d2==0)
  {
	   document.getElementById('td2').disabled = true;
	  document.getElementById('thd2').src="thumbsdownd.jpg";
  document.getElementById('td2').setAttribute("disabled", "disabled");
  }else
  {
	   document.getElementById('thd2').src="thumbsdown.jpg";
  document.getElementById('td2').disabled = false;
  }
  if (d3==0)
  {
	   document.getElementById('td3').disabled = true;
	  document.getElementById('thd3').src="thumbsdownd.jpg";
  document.getElementById('td3').setAttribute("disabled", "disabled");
  }else
  {
	   document.getElementById('thd3').src="thumbsdown.jpg";
  document.getElementById('td3').disabled = false;
  }
  if (d4==0)
  {
	   document.getElementById('td4').disabled = true;
	  document.getElementById('thd4').src="thumbsdownd.jpg";
  document.getElementById('td4').setAttribute("disabled", "disabled");
  }else
  {
	   document.getElementById('thd4').src="thumbsdown.jpg";
  document.getElementById('td4').disabled = false;
  }
  
  if (p==0)
  {
	  document.getElementById("prev1").src="prev_dis.png";
document.getElementById("Prev").setAttribute("disabled", "disabled");
  }
  else{
	  document.getElementById("Prev").disabled = false;
document.getElementById("prev1").src="prev.gif";
  }
 if (n==0)
  {
	  document.getElementById("next1").src="next_dis.png";
document.getElementById("Next").setAttribute("disabled", "disabled");
  }
  else{
	  document.getElementById("Next").disabled = false;
document.getElementById("next1").src="next.gif";
  }
  
if (e1==0) {
	  document.getElementById('exp1').disabled = true;
	  
  document.getElementById('exp1').setAttribute("disabled", "disabled");
  }else
  {
	   
  document.getElementById("exp1").disabled = false;
  }
  if (e2==0)
  {
	  document.getElementById('exp2').disabled = true;
	 
  document.getElementById('exp2').setAttribute("disabled", "disabled");
  }else
  {
	  
	   
  document.getElementById("exp2").disabled = false;
  }
  if (e3==0)
  {
	  document.getElementById('exp3').disabled = true;
	 
  document.getElementById('exp3').setAttribute("disabled", "disabled");
  }else
  {
	  
	
  document.getElementById("exp3").disabled = false;
  }
  if (e4==0)
  {
	  document.getElementById('exp4').disabled = true;
	 
  document.getElementById('exp4').setAttribute("disabled", "disabled");
  }else
  {
	  
	  
  document.getElementById("exp4").disabled = false;
  }
  
if (vare1=='1') {
	  
	  document.getElementById('expi1').src="expired.gif";
  
  }else
  {
	   document.getElementById('expi1').src="";
  }
  if (vare2=='1')
  {
	  
	 document.getElementById('expi2').src="expired.gif";
  }else
  {
	  
	    document.getElementById('expi2').src="";
  }
  if (vare3=='1')
  {
	  document.getElementById('expi3').src="expired.gif";
  }else
  {
	  document.getElementById('expi3').src="";
	   
  }
  if (vare4=='1')
  {
	  document.getElementById('expi4').src="expired.gif";
  }else
  {
	  
	 document.getElementById('expi4').src="";
  }
  
  
  
  
  
  
  
  
  

  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/get10.php?argument1=" + position,true);
  xmlhttp.send();

  
  
  
   
  
  
  }


function refresh() {
	
	  div= document.getElementById("current");
   div.style.visibility = "hidden"; 
	
	  div= document.getElementById("number_of_pages");
   div.style.visibility = "hidden"; 
	
	
	refresh1();
position=getCookie("position");


  document.getElementById("current").innerHTML = position;
  common();
  
  if (position < 4)
{
	document.getElementById("prev1").src="prev_dis.png";
document.getElementById("Prev").setAttribute("disabled", "disabled");
p=0;


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
	
	pageno=getCookie("pageno");
	
	  if (moddd == 0)
	   {
	   document.cookie='page='+(count/4); 
	   page = getCookie("page");
	
	   
	   //document.getElementById("number_of_pages").innerHTML = "Number of Pages are " + page;
	   document.getElementById("page_number").innerHTML = "Page " + pageno + " of " + page;
	   }
	   else
	   {
	   document.cookie='page='+Math.ceil(count/4);
		page = getCookie("page");
	
		
	   // document.getElementById("number_of_pages").innerHTML = "Number of Pages are " + page ;
		document.getElementById("page_number").innerHTML = "Page " + pageno + " of " + page;
	   }
	   
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/numberofdeals.php",true);
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

//document.getElementById("page_number").innerHTML = "Page Number is : " + pageno;
document.getElementById("page_number").innerHTML = "Page " + pageno + " of " + page;


position=getCookie("position");
document.getElementById("current").innerHTML = position; 
//document.getElementById("Prev").disabled = false;
//document.getElementById("prev1").src="prev.png";
p=1;

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
document.getElementById("prev1").src="prev.png";
p=1;
common();
document.getElementById("next1").src="next_dis.png";
document.getElementById("Next").setAttribute("disabled", "disabled");
n=0;

pageno=getCookie("pageno");
pageno=parseInt(pageno) + 1;

document.cookie = 'pageno='+pageno;
pageno = getCookie("pageno");

//document.getElementById("page_number").innerHTML = "Page Number is : " + pageno;

document.getElementById("page_number").innerHTML = "Page " + pageno + " of " + page;

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

//document.getElementById("page_number").innerHTML = "Page Number is : " + pageno;
document.getElementById("page_number").innerHTML = "Page " + pageno + " of " + page;
//document.getElementById("Next").disabled = false;
//document.getElementById("next1").src="next.png";
n=1;
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

//document.getElementById("page_number").innerHTML = "Page Number is : " + pageno;

document.getElementById("page_number").innerHTML = "Page " + pageno + " of " + page;
document.getElementById("Next").disabled = false;
document.getElementById("next1").src="next.png";
n=1;

position=getCookie("position");
document.getElementById("current").innerHTML = position; 
 common();
 document.getElementById("prev1").src="prev_dis.png";
document.getElementById("Prev").setAttribute("disabled", "disabled");
p=0;
}



 
}










function page1() {
//getcount();

count=getCookie("count");

var modd = count%4;


position=getCookie("position");






if (position <= parseInt(count)-4-parseInt(modd))
{

position = getCookie("position");
position = 0;

document.cookie = 'position=' + position ;
position = getCookie("position");
pageno=getCookie("pageno");
pageno=1;

document.cookie = 'pageno='+(pageno);
pageno = getCookie("pageno");

//document.getElementById("page_number").innerHTML = "Page Number is : " + pageno;

document.getElementById("page_number").innerHTML = "Page " + pageno + " of " + page;

position=getCookie("position");
document.getElementById("current").innerHTML = position; 
//document.getElementById("prev1").src="prev_dis.png";
//document.getElementById("Prev").setAttribute("disabled", "disabled");
p=0;

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
//document.getElementById("prev1").src="prev_dis.png";
//document.getElementById("Prev").setAttribute("disabled", "disabled");
p=0;
common();
document.getElementById("next1").src="next_dis.png";
document.getElementById("Next").setAttribute("disabled", "disabled");
n=0;
pageno=getCookie("pageno");
pageno=1;

document.cookie = 'pageno='+pageno;
pageno = getCookie("pageno");

//document.getElementById("page_number").innerHTML = "Page Number is : " + pageno;

document.getElementById("page_number").innerHTML = "Page " + pageno + " of " + page;
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






function thumbsup1()
{
	
	deal_id = document.getElementById('deal_id1').innerText;
	
	

	
				if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function() {
  
  
		
		    if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
   
  
 //var temp=this.responseText;

 
 
 
 
 document.getElementById('thu1').src="thumbsupd.jpg";
					document.getElementById('tu1').setAttribute("disabled", "disabled");
					u1=0;
					
					document.getElementById('tup1').innerText = this.responseText;
					
 //refresh();

		    

			}
	
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/plus2.php?deal_id=" + parseInt(deal_id),true);
  xmlhttp.send();
  
  
  
 
  
  
  
  afunc();



  
 
  
  


	
}

function thumbsup2()
{
	
	deal_id = document.getElementById('deal_id2').innerText;

	
				if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function() {
  
  
		    if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
   
  
// var temp=this.responseText;

		   document.getElementById('thu2').src="thumbsupd.jpg";
					document.getElementById('tu2').setAttribute("disabled", "disabled");
					u2=0;
					
					document.getElementById('tup2').innerText = this.responseText;
					
 //refresh();

			}
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/plus2.php?deal_id=" + parseInt(deal_id),true);
  xmlhttp.send();
  
  
  
    afunc();
  



	
}
function thumbsup3()
{
	
	deal_id = document.getElementById('deal_id3').innerText;

	
				if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function() {
  
  
		
		  
		    if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
   
  
// var temp=this.responseText;

		    document.getElementById('thu3').src="thumbsupd.jpg";
					document.getElementById('tu3').setAttribute("disabled", "disabled");
					u3=0;
					
					document.getElementById('tup3').innerText = this.responseText;
					
 //refresh();

			}
	
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/plus2.php?deal_id=" + parseInt(deal_id),true);
  xmlhttp.send();
  
 
  
   afunc();
  



	
}
function thumbsup4()
{
	
	deal_id = document.getElementById('deal_id4').innerText;

	
				if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function() {
  
  
		    if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
   
  
// var temp=this.responseText;

		    document.getElementById('thu4').src="thumbsupd.jpg";
					document.getElementById('tu4').setAttribute("disabled", "disabled");
					u4=0;
					
					document.getElementById('tup4').innerText = this.responseText;
					
 //refresh();

			}
	
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/plus2.php?deal_id=" + parseInt(deal_id),true);
  xmlhttp.send();
  
   
  
  
    afunc();
  


  
  
  
  


	
}

function thumbsdown1()
{
	
	deal_id = document.getElementById('deal_id1').innerText;

	
				if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function() {
  
  
		
		
		    if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
   
  
 //var temp=this.responseText;

		     document.getElementById('thd1').src="thumbsdownd.jpg";
					document.getElementById('td1').setAttribute("disabled", "disabled");
					d1=0;
					
					document.getElementById('tdown1').innerText = this.responseText;
					
 //refresh();

			}
	
	
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/minus2.php?deal_id=" + parseInt(deal_id),true);
  xmlhttp.send();
  
  
  
  
   
  
  bfunc();
  
  

 
  


	
}

function thumbsdown2()
{
	
	deal_id = document.getElementById('deal_id2').innerText;

	
				if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function() {
  
  
		
		    if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
   
  
 //var temp=this.responseText;

		     document.getElementById('thd2').src="thumbsdownd.jpg";
					document.getElementById('td2').setAttribute("disabled", "disabled");
					d2=0;
					
					document.getElementById('tdown2').innerText = this.responseText;
					
 //refresh();

			}
	
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/minus2.php?deal_id=" + parseInt(deal_id),true);
  xmlhttp.send();
  
  
  
  
     bfunc();
  
  

  


	
}
function thumbsdown3()
{
	
	deal_id = document.getElementById('deal_id3').innerText;

	
				if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function() {
  
  
		

		    if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
   
  
 //var temp=this.responseText;

		     document.getElementById('thd3').src="thumbsdownd.jpg";
					document.getElementById('td3').setAttribute("disabled", "disabled");
					d3=0;
					
					document.getElementById('tdown3').innerText = this.responseText;
					
 //refresh();

			}
	
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/minus2.php?deal_id=" + parseInt(deal_id),true);
  xmlhttp.send();
  
  
    bfunc();
  


  
  
  


	
}
function thumbsdown4()
{
	
	deal_id = document.getElementById('deal_id4').innerText;

	
				if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function() {
  
  
		    if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
   
  
 //var temp=this.responseText;

		     document.getElementById('thd4').src="thumbsdownd.jpg";
					document.getElementById('td4').setAttribute("disabled", "disabled");
					d4=0;
					
					document.getElementById('tdown4').innerText = this.responseText;
					
 //refresh();

			}
		


	
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/minus2.php?deal_id=" + parseInt(deal_id),true);
  xmlhttp.send();
  
  
  
  
   bfunc();
  


  
  
  

  
  
  
  


	
}

function expired1()
{
	deal_id = document.getElementById('deal_id1').innerText;
	
	

	
				if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function() {
  
  
		
		    if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
   
  
 //var temp=this.responseText;

 
 
 
 
 //document.getElementById('exp1').src="thumbsupd.jpg";
					document.getElementById('exp1').setAttribute("disabled", "disabled");
					e1=0;
					
					document.getElementById('ex1').innerText = this.responseText;
					
 //refresh();

		    

			}
	
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/expired.php?deal_id=" + parseInt(deal_id),true);
  xmlhttp.send();
  
  
  
 
  
  
  
  cfunc();
}

function expired2()
{
	deal_id = document.getElementById('deal_id2').innerText;
	
	

	
				if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function() {
  
  
		
		    if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
   
  
 //var temp=this.responseText;

 
 
 
 
 //document.getElementById('exp1').src="thumbsupd.jpg";
					document.getElementById('exp2').setAttribute("disabled", "disabled");
					e2=0;
					
					document.getElementById('ex2').innerText = this.responseText;
					
 //refresh();

		    

			}
	
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/expired.php?deal_id=" + parseInt(deal_id),true);
  xmlhttp.send();
  
  
  
 
  
  
  
  cfunc();
}

function expired3()
{
	deal_id = document.getElementById('deal_id3').innerText;
	
	

	
				if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function() {
  
  
		
		    if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
   
  
 //var temp=this.responseText;

 
 
 
 
 //document.getElementById('exp1').src="thumbsupd.jpg";
					document.getElementById('exp3').setAttribute("disabled", "disabled");
					e3=0;
					
					document.getElementById('ex3').innerText = this.responseText;
					
 //refresh();

		    

			}
	
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/expired.php?deal_id=" + parseInt(deal_id),true);
  xmlhttp.send();
  
  
  
 
  
  
  
  cfunc();
}

function expired4()
{
	deal_id = document.getElementById('deal_id4').innerText;
	
	

	
				if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange=function() {
  
  
		
		    if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
   
  
 //var temp=this.responseText;

 
 
 
 
 //document.getElementById('exp1').src="thumbsupd.jpg";
					document.getElementById('exp4').setAttribute("disabled", "disabled");
					e4=0;
					
					document.getElementById('ex4').innerText = this.responseText;
					
 //refresh();

		    

			}
	
	
	
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/expired.php?deal_id=" + parseInt(deal_id),true);
  xmlhttp.send();
  
  
  
 
  
  
  
  cfunc();
}