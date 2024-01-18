// Starter Code 

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt (message, shiftValue)
//Initialize Variables
{   //empty string to store final result
    encryptedMessage = ""
    //keep track of the number of processed letter
    letterCounter = 0
    
    function shiftCharacterToRight(character, shiftValue) {
        character = character.toLowerCase();
        const index = alphabet.indexOf(character);
        (index + shiftValue) % alphabet.length
        return shiftedCharacter;
    }


  // Your encryption code here
  return encryptedMessage;
}

function decrypt (encryptedMessage, shiftValue)
{
  // Your decryption code here
  return decryptedMessage;
}