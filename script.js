const button = document.querySelector('button')
const buttonNext = document.querySelector('.button-next')
const image = document.querySelector('.image')

function addAlert() {
    alert('work')

}
function editSliderPrev() {
    image.setAttribute('src', '/images/chevrole.jpg');
}
function editSliderNext() {
    image.setAttribute('src', 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80');
}
buttonNext.addEventListener('click', editSliderPrev)
buttonNext.addEventListener('click', editSliderNext)
button.addEventListener('click', editSliderPrev )



