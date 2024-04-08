let originalText = "I love my country Pakistan. <br> I like my city Faisalabad. <br> I love my Homeland."
let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"]
// Global Functions
function getInputValues() {
    return document.getElementById("input").value
}
function clerInputAns() {
    return document.getElementById("input").value = ""
}
function cleroutputAns() {
    return document.getElementById("output").innerHTML = ""
}
let toastifyText = ""
function toastifySuccess() {
    Toastify({
        text: toastifyText,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
}
function toastifyWarning() {
    Toastify({
        text: toastifyText,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, rgb(234, 28, 45), rgb(252, 180, 79))",
        },
      }).showToast();
}

// Convert to Lowercase
function lowercase() {
    let lowercaseText = originalText.toLocaleLowerCase()
    document.getElementById("output").innerHTML = lowercaseText
}
// Convert to Uppercase
function uppercase() {
    let uppercaseText = originalText.toLocaleUpperCase()
    document.getElementById("output").innerHTML = uppercaseText
}
// Convert to Capitalize
function capitalize() {
    let capitalizeText = '<span style="text-transform: capitalize;">'+ originalText +'</span>'
    document.getElementById("output").innerHTML = capitalizeText
}
// Better Formatting
function betterFormatting() {
    let text = getInputValues()
    if (!text) {
        toastifyText = "Please Enter Some Value"
        toastifyWarning()
        return;
    }
    formatting = text.toLocaleLowerCase()
    document.getElementById("output").style.textTransform = "capitalize"    
    document.getElementById("output").innerHTML = formatting
}
// Print All Cities
function printcities() {
    cleroutputAns()
    for (let i = 0; i < cities.length; i++){
        let num = i + 1
        document.getElementById("output").innerHTML += num + ") " + cities[i] + "<br>"
    }
}
// Add Your City In List
function addCityInList() {
    let cityName = getInputValues()
    if (cityName.length < 3) {
        toastifyText = "Please type your city name correctly..."
        toastifyWarning()
        return;
    }
    let firstLetter = cityName.slice(0,1).toLocaleUpperCase()
    let otherLetters = cityName.slice(1).toLocaleLowerCase()
    let fullName = firstLetter + otherLetters
    
    let cityFound = false;
    for (let i = 0; i < cities.length; i++){
        if (cities[i] === fullName) {
            cityFound = true
            toastifyText = "Already in list"
            toastifyWarning()
            let html = '<span style="color: red;">"' + fullName + '"</span> is already in list'
            document.getElementById("output").innerHTML = html
        }
    }
    if (cityFound === false) {
        cities.push(fullName)
        toastifyText = "successfully added into list"
        toastifySuccess()
        document.getElementById("output").innerHTML = '<span style="color: green;">"' + fullName + '"</span> has been successfully added into list.';
    }
}
// Check Your City In List
function checkCityInList() {
    let cityName = getInputValues()
    if (cityName.length < 3) {
        toastifyText = "Please type your city name correctly..."
        toastifyWarning()
        return;
    }
    let firstLetter = cityName.charAt(0).toLocaleUpperCase()
    let otherLetters = cityName.slice(1).toLocaleLowerCase()
    let fullName = firstLetter + otherLetters
    
    let cityFound = false;
    for (let i = 0; i < cities.length; i++){
        if (cities[i] === fullName) {
            cityFound = true
            toastifyText = "Found in the list."
            toastifySuccess()
            let html = '<span style="color: green;">"' + fullName + '"</span> found in the list. &#x1F495;'
            document.getElementById("output").innerHTML = html
        }
    }
    if (cityFound === false) {
        toastifyText = "we couldn't find your city in list"
        toastifyWarning()
        let html = '<p>SORRY &#x1F644; we couldnt find your city <span style="color: red;">"'+ fullName +'"</span> in list. <br> click <span style="color: green;">"Add Your City In List"</span> to add your city. &#129392; </p>'
        document.getElementById("output").innerHTML = html
    }
}
// Find This Word
function findWord() {
    let newOriginalText = originalText.toLocaleLowerCase();
    let word = getInputValues()
    if (!word) {
        toastifyText = "Please type a word for find."
        toastifyWarning()
        return;
    }
    word = word.toLocaleLowerCase()
    let fullword = newOriginalText.indexOf(word)
    if (fullword !== -1) {
        toastifyText = "Your word" + " ( " + word + " ) " + "found at index" + " " + fullword
        toastifySuccess()
        let html = 'Your word <span style="color: green;"> "'+ word +'"  </span> found at index: '+fullword+' '
        document.getElementById("output").innerHTML = html
    } else {
        toastifyText = "Doesn't exist in the Original String"
        toastifyWarning()
        let html = 'Your word <span style="color: green;"> "'+ word +'"  </span> does not exist in the Original String '
        document.getElementById("output").innerHTML = html
    }
}
// Replace This Word
function replaceWord() {
    let newOriginalText = originalText.toLocaleLowerCase();
    let word = getInputValues();
    if (!word) {
        toastifyText = "Please type a word for replacing."
        toastifyWarning()
        return;
    }
    let word2 = word.toLocaleLowerCase()
    let thisword = newOriginalText.indexOf(word2)
    if (thisword == -1) {
        toastifyText = word + " <= " + " is not found in Original String"
        toastifyWarning()
        return;
    }
    let replacewith = prompt("Enter a word that you want to replace with word" + " => " +  word);
    if (!replacewith) {
        alert("Please type a word to replace it with" + " => " + word + "." );
        return;
    }
    replacewith = replacewith.toLocaleLowerCase()
    word2 = new RegExp(word2, 'g');
    let reeplaceword = newOriginalText.replace(word2, replacewith)
    document.getElementById("output").innerHTML = reeplaceword
}

// clear data
function clearInput() {
    clerInputAns()
}
function clearOutput() {
    cleroutputAns()
}