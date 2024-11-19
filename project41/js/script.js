// 1. Hello speaker function
const helloSpeaker = {
    speakWord: 'Hello',
};

// This creates the Hello speaker function
(function () {
    helloSpeaker.speak = function (userName) {
        return helloSpeaker.speakWord + " " + userName;
    };
}());

// 2. Goodbye speaker function
const byeSpeaker = {
    speakWord: 'Good Bye',
};

// This creates the Goodbye speaker function
(function () {
    byeSpeaker.speak = function (userName) {
        return byeSpeaker.speakWord + " " + userName;
    };
}());

// 3. Loop through names and output results
(function () {
    const names = ['Yaakov', 'John', 'Jen', 'Jason', 'Paul', 'Frank', 'Larry', 'Paula', 'Laura', 'Jim'];

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const firstLetter = name.charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            console.log(byeSpeaker.speak(name));
            document.write(byeSpeaker.speak(name) + '<br>');
        } else {
            console.log(helloSpeaker.speak(name));
            document.write(helloSpeaker.speak(name) + '<br>');
        }
    }
})();
