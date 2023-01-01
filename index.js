function shout(string) {
    return string.toUpperCase();  
} 

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    const message1 = "I can\'t hear you!";
    const message2 = "YES INDEED!";
    const message3 = "I would love to!"
    if (string === string.toLowerCase()) {
        return message1;
    } else if (string === string.toUpperCase()) {
        return message2;
    } else if (string === "Let\'s have dinner together!") {
        return message3;
    }
}
  