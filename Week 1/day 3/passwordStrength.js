function checkStrength(password) {
    if (password.length > 15)
        return "Strong"
    else if (password.length >= 8)
        return "Moderate"

    return "Weak"

}


// alert("fhhhh")
// prompt()


console.log(checkStrength("Python and javascript"))