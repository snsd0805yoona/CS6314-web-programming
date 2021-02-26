window.onload = function(){

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input element 
	// they are initially empty and hidden
    var span1 = document.createElement("span");
	span1.style.display = "none"; //hide the span element
	var email = document.getElementById("email");
    var form = document.getElementById("myform");
    var emailE=false;
    var pwdE=false;
    var matchE=false;
    var userPwd = document.getElementById("pwd").value;
    var confirmPwd = document.getElementById("confirm").value;
    var eMail= document.getElementById("email").value;
    email.parentNode.appendChild(span1);


    email.onfocus = function(){
        span1.innerText="Please enter a valid email address.";
        span1.style.display="block";
    }

    email.onblur = function(){
        span1.style.display="none";
    }
    var span2 = document.createElement("span");
	span2.style.display = "none"; //hide the span element
	var pwd = document.getElementById("pwd");
    pwd.parentNode.appendChild(span2);


    pwd.onfocus = function(){
        span2.innerText="Please enter a valid password, the password field should contain at least six characters..";
        span2.style.display="block";
    }

    pwd.onblur = function(){
        span2.style.display="none";
    }

    var span3 = document.createElement("span");
	span3.style.display = "none"; //hide the span element
	var confirm = document.getElementById("confirm");
    confirm.parentNode.appendChild(span3);


    confirm.onfocus = function(){
        span3.innerText="Password and confirm password fields should match.";
        span3.style.display="block";
    }

    confirm.onblur = function(){
        span3.style.display="none";
    }
    document.getElementById("Submit").onclick=validate(); 
    function validate(){
        var emailRule = /\S+@\S+\.\S+$/;
        if(emailRule.test(email.value)!=true){
            span1.innerText ="Email invalid! Please enter a valid email address.";
            email.style.display="inline";
            email.className="error";
            emailE=true;
        }
        if(pwd.value.length <6){
            span2.innerText ="Password invalid! Please enter a valid password.";
            pwd.style.display="inline";
            pwd.className="error";
            pwdE=true;
        }
        if(confirmPwd!=userPwd||confirmPwd==""){
            span3.innerText ="Password and confirm password fields are not matching!";
            confirm.style.display="inline";
            confirm.className="error";
            matchE=true;
        }
        if(emailE==false){
            email.className="OK";
        }
        if(pwdE==false){
            pwd.className="OK";
        }
        if(matchE==false){
            confirm.className="OK";
        }
    }
    
}
