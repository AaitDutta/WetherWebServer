console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('.mainForm')
 const search = document.querySelector('.inp')
 //console.log('search = '+search.value)

const messageOne = document.querySelector('.message-1')
const messageTwo = document.querySelector('.message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.localtion
                messageTwo.textContent = ' Current Temperature ='+ data.Temperature +' Chance of rain = '+data.ChanceOfRain
            }
        })
    })
})