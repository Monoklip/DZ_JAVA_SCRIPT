import { validatePassword, validateName, getList, getOlList, getCountTR, registr ,validate, loadFile } from './common/functions.js';
import { Name, Password} from './common/regexps.js';

const textArea = document.querySelector('textarea');
const textMonitor = document.querySelector('.text-monitor');
const editBtn = document.querySelector('.editBtn');
const body = document.body;
textMonitor.innerHTML = textArea.value;

const bBtn = document.querySelector('.bBtn');
const iBtn = document.querySelector('.iBtn');
const uBtn = document.querySelector('.uBtn');
const sBtn = document.querySelector('.sBtn');

bBtn.addEventListener('click',()=>{
   if(textMonitor.style.fontWeight != `bold`){
    textMonitor.style.fontWeight = `bold`;
        bBtn.style.background = `rgb(82, 82, 82)`;
        bBtn.style.color = `white`;
   }
   else {
    textMonitor.style.fontWeight = `normal`;
        bBtn.style.background = `white`;
        bBtn.style.color = `black`;
   }
});

iBtn.addEventListener('click',()=>{
    if(textMonitor.style.fontStyle != `italic`){
        textMonitor.style.fontStyle = `italic`;
        iBtn.style.background = `rgb(82, 82, 82)`;
        iBtn.style.color = `white`;
    }
    else {
        textMonitor.style.fontStyle = `normal`;
        iBtn.style.background = `white`;
        iBtn.style.color = `black`;
    }
});

uBtn.addEventListener('click',()=>{
    if(textMonitor.style.textDecoration != `underline`){
        textMonitor.style.textDecoration = "underline";
        uBtn.style.background = `rgb(82, 82, 82)`;
        uBtn.style.color = `white`;
        sBtn.style.background = `white`;
        sBtn.style.color = `black`;
    }
    else {
        textMonitor.style.textDecoration = `none`;
        uBtn.style.background = `white`;
        uBtn.style.color = `black`;
    }
});

sBtn.addEventListener('click',()=>{
    if(textMonitor.style.textDecorationLine != `line-through`){
        textMonitor.style.textDecorationLine = "line-through";
        sBtn.style.background = `rgb(82, 82, 82)`;
        sBtn.style.color = `white`;
        uBtn.style.background = `white`;
        uBtn.style.color = `black`;
    }
    else {
        textMonitor.style.textDecorationLine = `none`;
        sBtn.style.background = `white`;
        sBtn.style.color = `black`;
        uBtn.style.background = `white`;
        uBtn.style.color = `black`;
    }
});

// =======================================

const textLeft = document.querySelector('.textLeft');
const textCenter = document.querySelector('.textCenter');
const textRight = document.querySelector('.textRight');

if(textMonitor.style.textAlign == `left`){
    textLeft.style.background = `rgb(82, 82, 82)`;
}
textLeft.addEventListener('click',()=>{
    textMonitor.style.textAlign = `left`;
    textLeft.style.background = `rgb(82, 82, 82)`;
    textCenter.style.background = `white`;
    textRight.style.background = `white`;
});

textCenter.addEventListener('click',()=>{
    textMonitor.style.textAlign = `center`;
    textCenter.style.background = `rgb(82, 82, 82)`;
    textLeft.style.background = `white`;
    textRight.style.background = `white`;
});

textRight.addEventListener('click',()=>{
    textMonitor.style.textAlign = `right`;
    textRight.style.background = `rgb(82, 82, 82)`;
    textCenter.style.background = `white`;
    textLeft.style.background = `white`;
});

// ========================================

const fontFamily = document.getElementById('fontFamily');

fontFamily.addEventListener('change',()=>{
    textMonitor.style.fontFamily = `${fontFamily.value}`;
});

// ========================================

const fontSize = document.getElementById('fontSize');

fontSize.addEventListener('change',()=>{
    textMonitor.style.fontSize = `${fontSize.value}`;
});

// =========================================

const colorText = document.querySelectorAll('.color');

colorText.forEach(color => {
    color.addEventListener('click', () => {
        textMonitor.style.color = color.style.background;
    });
    color.addEventListener('mousemove',()=>{
        color.style.boxShadow = `3px 3px 3px 3px`;
    });
    color.addEventListener('mouseleave',()=>{
        color.style.boxShadow = `none`;
    });
});

// =========================================

