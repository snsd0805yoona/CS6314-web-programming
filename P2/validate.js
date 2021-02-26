window.onload = function(){

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input element 
	// they are initially empty and hidden

    var span1 = document.createElement("span");
	span1.style.display = "none"; //hide the span element
	var email = document.getElementById("email");
    var form = document.getElementById("myform");

    email.parentNode.appendChild(span1);


    email.onfocus = function(){
        span1.innerText="Please enter a valid email address.";
        span1.style.display="block";
    }

    email.onblur = function(){
        if(email.value==""){
            span1.style.display="none";
        }else{
            var emailRule = /\S+@\S+\.\S+$/;
            if(emailRule.test(email.value)){
                
            }else{
                span1.innerText ="Email invalid! Please enter a valid email address. abc";
                email.style.display="inline";
                email.classList="error";
            }
        }

    }
    var span2 = document.createElement("span");
	span2.style.display = "none"; //hide the span element
	var pwd = document.getElementById("pwd");
    pwd.parentNode.appendChild(span2);


    pwd.onfocus = function(){
        span2.innerText="Please enter a valid password, the password field should contain at least six characters..";
        span2.style.display="inline";
    }

    pwd.onblur = function(){
        if(pwd.value==""){
            span2.style.display="none";
        }else{
            if(pwd.value.length >=6){
                span2.innerHTML = "OK";
                span2.style.display="inline";
            }else{
                span2.innerText ="Password invalid! Please enter a valid password.";
                pwd.style.display="inline";
                pwd.classList="error";
            }
        }

    }

    var span3 = document.createElement("span");
	span3.style.display = "none"; //hide the span element
	var confirm = document.getElementById("confirm");
    confirm.parentNode.appendChild(span3);


    confirm.onfocus = function(){
        span3.innerText="Password and confirm password fields should match.";
        span3.style.display="inline";
    }

    confirm.onblur = function(){
        var userPwd = document.getElementById("pwd").value;
        var confirmPwd = document.getElementById("confirm").value;
        if(confirm.value==""){
            span3.style.display="none";
        }else{
            if(confirmPwd==userPwd){
                span3.innerHTML = "OK";
                span3.style.display="inline";
            }else{
                span3.innerText ="Password and confirm password fields are not matching!";
                confirm.style.display="inline";
                confirm.classList="error";
            }
        }

    }
	function init(){
        var submit=document.getElementById("btn");
        var validate=function(){
        var userPwd = document.getElementById("pwd").value;
        var confirmPwd = document.getElementById("confirm").value;
		var emailRule = /\S+@\S+\.\S+$/;
        var emailE=false;
        var pwdE=false;
        var matchpwd=false;
        if(emailRule.test(email.value)!= true){
            span1.innerText ="Email invalid! Please enter a valid email address. abc";
            email.style.display="inline";
            email.classList="error";
            emailE=true;
        }
        if(pwd.value.length<6){
            span2.innerText ="Password invalid! Please enter a valid password.";
            pwd.style.display="inline";
            pwd.classList="error";
            pwdE=true
        }
		if(confirmPwd!=userPwd){
			span3.innerText ="Password and confirm password fields are not matching!";
            confirm.style.display="inline";
            confirm.classList="error";
            matchpwd=true;
		}
		if (!document.getElementById("notrobot").checked){
			alert("Please check 'I am not a robot'.");
			return;
		}
        }
        submit.addEventListener("submit", validate){
            if(emailE==true||pwdE==true||matchpwd==true){
                
            }
        }
    }
    


	function validate(){
        
        form.addEventListener("submit", function(validate)){
        
        }
        
		document.getElementById("myForm").submit();
	}
    
    


}