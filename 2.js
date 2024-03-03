let user = document.getElementById('user')
let email = document.getElementById('email')
let password = document.getElementById('password')
let btn = document.getElementById('btn')

btn.addEventListener("click", function(){
        
    if (email.value.trim().length == 0) (
        alert("Please enter your email")
    )

    else if (password.value.trim().length < 8) (
        alert("Password must has 8 or more characters")
    )
    else{
        if(localStorage.users) {
            let users = JSON.parse(localStorage.users)
            users.push({
                email: email.value.trim(),
                password: password.value.trim()
            })
            localStorage.setItem("users", JSON.stringify(users))
        } else {
            localStorage.setItem("users",
            JSON.stringify(
            [
                {
                  email: email.value.trim(),
                  password: password.value.trim()
                }
            ]));
        }
    }
    
    
})

