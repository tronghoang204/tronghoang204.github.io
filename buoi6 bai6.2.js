function tong(){
    var x = document.getElementById("n1").value;
    var y = document.getElementById("n2").value;
    var a = parseInt(x);
    var b = parseInt(y);
    var z = a + b;
    var kq = document.getElementById("n3");
    n3.value = z;
}
function tru(){
    var x = document.getElementById("n4").value;
    var y = document.getElementById("n5").value;
    var a = parseInt(x);
    var b = parseInt(y);
    var z = a - b;
    var kq = document.getElementById("n6");
    n6.value = z;
}
function nhan(){
    var x = document.getElementById("n7").value;
    var y = document.getElementById("n8").value;
    var a = parseInt(x);
    var b = parseInt(y);
    var z = a * b;
    var kq = document.getElementById("n9");
    n9.value = z;
}
function chia(){
    var x=document.getElementById("n10").value;
    var y=document.getElementById("n11").value;
    var a=parseFloat(x);
    var b=parseFloat(y);
    if(b==0){
        var kq= document.getElementById("n12");
        n12.value = "error";
    }else{
    var z=a/b;
    var kq = document.getElementById("n12");
    n12.value = z;
    }
}
function phepcong(){
    var x=document.getElementById("n1").value;
    var y=document.getElementById("n2").value;
    document.getElementById("n13").innerHTML = x;
    document.getElementById("n14").innerHTML = y;
    var a=parseInt(x);
    var b=parseInt(y);
    document.getElementById("kq1").innerHTML = a+b;
    document.getElementById("n131").innerText = "+";
    document.getElementById("n141").innerText = "=";
    document.getElementById("bd221").style.color = "red";
    document.getElementById("bd222").style.color = "black";
    document.getElementById("bd223").style.color = "black";
    document.getElementById("bd224").style.color = "black";
}
function pheptru(){
    var x=document.getElementById("n4").value;
    var y=document.getElementById("n5").value;
    document.getElementById("n15").innerHTML = x;
    document.getElementById("n16").innerHTML = y;
    var a=parseInt(x);
    var b=parseInt(y);
    document.getElementById("kq2").innerHTML = a-b;
    document.getElementById("n151").innerText = "-";
    document.getElementById("n161").innerText = "=";
    document.getElementById("bd222").style.color = "red";
    document.getElementById("bd221").style.color = "black";
    document.getElementById("bd223").style.color = "black";
    document.getElementById("bd224").style.color = "black";

}
function phepnhan(){
    var x=document.getElementById("n7").value;
    var y=document.getElementById("n8").value;
    document.getElementById("n17").innerHTML = x;
    document.getElementById("n18").innerHTML = y;
    var a=parseInt(x);
    var b=parseInt(y);
    document.getElementById("kq3").innerHTML = a*b;
    document.getElementById("n171").innerText = "*";
    document.getElementById("n181").innerText = "=";
    document.getElementById("bd223").style.color = "red";
    document.getElementById("bd221").style.color = "black";
    document.getElementById("bd222").style.color = "black";
    document.getElementById("bd227").style.color = "black";

}
function phepchia(){
    var x=document.getElementById("n10").value;
    var y=document.getElementById("n11").value;
    document.getElementById("n19").innerHTML = x;
    document.getElementById("n20").innerHTML = y;
    var a=parseFloat(x);
    var b=parseFloat(y);
    if(b==0){
        document.getElementById("kq4").innerHTML = "Error";
    }else{
        document.getElementById("kq4").innerHTML = a/b;
    }
    document.getElementById("n191").innerText = "/";
    document.getElementById("n201").innerText = "=";
    document.getElementById("bd224").style.color = "red";
    document.getElementById("bd221").style.color = "black";
    document.getElementById("bd222").style.color = "black";
    document.getElementById("bd223").style.color = "black";

}