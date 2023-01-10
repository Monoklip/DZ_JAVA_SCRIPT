const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const n3 = document.querySelector("#n3");
const n4 = document.querySelector("#n4");
const n5 = document.querySelector("#n5");
const n6 = document.querySelector("#n6");
const n7 = document.querySelector("#n7");
const n8 = document.querySelector("#n8");
const n9 = document.querySelector("#n9");
const n0 = document.querySelector("#n0");
const nMinus = document.querySelector("#nMinus");
const nPlus = document.querySelector("#nPlus");
const n11 = document.querySelector("#n11");
const n12 = document.querySelector("#n12");
const n13 = document.querySelector("#n13");
const n14 = document.querySelector("#n14");
const n15 = document.querySelector("#n15");
const n16 = document.querySelector("#n16");
const n17 = document.querySelector("#n17");
const n18 = document.querySelector("#n18");
const n19 = document.querySelector("#n19");
const n20 = document.querySelector("#n20");
const shift = document.querySelector("#shift");
const shift2 = document.querySelector("#shift2");
const capslock = document.querySelector("#capslock");
const space = document.querySelector("#space");
const text = document.querySelector('.text')

document.addEventListener("keydown", (event) => {
  switch (event.keyCode) {
    case 65:
        a.style.background = "grey";
        text.innerText += `a`;
      break;
    case 66:
      b.style.background = "grey";
      text.innerText += `b`;
      break;
    case 67:
      c.style.background = "grey";
      text.innerText += `c`;
      break;
    case 68:
      d.style.background = "grey";
      text.innerText += `d`;
      break;
    case 69:
      e.style.background = "grey";
      text.innerText += `e`;
      break;
    case 70:
      f.style.background = "grey";
      text.innerText += `f`;
      break;
    case 71:
      g.style.background = "grey";
      text.innerText += `g`;
      break;
    case 72:
      h.style.background = "grey";
      text.innerText += `h`;
      break;
    case 73:
      i.style.background = "grey";
      text.innerText += `i`;
      break;
    case 74:
      j.style.background = "grey";
      text.innerText += `j`;
      break;
    case 75:
      k.style.background = "grey";
      text.innerText += `k`;
      break;
    case 76:
      l.style.background = "grey";
      text.innerText += `l`;
      break;
    case 77:
      m.style.background = "grey";
      text.innerText += `m`;
      break;
    case 78:
      n.style.background = "grey";
      text.innerText += `n`;
      break;
    case 79:
      o.style.background = "grey";
      text.innerText += `o`;
      break;
    case 80:
      p.style.background = "grey";
      text.innerText += `p`;
      break;
    case 81:
      q.style.background = "grey";
      text.innerText += `q`;
      break;
    case 82:
      r.style.background = "grey";
      text.innerText += `r`;
      break;
    case 83:
      s.style.background = "grey";
      text.innerText += `s`;
      break;
    case 84:
      t.style.background = "grey";
      text.innerText += `t`;
      break;
    case 85:
      u.style.background = "grey";
      text.innerText += `u`;
      break;
    case 86:
      v.style.background = "grey";
      text.innerText += `v`;
      break;
    case 87:
      w.style.background = "grey";
      text.innerText += `w`;
      break;
    case 88:
      x.style.background = "grey";
      text.innerText += `x`;
      break;
    case 89:
      y.style.background = "grey";
      text.innerText += `y`;
      break;
    case 90:
      z.style.background = "grey";
      text.innerText += `z`;
      break;

    case 9:
      tab.style.background = "grey";
      break;
    case 8:
      backspace.style.background = "grey";
      break;
    case 16:
      shift.style.background = "grey";
      break;
    case 16:
      shift2.style.background = "grey";
      break;
    case 32:
      space.style.background = "grey";
      text.innerHTML += `_`;
      break;
    case 13:
      enter.style.background = "grey";
      text.innerHTML += `<br>`;
      break;
    case 20:
      capslock.style.background = "grey";
      break;

    case 49:
      n1.style.background = "grey";
      text.innerText += `1`;
      break;
    case 50:
      n2.style.background = "grey";
      text.innerText += `2`;
      break;
    case 51:
      n3.style.background = "grey";
      text.innerText += `3`;
      break;
    case 52:
      n4.style.background = "grey";
      text.innerText += `4`;
      break;
    case 53:
      n5.style.background = "grey";
      text.innerText += `5`;
      break;
    case 54:
      n6.style.background = "grey";
      text.innerText += `6`;
      break;
    case 55:
      n7.style.background = "grey";
      text.innerText += `7`;
      break;
    case 56:
      n8.style.background = "grey";
      text.innerText += `8`;
      break;
    case 57:
      n9.style.background = "grey";
      text.innerText += `9`;
      break;
    case 48:
      n0.style.background = "grey";
      text.innerText += `0`;
      break;
    case 189:
      nMinus.style.background = "grey";
      text.innerText += `-`;
      break;
    case 187:
      nPlus.style.background = "grey";
      text.innerText += `+`;
      break;
    case 192:
      n11.style.background = "grey";
      text.innerText += '`';
      break;
    case 219:
      n12.style.background = "grey";
      text.innerText += `[`;
      break;
    case 221:
      n13.style.background = "grey";
      text.innerText += `]`;
      break;
    case 220:
      n14.style.background = "grey";
      text.innerText += " \\ ";
      break;
    case 188:
      n15.style.background = "grey";
      text.innerText += `,`;
      break;
    case 190:
      n16.style.background = "grey";
      text.innerText += `.`;
      break;
    case 191:
      n17.style.background = "grey";
      text.innerText += `/`;
      break;
    case 186:
      n18.style.background = "grey";
      text.innerText += `;`;
      break;
    case 222:
      n19.style.background = "grey";
      text.innerText += `'`;
      break;

    default:
      break;
  }
});

