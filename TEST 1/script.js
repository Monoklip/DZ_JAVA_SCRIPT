const edit = document.querySelector(".edit");
const style = document.querySelector(".style");
const add = document.querySelector(".add");
const save = document.querySelector(".save");
const seting = document.querySelector(".seting");
const setingEdit = document.querySelector(".seting-edit");
const setingStyle = document.querySelector(".seting-style");
const textarea = document.getElementById("textarea");
const text = document.querySelector(".text");
const px12 = document.querySelector(".px12");
const px14 = document.querySelector(".px14");
const px16 = document.querySelector(".px16");
const px18 = document.querySelector(".px18");
const px20 = document.querySelector(".px20");
const chooseOption = document.getElementById("choose");
const bold = document.getElementById("bold");
const cursive = document.getElementById("cursive");
const textAdd = document.querySelector(".text-add");

text.innerHTML = `${textarea.value}`;

edit.addEventListener("mousemove", () => {
    edit.style.background = "rgb(156, 156, 16)";
});
edit.addEventListener("mouseleave", () => {
    edit.style.background = "rgb(201, 201, 52)";
});
style.addEventListener("mousemove", () => {
    style.style.background = "rgb(25, 104, 194)";
});
style.addEventListener("mouseleave", () => {
    style.style.background = "rgb(51, 137, 235)";
});
add.addEventListener("mousemove", () => {
    add.style.background = "rgb(168, 14, 14)";
});
add.addEventListener("mouseleave", () => {
    add.style.background = "red";
});
save.addEventListener("mousemove", () => {
    save.style.background = "rgb(6, 83, 6)";
});
save.addEventListener("mouseleave", () => {
    save.style.background = "green";
});

// ==================================

edit.addEventListener("click", () => {
    setingEdit.style.display = "block";
    setingStyle.style.display = "none";
    text.style.display = "block";
    textAdd.style.display = "none";
});
style.addEventListener("click", () => {
    setingStyle.style.display = "flex";
    setingEdit.style.display = "none";
});
save.addEventListener("click", () => {
    text.innerHTML = `${textarea.value}`;
    setingEdit.style.display = "none";
});

// ==================================

px12.addEventListener("click", () => {
    if (px12.checked) {
        text.style.fontSize = `12px`;
    }
});
px14.addEventListener("click", () => {
    if (px14.checked) {
        text.style.fontSize = `14px`;
    }
});
px16.addEventListener("click", () => {
    if (px16.checked) {
        text.style.fontSize = `16px`;
    }
});
px18.addEventListener("click", () => {
    if (px18.checked) {
        text.style.fontSize = `18px`;
    }
});
px20.addEventListener("click", () => {
    if (px20.checked) {
        text.style.fontSize = `20px`;
    }
});

// ==================================

chooseOption.addEventListener("change", (event) => {
    text.style.fontFamily = `${event.target.value}`;
});

bold.addEventListener("click", () => {
    if (bold.checked) {
        text.style.fontWeight = `bold`;
    } else {
        text.style.fontWeight = `normal`;
    }
});

cursive.addEventListener("click", () => {
    if (cursive.checked) {
        text.style.fontStyle = `italic`;
    } else {
        text.style.fontStyle = `normal`;
    }
});

// ==================================

const backgroundColor = document.querySelector(".backgroundColor");
const colorOfText = document.querySelector(".colorOfText");
const backcolor = document.querySelector(".backcolor");
const textcolor = document.querySelector(".textcolor");

backgroundColor.addEventListener("click", () => {
    backcolor.style.display = "block";
    textcolor.style.display = "none";
});

backgroundColor.addEventListener("mousemove", () => {
    backgroundColor.style.background = " rgb(100, 98, 98)";
});
colorOfText.addEventListener("mousemove", () => {
    colorOfText.style.background = " rgb(100, 98, 98)";
});
backgroundColor.addEventListener("mouseleave", () => {
    backgroundColor.style.background = "grey";
});
colorOfText.addEventListener("mouseleave", () => {
    colorOfText.style.background = "grey";
});

// ==================================

const red = document.getElementById("red");
red.addEventListener("click", () => {
    text.style.background = "red";
    backcolor.style.display = "none";
});
const blue = document.getElementById("blue");
blue.addEventListener("click", () => {
    text.style.background = "blue";
    backcolor.style.display = "none";
});
const green = document.getElementById("green");
green.addEventListener("click", () => {
    text.style.background = "green";
    backcolor.style.display = "none";
});
const yellow = document.getElementById("yellow");
yellow.addEventListener("click", () => {
    text.style.background = "yellow";
    backcolor.style.display = "none";
});
const pink = document.getElementById("pink");
pink.addEventListener("click", () => {
    text.style.background = "pink";
    backcolor.style.display = "none";
});
const brown = document.getElementById("brown");
brown.addEventListener("click", () => {
    text.style.background = "brown";
    backcolor.style.display = "none";
});
const grey = document.getElementById("grey");
grey.addEventListener("click", () => {
    text.style.background = "grey";
    backcolor.style.display = "none";
});
const white = document.getElementById("white");
white.addEventListener("click", () => {
    text.style.background = "white";
    backcolor.style.display = "none";
});
const purple = document.getElementById("purple");
purple.addEventListener("click", () => {
    text.style.background = "purple";
    backcolor.style.display = "none";
});

