function checkForm() {
    var form = document.form;
    var name = form.name;
    var email = form.email;
    var textholder = form.textholder;
    var writeError = document.getElementById("errorName");

    if (name.value == "") {
        name.style.border = "2px solid #0e9aa7";

        writeErrorName.innerHTML =
            "Write your name <img src='slike/as.png'  width='20px'  /> ";
    } else if (email.value == "") {
        email.style.border = "2px solid #0e9aa7";
        writeErrorEmail.innerHTML =
            "Write your email <img src='slike/as.png'  width='20px'  /> ";
    } else if (textholder.value == "") {
        textholder.style.border = "2px solid #0e9aa7";
        writeErrorPh.innerHTML =
            "Write me a message <img src='slike/as.png'  width='20px'  /> ";
    } else {
        alert("Thanks for contact me, I will reply as soon as possible");
    }
}

function checkFormsr() {
    var form = document.form;
    var name = form.name;
    var email = form.email;
    var textholder = form.textholder;
    var writeError = document.getElementById("errorName");

    if (name.value == "") {
        name.style.border = "2px solid #0e9aa7";

        writeErrorName.innerHTML =
            "Unesite ime <img src='slike/as.png'  width='20px'  /> ";
    } else if (email.value == "") {
        email.style.border = "2px solid #0e9aa7";
        writeErrorEmail.innerHTML =
            "Unesite email <img src='slike/as.png'  width='20px'  /> ";
    } else if (textholder.value == "") {
        textholder.style.border = "2px solid #0e9aa7";
        writeErrorPh.innerHTML =
            "Napisite poruku <img src='slike/as.png'  width='20px'  /> ";
    } else {
        alert("Hvala na poslatoj poruci, odgovoricu cim stignem");
    }
}