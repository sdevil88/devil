//condition
let name = prompt("enter your name");
let email = prompt("enter your email");
let password = prompt("enter new password");
let cpassword = prompt("re-enter your password");


if( name == "" || name == null)
{
    alert("please enter your name first ");
}
else{
    if(!(password === cpassword))
    {
        alert("password not matched")
    }
    else
    {
       let num = prompt(" do you have token number?");
       if(num= true)
       {
      let token = prompt("enter token number");

        if(token === "abcd")
        {
            alert("logged in");

          let details =  document.write("thank you : "+ name + " <br>for login" +"<br>"+"your email is : "+email+ "<br> your password is : "+password + "<br> dont share your password anyone else ");


        }
        else{
            alert("login failed  ");
        }


       }
       else{
        alert("sorry u cant login ")
       }
    }
}