const backgroundColorBtn = document.querySelector('.backgroundColorBtn');
const menuTextColorUpBtn = document.querySelector('.menuTextColorUpBtn');
const menuTextColor = document.querySelector('.menuTextColor');

backgroundColorBtn.addEventListener('click',()=>{
    menuTextColor.style.display = `block`;
    body.style.background = `rgba(0,0,0,0.5)`;
    body.style.transition = `1s ease`;
    menuBackgroundColor.style.display = `none`;
    backgroundColorBtn.style.background = `rgb(82, 82, 82)`;
    backgtoundImageBtn.style.background = `white`;
});

menuTextColorUpBtn.addEventListener('click',()=>{
    menuTextColor.style.display = `none`;
    body.style.background = `rgba(0,0,0,0)`;
    backgroundColorBtn.style.background = `white`;
});

// =========================================

const mbcBtn = document.querySelector('.mbcBtn');
const mbiBtn = document.querySelector('.mbiBtn');
const mbfBtn = document.querySelector('.mbfBtn');

const menuBackgroundColorSetingBoxColors = document.querySelector('.menuBackgroundColorSetingBoxColors');
const menuBackgroundColorSetingBoxImages = document.querySelector('.menuBackgroundColorSetingBoxImages');
const menuBackgroundColorSetingBoxFiles = document.querySelector('.menuBackgroundColorSetingBoxFiles');

mbcBtn.addEventListener('click',()=>{
    menuBackgroundColorSetingBoxColors.style.display = `block`;
    menuBackgroundColorSetingBoxImages.style.display = `none`;
    menuBackgroundColorSetingBoxFiles.style.display = `none`;
    mbcBtn.style.borderBottom = `none`;
    mbiBtn.style.borderBottom = `1px solid grey`;
    mbfBtn.style.borderBottom = `1px solid grey`;
    Object.assign(mbcBtn.style,{ border: `1px solid grey`, borderBottom: `none`, borderLeft: `none`, borderRadius: `0 5px 0 0`, color: `grey`,});
    Object.assign(mbiBtn.style,{ border: `none`, borderBottom: `1px solid grey`, color: `rgb(0, 102, 255)`,});
    Object.assign(mbfBtn.style,{ border: `none`, borderBottom: `1px solid grey`, color: `rgb(0, 102, 255)`,});});

mbiBtn.addEventListener('click',()=>{
    menuBackgroundColorSetingBoxColors.style.display = `none`;
    menuBackgroundColorSetingBoxImages.style.display = `block`;
    menuBackgroundColorSetingBoxFiles.style.display = `none`;
    Object.assign(mbcBtn.style,{ border: `none`, borderBottom: `1px solid grey`, color: `rgb(0, 102, 255)`,});
    Object.assign(mbiBtn.style,{ border: `1px solid grey`, borderBottom: `none`, borderRadius: `5px 5px 0 0`, color: `grey`,});
    Object.assign(mbfBtn.style,{ border: `none`, borderBottom: `1px solid grey`, color: `rgb(0, 102, 255)`,});});

mbfBtn.addEventListener('click',()=>{
    menuBackgroundColorSetingBoxColors.style.display = `none`;
    menuBackgroundColorSetingBoxImages.style.display = `none`;
    menuBackgroundColorSetingBoxFiles.style.display = `block`;
    Object.assign(mbcBtn.style,{ border: `none`, borderBottom: `1px solid grey`, color: `rgb(0, 102, 255)`,});
    Object.assign(mbiBtn.style,{ border: `none`, borderBottom: `1px solid grey`, color: `rgb(0, 102, 255)`,});
    Object.assign(mbfBtn.style,{ border: `1px solid grey`, borderBottom: `none`, borderRadius: `5px 5px 0 0`, color: `grey`,});});

// ============================================

const background = document.querySelectorAll('.background');

background.forEach(color=>{
    color.addEventListener('click',()=>{
        textMonitor.style.background = color.style.background;
    });
    color.addEventListener('mousemove',()=>{
        color.style.boxShadow = `3px 3px 3px 3px`;
    });
    color.addEventListener('mouseleave',()=>{
        color.style.boxShadow = `none`;
    });
});

// ============================================

const backgroundImage = document.querySelectorAll('.background-image');

backgroundImage.forEach(background=>{
    background.addEventListener('click',()=>{
        textMonitor.style.background = background.style.backgroundImage;
    });
    background.addEventListener('mousemove',()=>{
        background.style.boxShadow = `3px 3px 3px 3px`;
    });
    background.addEventListener('mouseleave',()=>{
        background.style.boxShadow = `none`;
    });
});

