// Starter Code 
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function shiftCharacterToRight(character, shiftValue) {
    // Convert character to lower case
    character = character.toLowerCase();
    // Find index of character in alphabet array
    const index = alphabet.indexOf(character);
    // Find new index 
    const newIndex = (index + shiftValue) % alphabet.length;
    // Find shifted character
    const shiftedCharacter = alphabet[newIndex];
    // Return
    return shiftedCharacter;
}

function getRandomLetter() {
    // Generate random index
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    // Use index to get a letter
    return alphabet[randomIndex];
}

function encrypt(message, shiftValue) {
    // Initialize Variables
    let encryptedMessage = ""; // Empty string to store final result
    let letterCounter = 0;     // Keep track of the number of processed letters

    // Loop that iterates over 'message' parameter
    for (let i = 0; i < message.length; i++) {
        // Convert lowercase and check if in alphabet string
        let character = message[i].toLowerCase();
        // If character of alphabet array is present
        if (alphabet.indexOf(character) !== -1) {
            // Character is a letter
            let shiftedChar = shiftCharacterToRight(character, shiftValue);
            // Append to encryptedMessage
            encryptedMessage += shiftedChar;
            // Increment the counter
            letterCounter++;
            // Check if two letters have been processed
            if (letterCounter === 2) {
                // Append random letter
                encryptedMessage += getRandomLetter();
                // Reset counter
                letterCounter = 0;
            }
        } else {
            // Character is not a letter
            encryptedMessage += message[i];
        }
    }
    
    // Return the encrypted message
    return encryptedMessage;
}

function decrypt(encryptedMessage, shiftValue) {
    let decryptedMessage = "";
    let skipCounter = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
        if (skipCounter === 2) {
            // Skip this character and reset counter
            skipCounter = 0;
            continue; // Next iteration of loop
        }

        let character = encryptedMessage[i].toLowerCase();
        if (alphabet.indexOf(character) !== -1) {
            // Calculate the original index by reversing the shift
            let originalIndex = (alphabet.indexOf(character) - shiftValue) % alphabet.length;

            // Handle negative index for wrap-around
            if (originalIndex < 0) {
                originalIndex += alphabet.length;
            }

            // Add decrypted character to decryptedMessage
            decryptedMessage += alphabet[originalIndex];
        } else {
            // Character is not a letter
            decryptedMessage += encryptedMessage[i];
        }

        skipCounter++;
    }

    // Return the decrypted message
    return decryptedMessage;
}
