let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Set the default voice

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i); // Add each voice to the select dropdown
    });
};

document.querySelector("button").addEventListener('click', () => {
    speech.text = document.querySelector("textarea").value;
    speech.voice = voices[voiceSelect.value]; // Set the selected voice
    window.speechSynthesis.speak(speech);
});