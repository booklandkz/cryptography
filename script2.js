// Шифрлау функциясы
function encrypt() {
    const message = document.getElementById("message").value;
    const shift = parseInt(document.getElementById("shift").value);
    let encrypted = "";

    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        if (char.match(/[а-яёА-ЯЁ]/)) {
            const charCode = char.charCodeAt(0);
            const base = charCode >= 1040 && charCode <= 1103 ? 1040 : 1072; // Кириллица басы
            const newChar = String.fromCharCode(((charCode - base + shift) % 32) + base);
            encrypted += newChar;
        } else {
            encrypted += char; // Басқа символдар өзгермейді
        }
    }

    document.getElementById("result").value = encrypted;
}

// Дешифрлау функциясы
function decrypt() {
    const message = document.getElementById("message").value;
    const shift = parseInt(document.getElementById("shift").value);
    let decrypted = "";

    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        if (char.match(/[а-яёА-ЯЁ]/)) {
            const charCode = char.charCodeAt(0);
            const base = charCode >= 1040 && charCode <= 1103 ? 1040 : 1072; // Кириллица басы
            const newChar = String.fromCharCode(((charCode - base - shift + 32) % 32) + base);
            decrypted += newChar;
        } else {
            decrypted += char; // Басқа символдар өзгермейді
        }
    }

    document.getElementById("result").value = decrypted;
}
