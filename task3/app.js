

let local=localStorage;
loginstorage=(name,password,email)=>{
    var name=document.getElementById("floatingInput").value;
   var password=document.getElementById("floatingPassword").value;
   var email=document.getElementById("floatingEmail").value;
   
   let data={
    "userName":name,
    "password":password,
    "email":email
   };
  
   local.setItem("userDetails",JSON.stringify(data));
}