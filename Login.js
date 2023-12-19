const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const Username = form.Username.value
    const Password = form.Password.value

    const authenticated = authentication(Username,Password)

    if(authenticated){
        window.location.href = "Logout.html"
    }
})

//function for checking username and password

function authentication(Username,Password){
   
    if(Username === "admin" && Password === "password")
    {
        return true
    }else{
        return false
    }

}
