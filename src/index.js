import cipher from './cipher.js';
    
document.getElementById("text1").addEventListener("keyup",
    function (){
        let mayus = document.getElementById("text1").value.toUpperCase();
        document.getElementById("text1").value = mayus;
    }
);

document.getElementById("button1").addEventListener("click",
    function (){
        document.getElementById("page1").style.display="block";
        document.getElementById("page2").style.display="none";
    }
);
document.getElementById("button2").addEventListener("click",
    function (){
        document.getElementById("page1").style.display="none";
        document.getElementById("page2").style.display="block";
    }
);
document.getElementById("button3").addEventListener("click",
    function (){
        document.getElementById("page1").style.display="block";
        document.getElementById("page2").style.display="none";
    }
);
document.getElementById("button4").addEventListener("click",
    function (){
        document.getElementById("page1").style.display="none";
        document.getElementById("page2").style.display="block";
    }
);

document.getElementById("cifBttn").addEventListener("click",
    function (){
    let message1 = document.getElementById("text1").value;
    let offset1 = parseInt(document.getElementById("num1").value);
    cipher.encode(offset1,message1);
    document.getElementById("text2").value=cipher.encode(offset1,message1);
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="block";
    }
);

document.getElementById("text2").addEventListener("keyup",
    function (){
        let mayus = document.getElementById("text2").value.toUpperCase();
        document.getElementById("text2").value = mayus;
    }
);

document.getElementById("descifBttn").addEventListener("click",
function (){
    let message2 = document.getElementById("text2").value.toUpperCase();
    let offset2 = parseInt(document.getElementById("num2").value);
    cipher.decode(offset2,message2);
    document.getElementById("text1").value=cipher.decode(offset2,message2);
    document.getElementById("page1").style.display="block";
    document.getElementById("page2").style.display="none";
    document.getElementById("text1")="";
    }
);