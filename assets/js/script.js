let db;
let categories = document.querySelectorAll('.categoryName');

fetch('../../db_lang.json')
    .then(resp => resp.json())
    .then(data => db = data);

categories[0].childNodes

document.addEventListener('click', e => {
    if (!e.target.classList.contains('categoryName')) return;
    e.target.nextElementSibling.classList.toggle('collapse');
    e.target.children[0].classList.toggle('open');
    console.log(db);
})