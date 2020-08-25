import React, { useState, useEffect } from 'react';
import './App.css';
import ReadOutLoud from './ReadOutLoud';
import Translation from './Translation';

const btn = document.querySelector('.talk');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function App() {
  const [transcript, handleTranscript] = useState('');

  recognition.onstart = function() {
    console.log('voice activated');
  };
  
  recognition.onresult = function(e) {
    const current = e.resultIndex;

    const transcript = e.results[current][0].transcript
    handleTranscript(transcript)
  }
  
  return (
    <div className="App">
      <button className="talk" onClick={() => recognition.start()}>Talk</button>
    {transcript ?
      <div>
        {transcript}
        <Translation message={transcript}/>
        <ReadOutLoud message={transcript}/>
      </div> 
      : '' }
    </div>
  );
}

export default App;
