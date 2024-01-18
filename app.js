// Starter Code 

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt (message, shiftValue)
//Initialize Variables
{   //empty string to store final result
    encryptedMessage = ""
    //keep track of the number of processed letter
    letterCounter = 0

    //loop that iterates over 'message' parameter
    for (let i = 0; i < message.length;i++) {
        
    }
    
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


  // Your encryption code here
  return encryptedMessage;
}

function decrypt (encryptedMessage, shiftValue)
{
  // Your decryption code here
  return decryptedMessage;
}