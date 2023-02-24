function validate() {
    const inputval = document.getElementById("tel").value;


    let Airtel = ["0802", "0808", "0812", "0701", "0708", "0901", "0902", "0907"];
    let MTN = ["0803", "0806", "0814", "0810", "0813", "0816", "0703", "0706", "0903", "0906"];
    let Glo = ["0805", "0807", "0811", "0815", "0705", "0905"];
    let mobile = ["0809", "0817", "0818", "0908", "0909"];
    
    // Airtel validation
    if (inputval === Airtel[0]) {
        document.getElementById("airtel-alert").style.visibility = "visible";
    }
    else if (inputval === Airtel[1]) {
        document.getElementById("airtel-alert").style.visibility = "visible";
    }
    else if (inputval === Airtel[2]) {
        document.getElementById("airtel-alert").style.visibility = "visible";
    }
    else if (inputval === Airtel[3]) {
        document.getElementById("airtel-alert").style.visibility = "visible";
    }
    else if (inputval === Airtel[4]) {
        document.getElementById("airtel-alert").style.visibility = "visible";
    }
    else if (inputval === Airtel[5]) {
        document.getElementById("airtel-alert").style.visibility = "visible";
    }
    else if (inputval === Airtel[6]) {
        document.getElementById("airtel-alert").style.visibility = "visible";
    }
    else if (inputval === Airtel[7]) {
        document.getElementById("airtel-alert").style.visibility = "visible";
    }
    
    // MTN validation
    else if (inputval === MTN[0]) {
        document.getElementById("mtn-alert").style.visibility = "visible";
    }
    else if (inputval === MTN[1]) {
        document.getElementById("mtn-alert").style.visibility = "visible";
    }
    else if (inputval === MTN[2]) {
        document.getElementById("mtn-alert").style.visibility = "visible";
    }
    else if (inputval === MTN[3]) {
        document.getElementById("mtn-alert").style.visibility = "visible";
    }
    else if (inputval === MTN[4]) {
        document.getElementById("mtn-alert").style.visibility = "visible";
    }
    else if (inputval === MTN[5]) {
        document.getElementById("mtn-alert").style.visibility = "visible";
    }
    else if (inputval === MTN[6]) {
        document.getElementById("mtn-alert").style.visibility = "visible";
    }
    else if (inputval === MTN[7]) {
        document.getElementById("mtn-alert").style.visibility = "visible";
    }
    else if (inputval === MTN[8]) {
        document.getElementById("mtn-alert").style.visibility = "visible";
    }
    else if (inputval === MTN[9]) {
        document.getElementById("mtn-alert").style.visibility = "visible";
    }
    
    // Glo validation
    else if (inputval === Glo[0]) {
        document.getElementById("glo-alert").style.visibility = "visible";
    }
    else if (inputval === Glo[1]) {
        document.getElementById("glo-alert").style.visibility = "visible";
    }
    else if (inputval === Glo[2]) {
        document.getElementById("glo-alert").style.visibility = "visible";
    }
    else if (inputval === Glo[3]) {
        document.getElementById("glo-alert").style.visibility = "visible";
    }
    else if (inputval === Glo[4]) {
        document.getElementById("glo-alert").style.visibility = "visible";
    }
    else if (inputval === Glo[5]) {
        document.getElementById("glo-alert").style.visibility = "visible";
    }
    
    // 9moblie validation
    else if (inputval === mobile[0]) {
        document.getElementById("mobile-alert").style.visibility = "visible";
    }
    else if (inputval === mobile[1]) {
        document.getElementById("mobile-alert").style.visibility = "visible";
    }
    else if (inputval === mobile[2]) {
        document.getElementById("mobile-alert").style.visibility = "visible";
    }
    else if (inputval === mobile[3]) {
        document.getElementById("mobile-alert").style.visibility = "visible";
    }
    else if (inputval === mobile[4]) {
        document.getElementById("mobile-alert").style.visibility = "visible";
    }
    
    // Null input validation
    
    else if (inputval === "") {
        document.getElementById("null-alert").style.visibility = "visible";
    }
    
    else {
        document.getElementById("invalid-alert").style.visibility = "visible";
    }
    
}

// Hide Alert Function
function hideAlert() {
    document.getElementById("airtel-alert").style.visibility = "hidden";
    document.getElementById("mtn-alert").style.visibility = "hidden";
    document.getElementById("glo-alert").style.visibility = "hidden";
    document.getElementById("mobile-alert").style.visibility = "hidden";
    document.getElementById("null-alert").style.visibility = "hidden";
    document.getElementById("invalid-alert").style.visibility = "hidden";
}