// ============================================

const backgtoundImageBtn = document.querySelector('.backgtoundImageBtn');
const menuBackgroundColor = document.querySelector('.menuBackgroundColor');

backgtoundImageBtn.addEventListener('click',()=>{
    menuBackgroundColor.style.display = `block`;
    menuTextColor.style.display = `none`;
    body.style.background = `rgba(0,0,0,0.5)`;
    body.style.transition = `1s ease`;
    backgtoundImageBtn.style.background = `rgb(82, 82, 82)`;
    backgroundColorBtn.style.background = `white`;
});

// ============================================

const menuBackgroundBtn = document.querySelector('.menuBackgroundBtn');

menuBackgroundBtn.addEventListener('click',()=>{
    menuBackgroundColor.style.display = `none`;
    body.style.background = `rgba(0,0,0,0)`;
    backgtoundImageBtn.style.background = `white`;
});

// ============================================

const lockBtn = document.querySelector('.lockBtn');
const unLockBtn = document.querySelector('.unLockBtn');
const account = document.querySelector('.account');
const inputBtn = document.getElementById('inputBtn');
const inputName = document.getElementById('inputName');
const inputPassword = document.getElementById('inputPassword');

// let Name = /admin/;
// let Password = /admin/;

const {form} = document.forms;

lockBtn.addEventListener('click',()=>{
    account.style.display = `block`;
    body.style.background = `rgba(0,0,0,0.5)`;
    body.style.transition = `1s ease`;
});

const accountInvalid = document.querySelector('.accound-invalid');

inputBtn.addEventListener('click',()=>{

    inputName.style.borderColor = `grey`;
    inputPassword.style.borderColor = `grey`;

    if(editBtn.disabled = validate(form.elements)){
        account.style.display = `none`;
        lockBtn.style.display = `none`;
        unLockBtn.style.display = `block`;
        body.style.background = `rgba(0,0,0,0)`;
        body.style.transition = `1s ease`;
        accountInvalid.innerText = ``;
    }
    if(inputName.value != "admin"){
        accountInvalid.innerText = `Неправильний логін`;
        inputName.value = '';
        inputName.style.border = `1px solid red`;
        inputName.style.boxShadow = `0 0 5px 0 red`;
        spanName.style.color = `red`;
        spanName.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
    }
    if(inputPassword.value != "admin"){
        accountInvalid.innerText = `Неправильний пароль`;
        inputPassword.value = '';
        inputPassword.style.border = `1px solid red`;
        inputPassword.style.boxShadow = `0 0 5px 0 red`;
        spanPassword.style.color = `red`;
        spanPassword.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
    }
    if(inputName.value != "admin" && inputPassword.value != "admin"){
        accountInvalid.innerText = `Неправильний логін і пароль`;
        inputName.value = '';
        inputPassword.value = '';
    }
});

form.addEventListener('submit', registr);

for(const field of form.elements) {
    field.addEventListener('click', () => {
        editBtn.disabled = !validate(form.elements);
    });
};

// ============================================

const accountTextClose = document.querySelector('.account-tex-close');

accountTextClose.addEventListener('click',()=>{
    account.style.display = `none`;
    body.style.background = `rgba(0,0,0,0)`;
    body.style.transition = `1s ease`;
    inputName.value = '';
    inputPassword.value = '';
    inputName.style.border = `1px solid grey`;
    inputPassword.style.border = `1px solid grey`;
    accountInvalid.innerText = '';
});

// ============================================

const menuEditBar = document.querySelector('.menuEditBar');
const govBtn = document.querySelector('.govBtn');
const menuEditBarBtn1 = document.querySelector('.menuEditBarBtn1');
const menuEditBarBtn2 = document.querySelector('.menuEditBarBtn2');
const menuEditBarBtn3 = document.querySelector('.menuEditBarBtn3');
const menuEditBarBtn4 = document.querySelector('.menuEditBarBtn4');

menuEditBarBtn1.addEventListener('click',()=>{
    menuEditBar.style.display = `none`;
    govBtn.style.display = `flex`;
    textArea.style.display = `none`;
    textMonitor.style.display = `block`;
    textMonitor.innerHTML = textArea.value;
    table.style.display = `none`;
    textArea.style.background = `rgba(0,0,0,0)`;
    textArea.style.transition = `1s ease`;
    li.style.display = `none`;
    OL.style.display = `none`;
});

