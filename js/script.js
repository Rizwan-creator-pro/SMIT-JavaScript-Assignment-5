let originalText = "I love my country Pakistan. <br> I like my city Faisalabad. <br> I love my Homeland."
let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"]
// Function to get input values
function getInputValues() {
    return document.getElementById("input").value
}
function clerInputAns() {
    return document.getElementById("input").value = ""
}
function cleroutputAns() {
    return document.getElementById("output").innerHTML = ""
}
function allclear() {
    clerInputAns()
    cleroutputAns()
}

function lowercase() {
    let lowercaseText = originalText.toLocaleLowerCase()
    document.getElementById("output").innerHTML = lowercaseText
}
function uppercase() {
    let uppercaseText = originalText.toLocaleUpperCase()
    document.getElementById("output").innerHTML = uppercaseText
}
function capitalize() {
    let capitalizeText = '<span style="text-transform: capitalize;">'+ originalText +'</span>'
    document.getElementById("output").innerHTML = capitalizeText
}
function betterFormatting() {
    let text = getInputValues()
    if (!text) {
        alert("Please Enter Some Value")
        return;
    }
    formatting = text.toLocaleLowerCase()
    document.getElementById("output").style.textTransform = "capitalize"    
    document.getElementById("output").innerHTML = formatting
}
function printcities() {
    allclear()
    for (let i = 0; i < cities.length; i++){
        let citie = cities[i]
        filltercities = citie.toLocaleLowerCase()
        document.getElementById("output").style.textTransform = "capitalize"   
        document.getElementById("output").innerHTML += filltercities + "<br>"
    }
}
function addCityInList() {
    let cityName = getInputValues()
    if (!cityName) {
        alert("Please Enter the city name first...")
        return;
    }
    let city = cityName.toLowerCase()
    cities.push(city)
    document.getElementById("output").innerHTML = '<span style="color: green; text-transform: capitalize;">"' + city + '"</span> is added in the list.';
}

// clear data
function clearInput() {
    clerInputAns()
}
function clearOutput() {
    cleroutputAns()
}