// ==================================

colorOfText.addEventListener("click", () => {
    textcolor.style.display = "block";
    backcolor.style.display = "none";
});

const red1 = document.getElementById("red1");
red1.addEventListener("click", () => {
    text.style.color = "red";
    textcolor.style.display = "none";
});
const blue1 = document.getElementById("blue1");
blue1.addEventListener("click", () => {
    text.style.color = "blue";
    textcolor.style.display = "none";
});
const green1 = document.getElementById("green1");
green1.addEventListener("click", () => {
    text.style.color = "green";
    textcolor.style.display = "none";
});
const yellow1 = document.getElementById("yellow1");
yellow1.addEventListener("click", () => {
    text.style.color = "yellow";
    textcolor.style.display = "none";
});
const pink1 = document.getElementById("pink1");
pink1.addEventListener("click", () => {
    text.style.color = "pink";
    textcolor.style.display = "none";
});
const brown1 = document.getElementById("brown1");
brown1.addEventListener("click", () => {
    text.style.color = "brown";
    textcolor.style.display = "none";
});
const grey1 = document.getElementById("grey1");
grey1.addEventListener("click", () => {
    text.style.color = "grey";
    textcolor.style.display = "none";
});
const white1 = document.getElementById("white1");
white1.addEventListener("click", () => {
    text.style.color = "white";
    textcolor.style.display = "none";
});
const purple1 = document.getElementById("purple1");
purple1.addEventListener("click", () => {
    text.style.color = "purple";
    textcolor.style.display = "none";
});

// ==================================

const button = document.querySelector(".button");

add.addEventListener("click", () => {
    text.style.display = "none";
    seting.style.display = "none";
    textAdd.style.display = "block";
    button.style.display = "none";
});

// ==================================

const tableRadio = document.querySelector(".tableRadio");
const listRadio = document.querySelector(".listRadio");
const up = document.querySelector(".up");
const table = document.querySelector(".table");
const list = document.querySelector(".list");

tableRadio.addEventListener("click", () => {
    if (tableRadio.checked) {
        up.style.display = "block";
        table.style.display = "block";
        list.style.display = "none";
    }
});

listRadio.addEventListener("click", () => {
    if (listRadio.checked) {
        list.style.display = "block";
        table.style.display = "none";
    }
});

// ==================================

const btncCreateTable = document.querySelector(".create-table");

btncCreateTable.addEventListener("click", () => {
    text.style.display = "block";
    textAdd.style.display = "none";
    button.style.display = "block";
    list.style.display = "none";
    table.style.display = "none";
    seting.style.display = "block";

    const countTR = document.querySelector(".TR");
    const countTD = document.querySelector(".TD");
    const widthTD = document.querySelector(".wTD");
    const heightTD = document.querySelector(".hTD");
    const brd = document.querySelector(".brd");
    const brdType = document.querySelector(".brdType");
    const brdColor = document.querySelector(".brdColor");

    function getCountTR() {
        let result = [];

        const Table = document.createElement(`table`);
        Table.style.marginTop = `20px`;
        result.push(Table);

        for (let i = 1; i <= countTR.value; i++) {

            const tr = document.createElement(`tr`);
            tr.style.display = `flex`;
            Table.append(tr);
           
            for(let j = 1; j <= countTD.value; j++){
                const td = document.createElement(`td`);
                td.style.width = `${widthTD.value}px`;
                td.style.height =`${heightTD.value}px`;
                td.style.borderColor = `${brdColor.value}`;
                td.style.borderStyle = `${brdType.value}`;
                td.style.borderWidth = `${brd.value}px`;
                td.style.display = "flex";
                td.style.justifyContent = "center";
                td.style.alignItems = "center";
                tr.append(td);
                td.innerText = `TD`;
            }
        }
        return result;
    }

    textarea.append(...getCountTR());
    textarea.innerHTML += ``;
});

// ==================================

const btnCreateList = document.querySelector(".create-list");

btnCreateList.addEventListener("click", () => {
    text.style.display = "block";
    textAdd.style.display = "none";
    button.style.display = "block";
    list.style.display = "none";
    table.style.display = "none";
    seting.style.display = "block";

    const Li = document.querySelector(".Li");
    const Marks = document.getElementById("Marks");

    function getList() {
        let result = [];

        for (let i = 1; i <= Li.value; i++) {
            const li = document.createElement(`li`);
            li.style.listStyleType = `${Marks.value}`;
            li.style.marginTop = `10px`;
            li.innerText = `item`;
            li.append(i);
            result.push(li);
        }
        return result;
    }

    textarea.append(...getList());
    textarea.innerHTML += ``;
});
