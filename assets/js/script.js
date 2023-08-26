let db;
let categories = document.querySelectorAll('.categoryName');
let ruOpt = document.querySelector('.lg_ru');
let uaOpt = document.querySelector('.lg_ua');

fetch('../../db_lang.json')
    .then(resp => resp.json())
    .then(data => db = data);

categories[0].childNodes

document.addEventListener('click', e => {
    if (!e.target.classList.contains('categoryName')) return;
    e.target.nextElementSibling.classList.toggle('collapse');
    e.target.children[0].classList.toggle('open');
    let pos = e.target.getBoundingClientRect();
    window.scrollBy(pos.x, pos.y - 8);
})

ruOpt.onclick = uaOpt.onclick = e => langSwitch(e.target.textContent);

function langSwitch(lang_name) {
    let catNames = document.querySelectorAll('.categoryName');
    let cr = document.querySelectorAll('[id^="cr_"]');
    let wr = document.querySelectorAll('[id^="wr_"]');
    let mr = document.querySelectorAll('[id^="mr_"]');
    let sr = document.querySelectorAll('[id^="sr_"]');
    let pr = document.querySelectorAll('[id^="pr_"]');
    let rwr = document.querySelectorAll('[id^="rwr_"]');
    let brr = document.querySelectorAll('[id^="brr_"]');
    let smst = document.querySelectorAll('[id^="smst_"]');
    let sts = document.querySelectorAll('[id^="sts_"]');
    let ss = document.querySelectorAll('[id^="ss_"]');
    let suri = document.querySelectorAll('[id^="suri_"]');
    let gk = document.querySelectorAll('[id^="gk_"]');
    let nr = document.querySelectorAll('[id^="nr_"]');
    let pz = document.querySelectorAll('[id^="pz_"]');
    let fm = document.querySelectorAll('[id^="fm_"]');
    let kd = document.querySelectorAll('[id^="kd_"]');
    let sn = document.querySelectorAll('[id^="sn_"]');
    let scex = document.querySelectorAll('[id^="scex_"]');
    catNames.forEach((item, i) => item.innerHTML = (Object.entries(db[lang_name.toLowerCase()].categoryName)[i][1].name) + '<span class="arrow"></span>');
    cr.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.classicRolls.item[i].itemName);
    cr.forEach((item, i) => item.querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.classicRolls.item[i].itemDescription);
    wr.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.warmRolls.item[i].itemName);
    wr.forEach((item, i) => item.querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.warmRolls.item[i].itemDescription);
    mr.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.makiRolls.item[i].itemName);
    mr.forEach((item, i) => item.querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.makiRolls.item[i].itemDescription);
    sr.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.smartRolls.item[i].itemName);
    sr.forEach((item, i) => item.querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.smartRolls.item[i].itemDescription);
    pr.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.premiumRolls.item[i].itemName);
    pr.forEach((item, i) => item.querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.premiumRolls.item[i].itemDescription);
    rwr.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.rollsWoRice.item[i].itemName);
    rwr.forEach((item, i) => item.querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.rollsWoRice.item[i].itemDescription);
    brr.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.blackRiceRolls.item[i].itemName);
    brr.forEach((item, i) => item.querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.blackRiceRolls.item[i].itemDescription);
    smst.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.smartSets.item[i].itemName);
    smst.forEach((item, i) => item.querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.smartSets.item[i].itemDescription);
    sts.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.sets.item[i].itemName);
    sts.forEach((item, i) => item.querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.sets.item[i].itemDescription);
    ss.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.sushiSandwiches.item[i].itemName);
    ss.forEach((item, i) => item.querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.sushiSandwiches.item[i].itemDescription);
    suri.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.sushiritto.item[i].itemName);
    suri.forEach((item, i) => item.querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.sushiritto.item[i].itemDescription);
    gk.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.gunkans.item[i].itemName);
    gk.forEach((item, i) => item.querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.gunkans.item[i].itemDescription);
    nr.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.noddleRiceWok.item[i].itemName);
    nr.forEach((item, i) => item.querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.noddleRiceWok.item[i].itemDescription);
    pz.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.pizzas.item[i].itemName);
    pz.forEach((item, i) => item.querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.pizzas.item[i].itemDescription);
    fm.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.futomaki.item[i].itemName);
    fm.forEach((item, i) => item.querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.futomaki.item[i].itemDescription);
    kd.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.kidsRolls.item[i].itemName);
    kd.forEach((item, i) => item.querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.kidsRolls.item[i].itemDescription);
    sn.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.snacks.item[i].itemName);
    sn[0].querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.snacks.item[0].itemDescription;
    sn[0].querySelector('.itemWeight').innerHTML = db[lang_name.toLowerCase()].categoryName.snacks.item[0].itemWeight;
    sn[1].querySelector('.itemDescription').innerHTML = db[lang_name.toLowerCase()].categoryName.snacks.item[1].itemDescription;
    scex.forEach((item, i) => item.querySelector('.itemName').innerHTML = db[lang_name.toLowerCase()].categoryName.saucesExtras.item[i].itemName);
}