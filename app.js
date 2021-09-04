const button = document.querySelector('button')
const element = document.querySelector('body')

button.addEventListener('click', () => {
    // console.log("U clicked me")
    element.classList.toggle('dark')    
})