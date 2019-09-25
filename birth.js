
/*
function calculate_age(x) { 
    var a = Date.now() - x.getTime();
    var b = new Date(a); 
  
    return Math.abs(b.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1985, 31, 1)));

console.log(calculate_age(new Date(1989, 1, 1)));

*/

/*
function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();


    return age;
}


alert(getAge("1978"));

*/
function MyFunction() {
    var  first = document.getElementById("firstname").value;
   		 second = document.getElementById("lastname").value;
   		 age = document.getElementById("age").value;
   		 about= document.getElementById("about").value;

    document.getElementById("info1").innerHTML = first;
    document.getElementById("info2").innerHTML = second; 
    document.getElementById("info3").innerHTML =age;
    document.getElementById("info4").innerHTML =  about;  
}