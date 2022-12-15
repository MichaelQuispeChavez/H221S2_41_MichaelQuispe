// ============= INICIAL =======================
const clientTabItems = document.querySelectorAll('.profesores-item');
const showDiv = document.querySelector('.show-info');

clientTabItems.forEach((item) => {
    item.addEventListener('click', () => {
        showInfo(item);
    });
});

function showInfo(item){
    showDiv.querySelector('.show-img img').src = item.querySelector('.profesores-thumbnail img').src;
    showDiv.querySelector('.show-name').innerHTML = item.querySelector('.profesores-name').innerHTML;
    showDiv.querySelector('.show-designation').innerHTML = item.querySelector('.profesores-designation').innerHTML;
    showDiv.querySelector('.show-description').innerHTML = item.querySelector('.profesores-description').innerHTML;
    setActiveTab(item);
}

function setActiveTab(item){
    clientTabItems.forEach((item) => {
        item.classList.remove('active'); // restablecer pestaña activa
    });
    item.classList.add('active');
}

showInfo(clientTabItems[0]); // pestaña activa predeterminada


