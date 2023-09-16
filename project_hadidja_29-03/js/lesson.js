// // phone validator
//
// const phoneInput = document.querySelector('#phone_input')
// const phoneButton = document.querySelector('#phone_button')
// const phoneResult = document.querySelector('#phone_result')
//
// // phoneButton.addEventListener('click', () => {
// //     return console.log('New click')
// // })
//
// const regExp = /\+996 \d{3} \d{2}-\d{2}-\d{2}$/
//
// phoneButton.onclick = () => {
//     if(regExp.test(phoneInput.value)){
//         phoneResult.innerHTML = 'ok'
//         phoneResult.style.color = 'green'
//     } else{
//         phoneResult.innerHTML = 'not ok'
//         phoneResult.style.color = 'red'
//     }
// }
//
// // recursion
//
//
//
// //tab slider
// const tabContendBlocks = document.querySelectorAll('.tab_content_block')
// const tabsParentBlock = document.querySelector('.tab_content_items')
// const tabsBlocks = document.querySelectorAll('.tab_content_item')
//
// const hideTabContend = () => {
//     tabContendBlocks.forEach(tabContendBlock=> {
//         tabContendBlock.style.display = 'none'
//     })
//     tabsBlocks.forEach(tabBlock => {
//         tabBlock.classList.remove('tab_content_item_active')
//
//     })
// }
// const showTabContends = (indexElement = 0) => {
//     tabContendBlocks[indexElement].style.display = 'block'
//     tabsBlocks[indexElement].classList.add('tab_content_item_active')
// }
// hideTabContend()
// showTabContends()
//
// tabsParentBlock.onclick = (event) => {
//     if (event.target.classList.contains('tab_content_item')){
//         tabsBlocks.forEach((tabBlock, tabIndex)=> {
//             if (event.target === tabBlock){
//                 hideTabContend()
//                 showTabContends(tabIndex)
//             }
//         })
//     }
// }
// setInterval()
//
//
// document.addEventListener("DOMContentLoaded", function () {
//     let currentSlide = 0;
//     const slides = document.querySelectorAll(".tab_contents_block .tab_content_block");
//     const interval = 1000;
//
//     function nextSlide() {
//         slides[currentSlide].style.display = "none";
//         currentSlide = (currentSlide + 1) % slides.length;
//         slides[currentSlide].style.display = "block";
//     }
//
//     setInterval(nextSlide, interval);
// });


//TabSlider
// modal
// const modal = document.querySelector('.modal')
// const modalTrigger = document.querySelector('#btn-get')
// const modalCloseButton = document.querySelector('.modal_close')
//
// const openModel = () => {
//     modal.style.display = 'block'
//     document.body.style.overflow = 'hidden'
// }
// const closeModel = () => {
//     modal.style.display = 'none'
//     document.body.style.overflow = ''
// }
// modal.onclick = (event) => {
//     if (event.target === modal) {
//         closeModel()
//     }
// }
// modalTrigger.onclick = () => openModel()
// modalCloseButton.onclick = () => closeModel()








//TAB SLIDER
const tabContendBlocks = document.querySelectorAll('.tab_content_block')
const tabsParentBlock = document.querySelector('.tab_content_items')
const tabsBlocks = document.querySelectorAll('.tab_content_item')



const hideTabContend = () => {
    tabContendBlocks.forEach(tabContendBlock=> {
        tabContendBlock.style.display = 'none'
    })
    tabsBlocks.forEach(tabBlock => {
        tabBlock.classList.remove('tab_content_item_active')

    })
}
const showTabContends = (indexElement = 0) => {
    tabContendBlocks[indexElement].style.display = 'block'
    tabsBlocks[indexElement].classList.add('tab_content_item_active')
}
hideTabContend()
showTabContends()

tabsParentBlock.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabsBlocks.forEach((tabBlock, tabIndex)=> {
            if (event.target === tabBlock){
                hideTabContend()
                showTabContends(tabIndex)
            }
        })
    }
}
let sliderIndex = 0
const autoSlider = () => {
    hideTabContend()
    sliderIndex = (sliderIndex + 1) % tabContendBlocks.length
    showTabContends(sliderIndex)
}
setInterval(autoSlider, 3000)


// //MODAL
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')
const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    modalWasShown = true

}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''

}
modalTrigger.onclick = () => { openModal() }

modalCloseButton.onclick = () => { closeModal() }

modal.onclick = () => {
    if (event.target === modal) closeModal()
}
//ОКНО ПО ПРОКРУТКЕ В КОНЕЦ СТРАНИЦЫ
let modalWasShown = false
window.addEventListener('scroll', () => {
    const scrollHeight = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    // Если пользователь прокрутил до определенной точки (здесь, 100% страницы)
    if (scrollHeight >= pageHeight * 1 && !modalWasShown) {   // ЗАПОМНИТЬ ЧТО НЕ РАВНО В УСЛОВИЯХ ОБОЗНАЧАЕТСЯ ТАК
        openModal()

    }

})

let showModal = false
//const time = 10
const timeOut = () => {
    if (!showModal) {
        setTimeout(openModal, 10000)
        showModal = true
    }
}
timeOut()