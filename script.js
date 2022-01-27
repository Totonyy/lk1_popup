const images = ['img/chese.svg', 'img/mail.svg', 'img/paint.svg'];

images.forEach(el => {
    const img = document.createElement('div');
    img.className = 'mini__item';
    img.style.backgroundImage = `url(${el})`;
    img.addEventListener('click', e => 
        showPopup(`<img alt='pic' src='${el}'>`)
    );
    document.body.append(img);   
})

const popup = document.querySelector('.popup');

const popupContent = popup.firstElementChild;
const popupClose = popup.lastElementChild;

const closePopup = function (e){
    e.target.parentElement.classList.remove('popup_active');
    document.querySelector('.backgrnd__color').classList.remove('backgrnd__color');
}

document.onclick = function(e){
    if ( e.target.className == 'backgrnd__color' ) {
        popup.classList.remove('popup_active');
        document.querySelector('.backgrnd__color').classList.remove('backgrnd__color');
    } 
};

const showPopup = function(text){
    popup.classList.add('popup_active');
    popupContent.innerHTML=text; //через консоль можно вызвать showPopup('fff')

    if (!document.querySelector('.backgrnd__color')){
        const backgroundNew = document.createElement('div');
        backgroundNew.className ='backgrnd__color';
        document.body.prepend(backgroundNew);   
    } 
}

popupClose.addEventListener('click', closePopup);


//закрытие через Esc или F1(справка не открывается) 
document.addEventListener('keydown', (event) =>{
   const keyClose = event.code;
   if (keyClose=='Escape' || keyClose=='F1'){
        event.preventDefault();
        popup.classList.remove('popup_active');
        document.querySelector('.backgrnd__color').classList.remove('backgrnd__color');
   } 
})
