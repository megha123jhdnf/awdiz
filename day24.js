  //native javascript
//   input ko link kiya tha js me
function register(event) {
    event.preventDefault();

    var name = document.getElementById("userName").value;
    console.log(name, "- name")

    var number = document.getElementById("userNumber").value;
    console.log(number, "- number")

    var email = document.getElementById("userEmail").value;
    console.log(email, "-email");

    var password = document.getElementById("userPassword").value;
    console.log(password, "-password")

    var address= document.getElementById("useraddress").value;
    console.log(address, "-useraddress")

    const userdata = {
      userName : name,
      userNumber : number,
      userEmail : email,
      userPassword : password,
      useraddress : address
    }
    
    localStorage.setItem("userlist",JSON.stringify(userdata))

    document.getElementById("userName").value = ""; 
    document.getElementById("userNumber").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("userPassword").value = "";
    document.getElementById("useraddress").value = "";

    alert("Resgitered")
}

function getdata(){
  var dataformLS = JSON.parse(localStorage.getItem("userlist"));
  console.log(dataformLS)
}

// var dataformLS = JSON.parse(localStorage.getItem(""))