document.addEventListener("keyup", (event) => {
  switch (event.keyCode) {
    case 65:
      a.style.background = "white";
      break;
    case 66:
      b.style.background = "white";
      break;
    case 67:
      c.style.background = "white";
      break;
    case 68:
      d.style.background = "white";
      break;
    case 69:
      e.style.background = "white";
      break;
    case 70:
      f.style.background = "white";
      break;
    case 71:
      g.style.background = "white";
      break;
    case 72:
      h.style.background = "white";
      break;
    case 73:
      i.style.background = "white";
      break;
    case 74:
      j.style.background = "white";
      break;
    case 75:
      k.style.background = "white";
      break;
    case 76:
      l.style.background = "white";
      break;
    case 77:
      m.style.background = "white";
      break;
    case 78:
      n.style.background = "white";
      break;
    case 79:
      o.style.background = "white";
      break;
    case 80:
      p.style.background = "white";
      break;
    case 81:
      q.style.background = "white";
      break;
    case 82:
      r.style.background = "white";
      break;
    case 83:
      s.style.background = "white";
      break;
    case 84:
      t.style.background = "white";
      break;
    case 85:
      u.style.background = "white";
      break;
    case 86:
      v.style.background = "white";
      break;
    case 87:
      w.style.background = "white";
      break;
    case 88:
      x.style.background = "white";
      break;
    case 89:
      y.style.background = "white";
      break;
    case 90:
      z.style.background = "white";
      break;

    case 9:
      tab.style.background = "white";
      break;
    case 8:
      backspace.style.background = "white";
      break;
    case 16:
      shift.style.background = "white";
      break;
    case 16:
      shift2.style.background = "white";
      break;
    case 32:
      space.style.background = "white";
      break;
    case 13:
      enter.style.background = "white";
      break;
    case 20:
      capslock.style.background = "white";
      break;

    case 49:
      n1.style.background = "white";
      break;
    case 50:
      n2.style.background = "white";
      break;
    case 51:
      n3.style.background = "white";
      break;
    case 52:
      n4.style.background = "white";
      break;
    case 53:
      n5.style.background = "white";
      break;
    case 54:
      n6.style.background = "white";
      break;
    case 55:
      n7.style.background = "white";
      break;
    case 56:
      n8.style.background = "white";
      break;
    case 57:
      n9.style.background = "white";
      break;
    case 48:
      n0.style.background = "white";
      break;
    case 189:
      nMinus.style.background = "white";
      break;
    case 187:
      nPlus.style.background = "white";
      break;
    case 192:
      n11.style.background = "white";
      break;
    case 219:
      n12.style.background = "white";
      break;
    case 221:
      n13.style.background = "white";
      break;
    case 220:
      n14.style.background = "white";
      break;
    case 188:
      n15.style.background = "white";
      break;
    case 190:
      n16.style.background = "white";
      break;
    case 191:
      n17.style.background = "white";
      break;
    case 186:
      n18.style.background = "white";
      break;
    case 222:
      n19.style.background = "white";
      break;

    default:
      break;
  }
});

