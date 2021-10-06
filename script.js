function compute()
{
   var erry ="N"; 
   var prin = document.getElementById("principal").value;
   var yr =  document.getElementById("years").value;
   var interest = slider.value;
   var intamt = (prin*yr*interest)/100;
   var totyears=Number(yr)+2021;
   var total=Number(prin)+Number(intamt);
if (prin < 1  || yr < 1) {
 alert("principle amount or year cannot be zero or negative");
erry="Y"; 
document.getElementById("principal").value="";
 document.getElementById("years").value="";
var nout1 = document.getElementById("narsta1");
    nout1.innerHTML=" ";
var noutv1 = document.getElementById("narval1");
    noutv1.innerHTML="     ";
var nout2 = document.getElementById("narsta2");
    nout2.innerHTML=" ";
var noutv2 = document.getElementById("narval2");
    noutv2.innerHTML="     ";
var nout3 = document.getElementById("narsta3");
    nout3.innerHTML=" ";
var noutv3 = document.getElementById("narval3");
    noutv3.innerHTML="     ";

var nout4 = document.getElementById("narsta4");
    nout4.innerHTML=" ";
var noutv4 = document.getElementById("narval4");
    noutv4.innerHTML="     ";


//return;
}
if  (erry==="N")
{ 
   var nar = `&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;If you deposit ${prin} .<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;at an interest rate of ${interest}% . <br/>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;you will receive an amount of ${total}. <br/>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;in the year ${totyears}`;         
   var narsta1="&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;If you deposit";  
   var narval1=String(prin);
 var narsta2="&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;at an interest rate of";  
   var narval2=String(interest);

var narsta3="&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;you will receive an amount of";  
   var narval3=String(total);

var narsta4="&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;in the year";  
   var narval4=String(totyears);

    //alert(narval1);
   var nout1 = document.getElementById("narsta1");
    nout1.innerHTML=narsta1;
var noutv1 = document.getElementById("narval1");
     
    noutv1.innerHTML=narval1+",<br/>";

var nout2 = document.getElementById("narsta2");
    nout2.innerHTML=narsta2;
var noutv2 = document.getElementById("narval2");
     
    noutv2.innerHTML=narval2+"%.<br/>";

var nout3 = document.getElementById("narsta3");
    nout3.innerHTML=narsta3;
var noutv3 = document.getElementById("narval3");
     
    noutv3.innerHTML=narval3+",<br/>";

var nout4 = document.getElementById("narsta4");
    nout4.innerHTML=narsta4;
var noutv4 = document.getElementById("narval4");
     
    noutv4.innerHTML=narval4+".<br/>";
    //alert(narsta1);
}
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value+"%";
//alert("vv");
slider.oninput = function() {
  output.innerHTML = this.value+"%";
//alert("vv");





}
slider.addEventListener("mousemove",function(){
var val=slider.value*5;
slider.style.background='linear-gradient(90deg, rgb(29,163,224)'+ val + '% , rgb(214, 214, 214)'+ val+ '%)';
})
        