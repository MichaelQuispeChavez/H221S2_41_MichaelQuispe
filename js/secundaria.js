// ========================= SECUNDARIA ====================
const clientTabItems3 = document.querySelectorAll('.profesores-item3');
const showDiv3 = document.querySelector('.show-info3');

clientTabItems3.forEach((item) => {
    item.addEventListener('click', () => {
        showInfo3(item);
    });
});

function showInfo3(item){
    showDiv3.querySelector('.show-img3 img').src = item.querySelector('.profesores-thumbnail3 img').src;
    showDiv3.querySelector('.show-name3').innerHTML = item.querySelector('.profesores-name3').innerHTML;
    showDiv3.querySelector('.show-designation3').innerHTML = item.querySelector('.profesores-designation3').innerHTML;
    showDiv3.querySelector('.show-description3').innerHTML = item.querySelector('.profesores-description3').innerHTML;
    setActiveTab(item);
}

function setActiveTab(item){
    clientTabItems3.forEach((item) => {
        item.classList.remove('active'); // resetting active tab
    });
    item.classList.add('active');
}
showInfo3(clientTabItems3[0]);