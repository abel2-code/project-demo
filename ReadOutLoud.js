import React from 'react'

function ReadOutLoud({message}) {
    const sayIt = (message) => {
        const speech = new SpeechSynthesisUtterance();
        speech.text = message;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 5;
    
        window.speechSynthesis.speak(speech)
    }

    return (
        <div>
            {sayIt(message)}
        </div>
    )
}

export default ReadOutLoud
