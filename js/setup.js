(function () {
    'use strict';

    var userDialog = document.querySelector('.setup');
    userDialog.classList.remove('hidden');

    var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];

    var generateRandomElement = function (arr) {
        var number = Math.round(Math.random() * (arr.length - 1));
        return arr[number];
    };

    var createWizzard = function () {
        var obj = {
            name: generateRandomElement(WIZARD_NAMES) + ' ' + generateRandomElement(WIZARD_SURNAMES),
            coatColor: generateRandomElement(WIZARD_COATCOLORS),
            eyesColor: generateRandomElement(WIZARD_EYESCOLORS)
        };
        return obj;
    };

    var wizards = [createWizzard(), createWizzard(), createWizzard(), createWizzard()];

    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
    var similarListElement = document.querySelector('.setup-similar-list');

    var renderWizzard = function (wizard) {
        var wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
        return wizardElement;
    };

    var showWizards = function (arrWizards) {
        var fragment = document.createDocumentFragment();

        for (var i = 0; i < arrWizards.length; i++) {
            fragment.appendChild(renderWizzard(arrWizards[i]));
        }
        similarListElement.textContent = '';
        similarListElement.appendChild(fragment);
    };

    showWizards(wizards);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();