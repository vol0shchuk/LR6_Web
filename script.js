let tab = document.getElementsByClassName("tab");
let tabContent = document.getElementsByClassName("tabContent");

function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove("show");
        tabContent[i].classList.add("hide");
        tab[i].classList.remove("whiteborder");
    }
}

hideTabsContent(1);

document.getElementById("tabs").onclick = function (event) {
    let target = event.target;
    if (target.className == "tab") {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
};

function showTabsContent(b) {
    if (tabContent[b].classList.contains("hide")) {
        hideTabsContent(0);
        tab[b].classList.add("whiteborder");
        tabContent[b].classList.remove("hide");
        tabContent[b].classList.add("show");
    }
}

function generate() {
    let rtl = rtlRange.value;
    let rtr = rtrRange.value;
    let rbr = rbrRange.value;
    let rbl = rblRange.value;

    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    block.style.borderRadius = rtl + "px " + rtr + "px " + rbr + "px " + rbl + "px";

    let bw = document.getElementById("bw").value;
    let bc = document.getElementById("bc").value;

    block.style.border = bw + "px solid " + bc;

    cssText.value =
`border-radius: ${rtl}px ${rtr}px ${rbr}px ${rbl}px;
border: ${bw}px solid ${bc};
border-color: ${bc};`;
}

let rtlRange = document.getElementById("rtl");
let rtrRange = document.getElementById("rtr");
let rbrRange = document.getElementById("rbr");
let rblRange = document.getElementById("rbl");

let ttl = document.getElementById("ttl");
let ttr = document.getElementById("ttr");
let tbr = document.getElementById("tbr");
let tbl = document.getElementById("tbl");

let block = document.getElementById("block");
let cssText = document.getElementById("cssText");
