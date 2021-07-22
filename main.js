function speak(text) {
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.pitch = 0;
  utterance.volume = 5;
  utterance.rate = 1;
  speechSynthesis.speak(utterance);
}

if ('webkitSpeechRecognition' in window) {
  const songAudio = document.createElement('audio');
  songAudio.setAttribute('src', './song.mp3');
  const rockAudio = document.createElement('audio');
  rockAudio.setAttribute('src', './rock.mp3');
  let speechRecognition = new webkitSpeechRecognition();
  const start = document.querySelector('.start');

  let SpeechRecognition = webkitSpeechRecognition;
  let recognition = new SpeechRecognition();

  speechRecognition.onresult = function (e) {
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    if (transcript == 'open YouTube') {
      speak('Openning Youtube Sir');
      window.open('https://www.youtube.com');
    } else if (transcript == 'open Google') {
      speak('Openning Google Sir');
      window.open('https://www.google.com');
    } else if (transcript == 'open Facebook') {
      speak('Openning Facebook Sir');
      window.open('https://www.facebook.com');
    } else if (transcript == 'open Twitter') {
      speak('Openning Twwitter Sir');
      window.open('https://twitter.com/');
    } else if (transcript == '15 projects in Vanilla JavaScript') {
      window.open('https://www.youtube.com/watch?v=3PHXvlpOkf4');
    } else if (
      transcript == '40 projects for beginners in JavaScript free code camp'
    ) {
      window.open(
        'https://www.freecodecamp.org/news/javascript-projects-for-beginners'
      );
    } else if (transcript == 'current time') {
      let h = new Date().getHours();
      let m = new Date().getMinutes();
      let s = new Date().getSeconds();
      if (h > 12) {
        h = h - 12;
      }
      speak(`Current Time is: ${h}:${m}:${s}`);
    } else if (transcript == 'time') {
      let h = new Date().getHours();
      let m = new Date().getMinutes();
      let s = new Date().getSeconds();
      if (h > 12) {
        h = h - 12;
      }
      speak(`Current Time is: ${h}:${m}:${s}`);
    } else if (transcript == 'good') {
      speak('Thank you !');
    } else if (
      transcript == 'what is your name' ||
      transcript == "what's your name"
    ) {
      speak('My name is Alex');
    } else if (
      transcript == 'what is my name' ||
      transcript == "what's my name"
    ) {
      if (name != null || name != undefined || name != '') {
        speak(`Your name is ${localStorage.getItem('Name')}`);
      }
    } else if (transcript == 'I want to set my name') {
      var name = prompt('Name', '');
      var nameStorage = localStorage.setItem('Name', name);
      speak('Your name was set');
    } else if (
      transcript == 'play song' ||
      transcript == 'play a song for me' ||
      transcript == 'play song for me' ||
      transcript == 'play a song'
    ) {
      songAudio.play();
    } else if (transcript == 'stop song') {
      songAudio.pause();
    } else if (transcript == 'how to make Chrome extension') {
      speak("It's found from youtube");
      document.querySelector('.cont').innerHTML = ` <br/>
        <a href="https://www.youtube.com/watch?v=wHZCYi1K664" target="_blank">Build & Publish a Custom Google Chrome Extension</a> <br/> <br/>
        <a href="https://youtu.be/Ipa58NVGs_c" target="_blank">How To Make Chrome Extensions</a>
      `;
    } else if (transcript == 'hello') {
      speak('How are you. What I can help you');
    } else if (transcript == 'how are you') {
      speak('I am fine. And how are you');
    } else if (transcript == 'I am fine') {
      speak('Have a nice day');
    } else if (transcript == 'thank you') {
      speak('Your welcome');
    } else if (transcript == 'bye') {
      speak('Have A Nice Day');
    } else if (
      transcript == "what's your gender" ||
      transcript == 'whats your gender'
    ) {
      speak('I am male');
    } else if (
      transcript == "what's your owner name" ||
      transcript == 'whats your owner name' ||
      transcript == 'what is your owner name' ||
      transcript == 'what is your owner name' ||
      transcript == 'your owner name'
    ) {
      speak('My owner name is Sheikh Taha Jameel');
    } else if (
      transcript === 'open vs code' ||
      transcript === 'open Visual Studio code'
    ) {
      window.open('vscode://');
      speak('Opening Visual Studio Code Sir');
    } else if (transcript === 'play Rockabye' || transcript === 'play Rock') {
      rockAudio.play();
    } else if (transcript === 'stop Rockabye' || transcript === 'stop rock') {
      rockAudio.pause();
    } else if (transcript === 'loop Rockabye' || transcript === 'loop Rock') {
      rockAudio.setAttribute('loop', true);
    } else if (transcript === "it's good name") {
      speak('Thank you');
    } else if (transcript === "it's ok") {
      speak('Thanks to you also');
    } else if (transcript === 'how are you') {
      speak('I am fine. And How are you');
    } else if (transcript === 'I am fine') {
      speak("Let's start talking");
    } else if (transcript === 'good') {
      speak('Thank you');
    } else if (
      transcript === 'what is your job' ||
      transcript === "what's your job"
    ) {
      speak('My job is to help you');
    }
    console.log(transcript);
  };

  start.addEventListener('click', function () {
    speechRecognition.start();
  });
}
