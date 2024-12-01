// Alert to confirm JS is loaded
alert("Hello, world!");

// Function to increase text size
function makeTextBigger() {
    const textArea = document.getElementById("inputText");
    textArea.style.fontSize = "24pt";
}

// Event listener for Bigger button
document.getElementById("biggerButton").onclick = makeTextBigger;

// Function to apply FancyShmancy styles
function applyFancyStyles() {
    const textArea = document.getElementById("inputText");
    if (document.getElementById("fancyRadio").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
}

// Function to apply BoringBetty styles
function applyBoringStyles() {
    const textArea = document.getElementById("inputText");
    if (document.getElementById("boringRadio").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to Mooify text
function mooifyText() {
    const textArea = document.getElementById("inputText");
    const sentences = textArea.value.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].toUpperCase() + "-Moo";
    }
    textArea.value = sentences.join(".") + ".";
}

// Event listener for Moo button
document.getElementById("mooButton").onclick = mooifyText;
