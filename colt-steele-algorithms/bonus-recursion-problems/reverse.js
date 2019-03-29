// write a function called reverse which accepts a string and returns a new string in reverse

function reverse(string){
    console.log(string.split("").reverse().join(""))
}

reverse("hi there")