editBtn.addEventListener('click',()=>{
    textArea.style.display = `block`;
    textMonitor.style.display = `none`;
    govBtn.style.display = `none`;
    menuEditBar.style.display = `flex`;
});

// ============================================

const table = document.querySelector('.table');
const tableBtnClose = document.querySelector(".tableBtnClose");
const tableBtnCreate = document.querySelector(".tableBtnCreate");
const tableBtnReset = document.querySelector(".tableBtnReset");

menuEditBarBtn2.addEventListener('click',()=>{
    table.style.display = `block`;
    textArea.style.background = `rgba(0,0,0,0.5)`;
    textArea.style.transition = `1s ease`;
    li.style.display = `none`;
    OL.style.display = `none`;

});
tableBtnClose.addEventListener('click',()=>{
    table.style.display = `none`;
    textArea.style.background = `rgba(0,0,0,0)`;
    textArea.style.transition = `1s ease`;
});

const CountTR = document.querySelector(".CountTR");
const CountTD = document.querySelector(".CountTD");
const WidthOfTD = document.querySelector(".WidthOfTD");
const HeightOfTD = document.querySelector(".HeightOfTD");
const WidthOfBorder = document.querySelector(".WidthOfBorder");
const selectStyleBorder = document.getElementById("selectStyle");
const selectColorBorder = document.getElementById("selectColor");

tableBtnCreate.addEventListener("click", () => {

    CountTR.style.border = `1px solid grey`;
    CountTD.style.border = `1px solid grey`;
    WidthOfTD.style.border = `1px solid grey`;
    HeightOfTD.style.border = `1px solid grey`;
    WidthOfBorder.style.border = `1px solid grey`;
    selectStyleBorder.style.border = `1px solid grey`;
    selectColorBorder.style.border = `1px solid grey`;

    if(CountTR.value === ''){
        CountTR.style.border = `1px solid red`;
    }
    if(CountTD.value === ''){
        CountTD.style.border = `1px solid red`;
    }
    if(WidthOfTD.value === ''){
        WidthOfTD.style.border = `1px solid red`;
    }
    if(HeightOfTD.value === ""){
        HeightOfTD.style.border = `1px solid red`;
    }
    if(WidthOfBorder.value === ""){
        WidthOfBorder.style.border = `1px solid red`;
    }
    if(selectStyleBorder.value === "choose style"){
        selectStyleBorder.style.border = `1px solid red`;
    }
    if(selectColorBorder.value === "choose color"){
        selectColorBorder.style.border = `1px solid red`;
    }
    else{

        table.style.display = `none`;
        textArea.style.background = `rgba(0,0,0,0)`;
        textArea.style.transition = `1s ease`;
        
        textArea.append(...getCountTR(CountTR, CountTD, WidthOfTD, HeightOfTD, selectColorBorder, selectStyleBorder, WidthOfBorder ));
        textArea.innerHTML += ``;
    }
});

tableBtnReset.addEventListener('click',()=>{
    CountTR.value = '';
    CountTD.value = '';
    WidthOfTD.value = '';
    HeightOfTD.value = '';
    WidthOfBorder.value = '';
    selectStyleBorder.value = 'choose style';
    selectColorBorder.value = 'choose color';
    CountTR.style.border = `1px solid grey`;
    CountTD.style.border = `1px solid grey`;
    WidthOfTD.style.border = `1px solid grey`;
    HeightOfTD.style.border = `1px solid grey`;
    WidthOfBorder.style.border = `1px solid grey`;
    selectStyleBorder.style.border = `1px solid grey`;
    selectColorBorder.style.border = `1px solid grey`;
});

// =============================================

menuEditBarBtn3.addEventListener('click',()=>{
    li.style.display = `block`;
    table.style.display = `none`;
    OL.style.display = `none`;
    textArea.style.background = `rgba(0,0,0,0.5)`;
    textArea.style.transition = `1s ease`;
});

const liBtnCreate = document.querySelector(".liBtnCreate");
const liBtnReset = document.querySelector(".liBtnReset");
const liBtnClose = document.querySelector('.liBtnClose');
const li = document.querySelector(".li");
const Li = document.getElementById("liCountLiItem");
const Type = document.getElementById("liCountType");

