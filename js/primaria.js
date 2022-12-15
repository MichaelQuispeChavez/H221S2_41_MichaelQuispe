// ============= PRIMARIA =================
const clientTabItems2 = document.querySelectorAll('.profesores-item2');
const showDiv2 = document.querySelector('.show-info2');

clientTabItems2.forEach((item) => {
    item.addEventListener('click', () => {
        showInfo2(item);
    });
});

function showInfo2(item){
    showDiv2.querySelector('.show-img2 img').src = item.querySelector('.profesores-thumbnail2 img').src;
    showDiv2.querySelector('.show-name2').innerHTML = item.querySelector('.profesores-name2').innerHTML;
    showDiv2.querySelector('.show-designation2').innerHTML = item.querySelector('.profesores-designation2').innerHTML;
    showDiv2.querySelector('.show-description2').innerHTML = item.querySelector('.profesores-description2').innerHTML;
    setActiveTab(item);
}

function setActiveTab(item){
    clientTabItems2.forEach((item) => {
        item.classList.remove('active'); 
    });
    item.classList.add('active');
}
showInfo2(clientTabItems2[0]);