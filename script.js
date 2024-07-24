document.addEventListener("DOMContentLoaded", () => {

    const searcherArea = document.querySelector("#searchId__input");
    const copyBtn = document.querySelector("#copyBtnId");
    const passwordLenghtArea = document.querySelector("#passLenghtId");
    const passwordUpperRadio = document.querySelector("#passUpperId");
    const passwordLowerRadio = document.querySelector("#passLowerId");
    const passwordNumberRadio = document.querySelector("#passNumberId");
    const passwordSymbolRadio = document.querySelector("#passSymbolId");

    const modalWindow = document.querySelector("#modalId");
    const closeBtn = document.querySelector("#close-my-modal-btn");

    closeBtn.addEventListener("click", () => {
        modalWindow.classList.remove("open")
    })

    const generatePasswordBtn = document.querySelector("#btnGenerateId");

    //lets make our copy button
    copyBtn.addEventListener("click", () => {
        //Select text from searcher
        searcherArea.select();

        //Now we can copy the text inside the searcher
        document.execCommand("copy");
    });

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:',.<>?";


    function getRandomChar(charSet) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        return charSet[randomIndex];
    }

    function generatePassword(length, includeUpper, includeLower, includeNumbers, includeSymbols) {
        let charSet = "";
        if (includeUpper) charSet += upperCaseChars;
        if (includeLower) charSet += lowerCaseChars;
        if (includeNumbers) charSet += numberChars;
        if (includeSymbols) charSet += symbolChars;

        if (charSet === "") {
             //alert("Please select at least one character type");
             modalWindow.classList.add("open");
             return "";
         }

        let password = "";
        for (let i = 0; i < length; i++) {
            password +=getRandomChar(charSet);
        }
        return password;
    }

    generatePasswordBtn.addEventListener("click", () => {
        const length = parseInt(passwordLenghtArea.value);
        const includeUpper = passwordUpperRadio.checked;
        const includeLower = passwordLowerRadio.checked;
        const includeNumbers = passwordNumberRadio.checked;
        const includeSymbols = passwordSymbolRadio.checked;

        const newPassword = generatePassword(length, includeUpper, includeLower, includeNumbers, includeSymbols);
        searcherArea.value = newPassword;
    });

})