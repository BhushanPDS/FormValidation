var row=1;
var reg=document.getElementById("reg");
reg.addEventListener("click",validation,detail);
function validation()
    {
            var user = document.getElementById('user').value;
            var pwd = document.getElementById('pass').value;
            var comp= document.getElementById('compass').value;
            var mob= document.getElementById('mobile').value;
            var ema= document.getElementById('email').value;
            var acard= document.getElementById('card').value;
            
            
            if(user == "")
            {
                document.getElementById('usename').innerHTML="please fill the username";
                return false;
            }
            else {
                document.getElementById('usename').innerHTML="";
            } 
            
           
            if((user.length <= 2) || (user.length > 20))
            {
                document.getElementById('usename').innerHTML="user length must be between 2 to 20";
                return false;
            }
            else {
                document.getElementById('usename').innerHTML="";
            } 
            if(!isNaN(user))
            {
                document.getElementById('usename').innerHTML="only character are allowed";
                return false;
            }
            else {
                document.getElementById('usename').innerHTML="";
            } 
            if(pwd == "")
            {
                document.getElementById('password').innerHTML="please fill the password field";
                return false;
            }
            else {
                document.getElementById('password').innerHTML="";
            } 
            if((pwd.length <= 8) || (pwd.length > 20))
            {
                document.getElementById('password').innerHTML="length must be between 8 to 20";
                return false;
            }
            else {
                document.getElementById('password').innerHTML="";
            } 
            if(comp == "")
            {
                document.getElementById('Confirmpassword').innerHTML="please fill the confirm password";
                return false;
            }
            else {
                document.getElementById('Confirmpassword').innerHTML="";
            } 
            if(pwd!=comp)
            {
                document.getElementById('Confirmpassword').innerHTML="password and confirm password are not match";
                return false;
            }
            else {
                document.getElementById('Confirmpassword').innerHTML="";
            } 
            
            if(mob == "")
            {
                document.getElementById('MobileNumber').innerHTML="please fill the mobile ";
                return false;
            }
            else {
                document.getElementById('MobileNumber').innerHTML="";
            } 
            if(isNaN(mob))
            {
                document.getElementById('MobileNumber').innerHTML="only number are allowed";
                return false;
            }
            else {
                document.getElementById('MobileNumber').innerHTML="";
            } 
            if((mob.length < 10) || (mob.length > 10))
            {
                document.getElementById('MobileNumber').innerHTML="please provide 10 digit  ";
                return false;
            }
            else {
                document.getElementById('MobileNumber').innerHTML="";
            } 
            if(ema == "")
            {
                document.getElementById('emails').innerHTML="please fill the email";
                return false;
            }
            else {
                document.getElementById('emails').innerHTML="";
            }  
            if(ema.indexOf('@') <= 0)
            {
                document.getElementById('emails').innerHTML="invalid position of @";
                return false;
            }
    
            else {
                document.getElementById('emails').innerHTML="";
            }
          
            if((acard.length < 12) || (acard.length > 12))
            {
                document.getElementById('adharcard').innerHTML="please fill 12 digit number";
                return false;
            }
            else {
                document.getElementById('adharcard').innerHTML="";
            } 
            if(isNaN(acard))
            {
                document.getElementById('adharcard').innerHTML="only number are allowed";
                return false;
            }
            else {
                document.getElementById('adharcard').innerHTML="";
            } 


    }    
    
    
    function detail(e)
    {
        e.preventDefault();
       var user = document.getElementById("user").value;
       var pass = document.getElementById("pass").value;
       var compass= document.getElementById("compass").value;   
       var mobile= document.getElementById("mobile").value;
        var email= document.getElementById("email").value;
        var card= document.getElementById("card").value;
        console.log("user",user);
      
       var display=document.getElementById("display");
       var newRow=display.insertRow(row);
       
       var cell1=newRow.insertCell(0);
       var cell2=newRow.insertCell(1);
       var cell3=newRow.insertCell(2);
       var cell4=newRow.insertCell(3);
       var cell5=newRow.insertCell(4);
       var cell6=newRow.insertCell(5);
      
       
       cell1.innerHTML=user;
       cell2.innerHTML=pass;
       cell3.innerHTML=compass;
       cell4.innerHTML=mobile;
       cell5.innerHTML=email;
       cell6.innerHTML=card;
       


       
       row++;
       
    }







    function myFunction() {
        var pass= document.getElementById("pass");
        var rpass= document.getElementById("compass");
    
        if (pass.type === "password") 
            {
              pass.type = "text";
            } 
        else 
            {
              pass.type = "password";
            }
        
        if (rpass.type === "password") 
            {
              rpass.type = "text";
            } 
        else 
            {
              rpass.type = "password";
            }
        }