liBtnCreate.addEventListener("click", () => {

    Li.style.border = `1px solid grey`;
    Type.style.border = `1px solid grey`;

    if(Li.value === ''){
        Li.style.border = `1px solid red`;
    }
    if(Type.value === 'choose Ul type mark'){
        Type.style.border = `1px solid red`;
    }
    if(Li.value != '' && Type.value != 'choose Ul type mark'){

        li.style.display = `none`;
        textArea.style.background = `rgba(0,0,0,0)`;
        textArea.style.transition = `1s ease`;

        textArea.append(...getList(Li, Type));
        textArea.innerHTML += ``;
    }
});

liBtnClose.addEventListener('click',()=>{
    li.style.display = `none`;
    textArea.style.background = `rgba(0,0,0,0)`;
    textArea.style.transition = `1s ease`;
});

liBtnReset.addEventListener('click',()=>{
    Li.value = '';
    Type.value = 'choose Ul type mark';
    Li.style.border = `1px solid grey`;
    Type.style.border = `1px solid grey`;
});

// ============================================

const olBtnCreate = document.querySelector(".olBtnCreate");
const olBtnReset = document.querySelector(".olBtnReset");
const olBtnClose = document.querySelector('.olBtnClose');
const OL = document.querySelector(".ol");
const Ol = document.getElementById("olCountLiItem");
const Types = document.getElementById("olCountType");

olBtnCreate.addEventListener("click", () => {

    Ol.style.border = `1px solid grey`;
    Types.style.border = `1px solid grey`;

    if(Ol.value === ''){
        Ol.style.border = `1px solid red`;
    }
    if(Types.value === 'choose Ol type mark'){
        Types.style.border = `1px solid red`;
    }
    
    if(Ol.value != '' && Types.value != 'choose Ol type mark'){

        OL.style.display = `none`;
        textArea.style.background = `rgba(0,0,0,0)`;
        textArea.style.transition = `1s ease`;

        let result = [];
        const ol = document.createElement(`ol`);
        ol.style.marginLeft = `20px`;
        result.push(ol);

        textArea.append(...getOlList(ol, Ol, Types, result));
        textArea.innerHTML += ``;
    }
});

olBtnReset.addEventListener('click',()=>{
    Ol.value = '';
    Types.value = 'choose Ol type mark';
    Ol.style.border = `1px solid grey`;
    Types.style.border = `1px solid grey`;
});

olBtnClose.addEventListener('click',()=>{
    OL.style.display = `none`;
    textArea.style.background = `rgba(0,0,0,0)`;
    textArea.style.transition = `1s ease`;
});

menuEditBarBtn4.addEventListener('click',()=>{
    li.style.display = `none`;
    table.style.display = `none`;
    OL.style.display = `block`;
    textArea.style.background = `rgba(0,0,0,0.5)`;
    textArea.style.transition = `1s ease`;
});

// ============================================

const out = document.querySelector('.out');
const cancelBtn = document.querySelector('.cancelBtn');
const singOutBtn = document.querySelector('.singOutBtn');

cancelBtn.addEventListener('click',()=>{
    out.style.display = `none`;
    textMonitor.style.background = `rgba(0,0,0,0)`;
    textMonitor.style.transition = `1s ease`;
});

singOutBtn.addEventListener('click',()=>{
    lockBtn.style.display = `block`;
    unLockBtn.style.display = `none`;
    out.style.display = `none`;
    editBtn.disabled = true;
    inputName.value = '';
    inputPassword.value = '';
    textMonitor.style.background = `rgba(0,0,0,0)`;
    textMonitor.style.transition = `1s ease`;

    inputName.style.border = `1px solid grey`;
    inputName.style.boxShadow = `none`;
    spanName.innerHTML = ``;
    inputPassword.style.border = `1px solid grey`;
    inputPassword.style.boxShadow = `none`;
    spanPassword.innerHTML = ``;
});

unLockBtn.addEventListener('click',()=>{
    out.style.display = `block`;
    textMonitor.style.background = `rgba(0,0,0,0.5)`;
    textMonitor.style.transition = `1s ease`;
});

// ============================================

const spanName = document.querySelector('.spanName');
const spanPassword = document.querySelector('.spanPassword');

inputName.addEventListener('keyup',()=>{
    validateName( Name, inputName, spanName );
});

inputPassword.addEventListener('keyup',()=>{
    validatePassword( Password, inputPassword, spanPassword );
});


const file = document.getElementById('file');

file.addEventListener('change',()=>{
    loadFile(event, textMonitor)
});
