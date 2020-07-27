



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
      document.getElementById("txtHint").innerHTML=this.responseText;
    str = this.responseText;
	arr=str.split(" ");
	
	
	
		
	document.getElementById('deal_id1').innerText="";
	document.getElementById('summary1').innerText="";
	document.getElementById('dealprice1').innerText="";
	document.getElementById('maxprice1').innerText="";
	document.getElementById('link1').innerText="";
	
	document.getElementById('deal_id2').innerText="";
	document.getElementById('summary2').innerText="";
	document.getElementById('dealprice2').innerText="";
		document.getElementById('maxprice2').innerText="";
		document.getElementById('link2').innerText="";
		
	document.getElementById('deal_id3').innerText="";
	document.getElementById('summary3').innerText="";
	document.getElementById('dealprice3').innerText="";
		document.getElementById('maxprice3').innerText="";
		document.getElementById('link3').innerText="";
		
		
	document.getElementById('deal_id4').innerText="";
	document.getElementById('summary4').innerText="";
	document.getElementById('dealprice4').innerText="";
		document.getElementById('maxprice4').innerText="";
		document.getElementById('link4').innerText="";
	
	
	
	
	
	document.getElementById('deal_id1').innerText = arr[2].split("([{").join(' ');
	document.getElementById('summary1').innerText = arr[3].split("([{").join(' ');
	document.getElementById('dealprice1').innerText = arr[4].split("([{").join(' ');
	document.getElementById('maxprice1').innerText= arr[5].split("([{").join(' ');
	document.getElementById('link1').innerText = arr[6].split("([{").join(' ');
	
	document.getElementById("link1").setAttribute("onclick", "location.href='" + arr[6].split("([{").join(' ') + "'");
	document.getElementById("link1").style.color = "blue";
	document.getElementById("link1").onclick = function() {
    window.open(
    arr[6].split("([{").join(' ')
        );
        return false;
      };

	document.getElementById('deal_id2').innerText = arr[8].split("([{").join(' ');
	document.getElementById('summary2').innerText = arr[9].split("([{").join(' ');
	document.getElementById('dealprice2').innerText= arr[10].split("([{").join(' ');
		document.getElementById('maxprice2').innerText = arr[11].split("([{").join(' ');
		document.getElementById('link2').innerText = arr[12].split("([{").join(' ');
		document.getElementById("link2").setAttribute("onclick", "location.href='" + arr[12].split("([{").join(' ') + "'");
		document.getElementById("link2").style.color = "blue";
		  document.getElementById("link2").onclick = function() {
    window.open(
    arr[12].split("([{").join(' ') 
        );
        return false;
      };
	  
	document.getElementById('deal_id3').innerText = arr[14].split("([{").join(' ');
	document.getElementById('summary3').innerText = arr[15].split("([{").join(' ');
	document.getElementById('dealprice3').innerText = arr[16].split("([{").join(' ');
		document.getElementById('maxprice3').innerText = arr[17].split("([{").join(' ');
		document.getElementById('link3').innerText = arr[18].split("([{").join(' ');
		document.getElementById("link3").setAttribute("onclick", "location.href='" + arr[18].split("([{").join(' ') + "'");
		document.getElementById("link3").style.color = "blue";
		document.getElementById("link3").onclick = function() {
    window.open(
    arr[18].split("([{").join(' ')
        );
        return false;
      };
	  
		
	document.getElementById('deal_id4').innerText = arr[20].split("([{").join(' ');
	document.getElementById('summary4').innerText = arr[21].split("([{").join(' ');
	document.getElementById('dealprice4').innerText = arr[22].split("([{").join(' ');
		document.getElementById('maxprice4').innerText = arr[23].split("([{").join(' ');
		document.getElementById('link4').innerText = arr[24].split("([{").join(' ');
	document.getElementById("link4").setAttribute("onclick", "location.href='" + arr[24].split("([{").join(' ') + "'");
	document.getElementById("link4").style.color = "blue";
	document.getElementById("link4").onclick = function() {
    window.open(
    arr[24].split("([{").join(' ')
        );
        return false;
      };
	
  }
  xmlhttp.open("GET","http://atanupal.gearhostpreview.com/get7.php?argument1=" + position,true);
  xmlhttp.send();
}


function refresh() {
	
	
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






function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    
     document.getElementById("demo").innerHTML = this.responseText;
    
  };
  
  
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}








