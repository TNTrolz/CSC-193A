/*
 * Starter file 
 */
(function () {
  "use strict";

  /**
   * Initializes the event listeners when the page is loaded.
   */
  window.addEventListener("load", init);

  /**
   * Initializes event handlers for buttons.
   */
  function init() {
    const encryptButton = document.getElementById("encrypt-it");
    const resetButton = document.getElementById("reset");

    encryptButton.addEventListener("click", handleEncrypt);
    resetButton.addEventListener("click", handleReset);
  }

  /**
   * Handles the encryption of text using a basic shift cipher.
   */
  function handleEncrypt() {
    const inputText = document.getElementById("input-text").value;
    const encryptedText = shiftCipher(inputText);
    document.getElementById("result").textContent = encryptedText;
  }

  /**
   * Clears the input and result text areas.
   */
  function handleReset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  /**
   * Applies a basic shift cipher to the input text.
   * @param {string} text - The input text to encrypt.
   * @returns {string} - The encrypted text.
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";

    for (let i = 0; i < text.length; i++) {
      if (text[i] < "a" || text[i] > "z") {
        result += text[i]; // Keep non-alphabet characters unchanged
      } else if (text[i] === "z") {
        result += "a"; // Wrap 'z' to 'a'
      } else {
        let letter = text.charCodeAt(i);
        result += String.fromCharCode(letter + 1);
      }
    }

    return result;
  }
})();
