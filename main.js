function validate() {
    const inputval = document.getElementById("tel").value;
    const alertElements = {
        "Airtel": "airtel-alert",
        "MTN": "mtn-alert",
        "Glo": "glo-alert",
        "9mobile": "mobile-alert",
        "null": "null-alert",
        "invalid": "invalid-alert"
    };
    
    const mobileProviders = {
        "Airtel": ["0802", "0808", "0812", "0701", "0708", "0901", "0902", "0907", "0912"],
        "MTN": ["0803", "0806", "0814", "0810", "0813", "0816", "0703", "0706", "0903", "0906"],
        "Glo": ["0805", "0807", "0811", "0815", "0705", "0905"],
        "9mobile": ["0809", "0817", "0818", "0908", "0909"]
    };

    for (const provider in mobileProviders) {
        if (mobileProviders[provider].includes(inputval)) {
            document.getElementById(alertElements[provider]).style.visibility = "visible";
            return;
        }
    }

    if (inputval === "") {
        document.getElementById(alertElements["null"]).style.visibility = "visible";
    } else {
        document.getElementById(alertElements["invalid"]).style.visibility = "visible";
    }
}

function hideAlert() {
    for (const alertElement in alertElements) {
        document.getElementById(alertElements[alertElement]).style.visibility = "hidden";
    }
}
