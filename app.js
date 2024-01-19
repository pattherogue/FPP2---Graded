// Starter Code 

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function shiftCharacterToRight(character, shiftValue) {
    //convert character to lower case
    character = character.toLowerCase();
    //find index of character in alphabet array
    const index = alphabet.indexOf(character);
    //find new index 
    const newIndex = (index + shiftValue) % alphabet.length
    //find shifted character
    const shiftedCharacter = alphabet[newIndex];
    //return
    return shiftedCharacter
}

function getRandomLetter() {
    //generate random index
   const randomIndex = Math.floor(Math.random() * alphabet.length);
   //use index to get a letter
   return alphabet[randomIndex];
}

function encrypt(message, shiftValue)
//Initialize Variables
{   //empty string to store final result
    encryptedMessage = ""
    //keep track of the number of processed letter
    letterCounter = 0

    //loop that iterates over 'message' parameter
    for (let i = 0; i < message.length; i++) {
        //convert lowercase and check if in alphabet string
        let character = message[i].toLowerCase();
        //if character of alphabet array is present
        if (alphabet.indexOf(character) !== -1) {
            //character is a letter
            let shiftedChar = shiftCharacterToRight(character, shiftValue);
            //append to encryptedMessage
            encryptedMessage += shiftedChar;
            //increment the counter
            letterCounter++;
            //check if two letter have been processed
            if (letterCounter === 2) {
                //append random letter
                encryptedMessage += getRandomLetter();
                //reset counter
                letterCounter = 0;
            }
        } else {
            //character is not a letter
            encryptedMessage += message[i];
        }
    }
    
  // Your encryption code here
  return encryptedMessage;
}

function decrypt (encryptedMessage, shiftValue)
{
  // Your decryption code here
  return decryptedMessage;
}