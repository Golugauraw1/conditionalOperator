//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let user_name="golu1_123";
let user_pass="12345678";

let enter_name="golu1_123";
let enter_pass="123456";

if(user_name==enter_name)
{
  if (user_pass==enter_pass)
  {
    console.log("logged in");
  }
  else{
    console.log("Wrong password");
  }
}else{
  console.log("Wrong user name");
}