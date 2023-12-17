document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('.contact_form');
    var nameInput = document.querySelector('.contact_form-el--name');
    var phoneInput = document.querySelector('.contact_form-el--phone');
    var emailInput = document.querySelector('.contact_form-el--email');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var emailValue = emailInput.value.trim();
        if (!isValidEmail(emailValue)) {
            alert('Veuillez saisir une adresse e-mail valide.');
            return;
        }

        var nameValue = nameInput.value.trim();
        if (!isValidName(nameValue)) {
            alert('Veuillez saisir un nom valide (seulement des caractères et des espaces).');
            return;
        }

        var phoneValue = phoneInput.value.trim();
        if (!isValidPhoneNumber(phoneValue)) {
            alert('Veuillez saisir un numéro de téléphone valide (seulement des chiffres).');
            return;
        }

        alert('Formulaire soumis avec succès !'); // Remplacez ceci par votre logique de soumission de formulaire réelle
    });

    nameInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });

    phoneInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidName(name) {
        return /^[a-zA-Z\s]+$/.test(name);
    }

    function isValidPhoneNumber(phone) {
        return /^[0-9]+$/.test(phone);
    }
});
