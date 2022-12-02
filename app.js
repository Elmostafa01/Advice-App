//creating HTML elements
const mainDiv = document.createElement('div');
const myP = document.createElement('p');
const myH = document.createElement('h2');
const btnDiv = document.createElement('div')
const btnLogo = document.createElement('i')
const advice = document.querySelector('.advice')
//giving classes to elements
mainDiv.className = "main"
myH.className = "advice"
btnDiv.className = "btnDiv"
btnLogo.className = "fa-solid fa-dice-five"
//giving the p element a word
let paragraph = document.createTextNode("ADVICE")
//appending my elements in my Divs
document.body.appendChild(mainDiv)
mainDiv.appendChild(myP)
myP.appendChild(paragraph)
mainDiv.appendChild(myH)
mainDiv.appendChild(btnDiv)
btnDiv.appendChild(btnLogo)

function fetchingData() {
const fetchAdvice = fetch('https://api.adviceslip.com/advice');
fetchAdvice
    .then(response =>  response.json())
    .then(json => {
        console.log(json.slip.advice)
        myH.innerText = `"${json.slip.advice}"`
    })
    .catch(error => {
    console.error('Error',error)
    })
}
btnDiv.addEventListener('click', fetchingData)

