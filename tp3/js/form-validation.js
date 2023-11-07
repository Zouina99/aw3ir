window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");
    document.querySelector("#submit").addEventListener("click", function (event) {
        event.preventDefault();
        appp();

    });

    // Y mettre le code Javascript pour valider tous les champs du formulaire
};
// uname = document.getElementById("inputnom");

function appp() {
    validateEmail();
    champsvide();

    if (datecompare()) {
        alert("La date d'anniversaire est dans le futur. Cliquez sur OK pour revenir au formulaire.");
        document.getElementById('myForm').reset();
        return;
    }

    if (champsvide() == 0) {
        const modal = new bootstrap.Modal(document.getElementById('myModal'));
        modal.show();
    } else {
        showDetails();
    }
}





function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
function datecompare() {
    const birthday = document.getElementById('inputbirthday').value
    const birthdayDate = new Date(birthday); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#syntaxe
    const birthdayTimestamp = birthdayDate.getTime();

    const nowTimestamp = Date.now();
    return (birthdayTimestamp > nowTimestamp)
};
function champsvide() {
    uname = document.getElementById("inputnom").value;
    prenom = document.getElementById("inputprenom").value;
    birthday = document.getElementById("inputbirthday").value;
    Address = document.getElementById("inputAddress").value;
    Email = document.getElementById("inputEmail4").value;

    const modal = new bootstrap.Modal(document.getElementById('myModal'));

    return (uname && prenom && birthday && Address && Email)
};
function showDetails() {
    ufname = document.getElementById("inputprenom").value;
    ubirthday = document.getElementById("inputbirthday").value;
    uaddress = document.getElementById("inputAddress").value;
    document.getElementById("modalFirstName").textContent = ufname;
    document.getElementById("modalBirthday").textContent = ubirthday;
    document.getElementById("modalAddress").textContent = uaddress;
    document.querySelector("#detailsModal img").src = `https://maps.googleapis.com/maps/api/staticmap?markers=${uaddress}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg`
    const modald = new bootstrap.Modal(document.getElementById('detailsModal'));

    modald.show();


};